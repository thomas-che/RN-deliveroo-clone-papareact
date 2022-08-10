import { useNavigation } from '@react-navigation/native'
import React, {useEffect, useMemo, useState} from 'react'
import { SafeAreaView, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import { XCircleIcon } from 'react-native-heroicons/solid';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { selectRestaurant } from '../features/restaurantSlice';
import { urlFor } from '../sanity'
import Currency from 'react-currency-formatter';

export default function BasketScreen() {

    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant)
    const items = useSelector(selectBasketItems)
    const dispatch = useDispatch()
    const basketTotal = useSelector(selectBasketTotal)
    const [groupeItemsInBasket, setGroupeItemsInBasket] = useState([])
    
    useEffect(() => {
        console.log(items);
        const groupeItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item)
            return results;
        }, {}) 

        setGroupeItemsInBasket(groupeItems)
    }, [items])

    

  return (
        <SafeAreaView className='flex-1 bg-white'>
            <View className='flex-1 bg-gray-100'>
                <View className='p-5 border-b border-[#00ccbb] bg-white shadow-xs'>
                    <View>
                        <Text className='text-lg font-bold text-center'>Basket</Text>
                        <Text className='text-center text-gray-400'>{restaurant.title}</Text>
                    </View>
                    <TouchableOpacity
                        onPress={navigation.goBack}
                        className='rounded-full bg-gray-100 absolute top-3 right-5'
                        >
                        <XCircleIcon color='#00ccbb' height={50} width={50}></XCircleIcon>
                    </TouchableOpacity>
                </View>
                <View className='flex-row items-center space-x-4 px-4 py-3 bg-white my-5'>
                    <Image
                        source={{uri: 'https://picsum.photos/200/300'}}
                        className='h-7 w-7 bg-gray-300 p-4 rounded-full'
                    ></Image>
                    <Text className='flex-1'>Deliver in 50-75 min</Text>
                    <TouchableOpacity>
                        <Text className="text-[#00ccbb]">Change</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView className='divide-y divide-gray-200'>
                    {Object.entries(groupeItemsInBasket).map(([key, items]) => (
                        <View key={key} className='flex-row items-center space-x-3 bg-white py-2 px-5'>
                            <Text className='text-[#00ccbb]'>{items.length} x</Text>
                            <Image
                                source={{uri : urlFor(items[0]?.image).url()}}
                                className='h-12 w-12 rounded-full' 
                            ></Image>
                            <Text className='flex-1'>{items[0]?.name}</Text>

                            <Text className='flex-1'>
                                <Currency quantity={items[0]?.price} current="GBP"></Currency>
                            </Text>

                            <TouchableOpacity
                                onPress={() => dispatch(removeFromBasket({id: key}))}
                            >
                                <Text
                                    className='text-[#00ccbb] text-xs'
                                >
                                    Remove
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>

                <View className='p-5 bg-white mt-5 space-y-4'>
                    <View className='flex-row justify-between'>
                        <Text className='text-gray-400'>Subtotal</Text>
                        <Text className='text-gray-400'>
                            <Currency quantity={basketTotal} current="GBP"></Currency>
                        </Text>
                    </View>

                    <View className='flex-row justify-between'>
                        <Text className='text-gray-400'>Delivery Fee</Text>
                        <Text className='text-gray-400'>
                            <Currency quantity={5.99} current="GBP"></Currency>
                        </Text>
                    </View>

                    <View className='flex-row justify-between'>
                        <Text>Order Total</Text>
                        <Text className='font-extrabold'>
                            <Currency quantity={basketTotal+5.99} current="GBP"></Currency>
                        </Text>
                    </View>

                    <TouchableOpacity className='rounded-lg bg-[#00ccbb] p-4'>
                        <Text className='text-white text-center text-lg font-bold'>Place Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
