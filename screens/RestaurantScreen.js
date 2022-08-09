import React, { useEffect, useLayoutEffect, useState } from 'react'
import { View, Text, Image, ScrollView, Touchable, TouchableOpacity } from 'react-native'
import {useRoute, useNavigation} from '@react-navigation/native'
import { urlFor } from '../sanity'
import { ArrowLeftIcon, ChevronRightIcon, LocationMarkerIcon, StarIcon } from 'react-native-heroicons/solid';
import { QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import DishRow from '../components/DishRow';

export default function RestaurantScreen() {

  const navigation = useNavigation();

  useLayoutEffect(() => {
      navigation.setOptions({
          headerShown: false,
      })
  }, [])

  const {params : {id, imgUrl, title, rating, genre, address, shortDescription, dishes, long, lat}} = useRoute();

  return (
    <ScrollView>
      <View className='relative'>
        <Image
          source={{uri : urlFor(imgUrl).url()}}
          className='w-full h-56 bg-gray-300 p-4' 
        ></Image>
        <TouchableOpacity className='absolute top-14 left-5 p-2 bg-gray-100 rounded-full' onPress={navigation.goBack}>
          <ArrowLeftIcon size={20} color='#00ccbb'></ArrowLeftIcon>
        </TouchableOpacity>
      </View>

      <View className='bg-white'>
        <View className='px-4 pt-4'>
          <Text className='text-3xl font-bold'>{title}</Text>
          <View className='flex-row space-x-2 my-1'>
            <View className='flex-row items-center space-x-1'>
              <StarIcon color='green' opacity={0.5} size={22}></StarIcon>
                  <Text className='text-xs text-gray-500'>
                      <Text className='text-green-500'>{rating}</Text> . {genre}</Text>
            </View>
            <View className='flex-row items-center space-x-1'>
              <LocationMarkerIcon color='gray' opacity={0.4} size={22}></LocationMarkerIcon>
                  <Text className='text-xs text-gray-500'>{address}</Text>
            </View>
          </View>
            <Text className='text-gray-500 mt-2 pb-4'>{shortDescription}</Text>
        </View>

        <TouchableOpacity className='flex-row items-center space-x-2 p-4 border-y border-gray-300'>
            <QuestionMarkCircleIcon color='gray' opacity={0.6} size={22}></QuestionMarkCircleIcon>
            <Text className='pl-2 flex-1 text-md font-bold'>Hev a food allergy?</Text>
            <ChevronRightIcon color='green' opacity={0.5} size={22}></ChevronRightIcon>
        </TouchableOpacity>
      </View>

      <View>
        <Text className='px-4 pt-6 mb-3 font-bold text-xl'>
          Menu
        </Text>

        {/* Dishrows */}
        {dishes.map((dish) => (
          <DishRow
            key={dish._id}
            id={dish._id}
            name={dish.name}
            description={dish.shortDescription}
            price={dish.price}
            image={dish.image}
          >
          </DishRow>
        ))}
      </View>
    </ScrollView>
  )
}
