import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCards from './RestaurantCards'

export default function FeaturedRow({id, title, description}) {
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
            <RestaurantCards 
                id={132} 
                imgUrl='https://picsum.photos/200/300' 
                title="Yo sushi"
                rating={4.5}
                genre="Japanese" 
                address="1 main st" 
                shortDescription="lorem azeh luiaz azeah oaho"
                dishes={[]} 
                long={20} 
                lat={0}
            >
            </RestaurantCards>
            <RestaurantCards 
                id={132} 
                imgUrl='https://picsum.photos/200/300' 
                title="Yo sushi"
                rating={4.5}
                genre="Japanese" 
                address="1 main st" 
                shortDescription="lorem azeh luiaz azeah oaho"
                dishes={[]} 
                long={20} 
                lat={0}
            >
            </RestaurantCards>
            <RestaurantCards 
                id={132} 
                imgUrl='https://picsum.photos/200/300' 
                title="Yo sushi"
                rating={4.5}
                genre="Japanese" 
                address="1 main st" 
                shortDescription="lorem azeh luiaz azeah oaho"
                dishes={[]} 
                long={20} 
                lat={0}
            >
            </RestaurantCards>
            
        </ScrollView>
    </View>
  )
}