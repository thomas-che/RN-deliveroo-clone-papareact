import { View, Text, ScrollView } from 'react-native'
import React,{useEffect, useState} from 'react'
import CategoryCard from './CategoryCard'
import sanityClient from '../sanity';
import { urlFor } from '../sanity'

export default function Categories() {

  const [categories, setCategories] = useState([])

  useEffect(() => {
      sanityClient.fetch(
          `
          *[_type == "category"]
          `
      ).then((data) => {setCategories(data)})
  }, [])

  console.log(categories);

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

        {categories?.map((category) => (
            <CategoryCard
                key={category._id}
                imgUrl={urlFor(category.image).url()}
                title={category.name}
            ></CategoryCard>
        ))}

    </ScrollView>
  )
}