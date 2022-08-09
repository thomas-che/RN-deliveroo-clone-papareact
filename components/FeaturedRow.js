import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCards from './RestaurantCards'
import sanityClient from '../sanity';

export default function FeaturedRow({id, title, description}) {

    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        sanityClient.fetch(
            `
            *[_type == "featured" && _id == $id]{
                ...,
                restaurants[]->{
                    ...,
                    dishes[]->,
                    type-> {
                        name
                    }
                }
            }[0]
            `, {id: id}
        ).then((data) => {setRestaurants(data?.restaurants)})
    })

    //console.log(restaurant);

  return (
    <View>
        <View className='mt-4 flex-row items-center justify-between px-4'>
            <Text className='font-bold text-lg'>{title}</Text>
            <ArrowRightIcon color='#00ccbb'></ArrowRightIcon>
        </View>

        <Text className='text-xs text-gray-500 px-4'>{description}</Text>

        <ScrollView
            horizontal
            contentContainerStyle={{
                paddingHorizontal: 15,
            }}
            showsHorizontalScrollIndicator={false}
            className='pt-4'
        >
            {/* RestaurantCards... */}

            {restaurants?.map((restaurant) => (
                    <RestaurantCards 
                        key={restaurant._id+(Math.random() + 1).toString(36).substring(7)}
                        id={restaurant._id}
                        imgUrl={restaurant.image}
                        title={restaurant.name}
                        rating={restaurant.rating}
                        genre={restaurant.type?.name}
                        address={restaurant.address}
                        shortDescription={restaurant.shortDescription}
                        dishes={restaurant.dishes}
                        long={restaurant.long}
                        lat={restaurant.lat}
                    ></RestaurantCards>
            ))}

            
        </ScrollView>
    </View>
  )
}