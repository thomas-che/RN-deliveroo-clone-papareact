import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import {useNavigation} from '@react-navigation/native'
import { UserIcon, ChevronDownIcon, SearchIcon, AdjustmentsIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';


export default function HomeScreen() {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

  return (
    <SafeAreaView className='bg-white pt-5'>
        <View className=''>
            {/* header  */}
            <View className='flex flex-row flex-1 pb-3 items-center space-x-2 px-2'>
                <Image
                    source={{uri: 'https://picsum.photos/200/300'}}
                    className='h-7 w-7 bg-gray-300 p-4 rounded-full'
                ></Image>

                <View className='flex-1'>
                    <Text className='font-bold text-gray-400 text-xs'>Deliver now</Text>
                    <Text className='font-bold text-xl'>Current location
                        <ChevronDownIcon size={20} color='#00ccbb'></ChevronDownIcon>
                    </Text>
                </View>

                <UserIcon size={35} color='#00ccbb'></UserIcon>
            </View>

            {/* Search */}
            <View className='flex flex-row flex-1 items-center space-x-2 pb-2 px-2'>
                <View className='flex-row flex-1 space-x-2 bg-gray-200 p-3'>
                    <SearchIcon size={20} color='gray'></SearchIcon>
                    <TextInput
                        placeholder='Restaurants and cuisines'
                        keyboardType='default'
                    ></TextInput>
                </View>
                <AdjustmentsIcon color='#00ccbb'></AdjustmentsIcon>
            </View>

            {/* body */}
            <ScrollView className='bg-gray-100' contentContainerStyle={{paddingBottom: 100,}}>
                {/* categories */}
                <Categories></Categories>    

                {/* featured rows */}
                <FeaturedRow
                    id="123"
                    title="Fearured"
                    description="Paid placement from our partners"
                ></FeaturedRow>
                {/* Tasty discout rows */}
                <FeaturedRow
                    id="1234"
                    title="Tasty discounts"
                    description="AAA AAAA AAAAAA AAAAAAAA AAAAA aaaaa"                    
                ></FeaturedRow>
                {/* Offers near you */}
                <FeaturedRow
                    id="12345"
                    title="Offers near you"
                    description="ZZZ ZZZZ zZZZZZZZ ZZZZ Zzzzz zzzz"
                ></FeaturedRow>

            </ScrollView>

        </View>
    </SafeAreaView>
  )
}