import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';

export default function PreparingOrderScreen() {

const navigation = useNavigation();

useEffect(() => {
    setTimeout(() => {
        navigation.navigate("Delivery")
    }, 4000)
}, [])

  return (
   
    <SafeAreaView className='bg-[#00ccbb] flex-1 justify-center items-center'>
        <Animatable.Image
            source={require("../assets/preparing_order.gif")}
            animation="slideInUp"
            iterationCount={1}
            className='h-96 w-96'
        ></Animatable.Image>

        <Animatable.Text 
            animation="slideInUp" 
            iterationCount={2} 
            className='text-lg my-10 text-white font-bold text-center'
        >Waiting for Restaurant to accept your order</Animatable.Text>

        <Progress.Circle size={60} indeterminate={true} color="white"/>

    </SafeAreaView>

  )
}
