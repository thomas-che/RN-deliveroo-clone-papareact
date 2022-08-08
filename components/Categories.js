import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

export default function Categories() {
  return (
    <ScrollView
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
    >
        {/* CategoryCard */}
        <CategoryCard imgUrl='https://picsum.photos/200/300' title='Texting 1'></CategoryCard>
        <CategoryCard imgUrl='https://picsum.photos/200/300' title='Texting 2'></CategoryCard>
        <CategoryCard imgUrl='https://picsum.photos/200/300' title='Texting 3'></CategoryCard>
        <CategoryCard imgUrl='https://picsum.photos/200/300' title='Texting 1'></CategoryCard>
        <CategoryCard imgUrl='https://picsum.photos/200/300' title='Texting 2'></CategoryCard>
        <CategoryCard imgUrl='https://picsum.photos/200/300' title='Texting 3'></CategoryCard>
    </ScrollView>
  )
}