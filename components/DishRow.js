import React, {useState} from 'react'
import Currency from 'react-currency-formatter';

import { TouchableOpacity, View, Text, Image } from 'react-native'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../sanity';

export default function DishRow({id, name, description, price, image}) {

const [isPressed, setIsPressed] = useState(false)

  return (
    <>
    <TouchableOpacity onPress={() => setIsPressed(!isPressed)} className={'bg-white border border-gray-200 p-4 ${isPressed && border-b-0 border-t-0}'}>
        <View className='flex-row'>
            <View className='flex-1 pr-2'>
                    <Text className='text-lg mb-1'>{name}</Text>
                    <Text className='text-gray-400'>{description}</Text>
                    <Text className='text-gray-400 mt-2'>
                        <Currency quantity={price} current="GBP"></Currency>
                    </Text>
            </View>
            <View>
                <Image source={{uri : urlFor(image).url()}} className='h-20 w-20 bg-gray-300 p-4' style={{borderWidth:1, borderColor: "#F3F3F4"}}></Image>
            </View>
        </View>
    </TouchableOpacity>
    
    {isPressed && (
        <View className='bg-white px-4'>
            <View className='flex-row items-center space-x-2 pb-3'>
                <TouchableOpacity>
                    <MinusCircleIcon color="#00bbcc" size={40}></MinusCircleIcon>
                </TouchableOpacity>

                <Text>0</Text>

                <TouchableOpacity>
                    <PlusCircleIcon color="#00bbcc" size={40}></PlusCircleIcon>
                </TouchableOpacity>
            </View>
        </View>
    )}
    
    </>
  )
}
