import React from 'react'
import { TouchableOpacity } from 'react-native'
import { StarIcon } from 'react-native-heroicons/solid'
import { View, Text, Image } from 'react-native'
import { LocationMarkerIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'

export default function RestaurantCards({id, imgUrl, title, rating, genre, address, shortDescription, dishes, long, lat}) {
  return (
    <TouchableOpacity className='bg-white mr-3 shadow'>
        <Image 
            source={{uri: urlFor(imgUrl).url()}}
            className='h-36 w-64 rounded-sm'
        ></Image>
        <View className='px-3 pb-4'>
            <Text className="font-bold text-lg pt-2"></Text>
            <View className='flex-row items-center space-x-1'>
                <StarIcon color='green' opacity={0.4} size={22}></StarIcon>
                <Text className='text-xs text-gray-500'>
                    <Text className='text-green-500'>{rating}</Text> . {genre}</Text>
            </View>

            <View className='flex-row items-center space-x-1'>
                <LocationMarkerIcon color='gray' opacity={0.4} size={22}></LocationMarkerIcon>
                <Text className='text-xs text-gray-500'>Nearly . {address}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}
