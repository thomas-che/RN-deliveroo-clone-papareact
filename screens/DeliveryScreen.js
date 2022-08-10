import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { XIcon } from 'react-native-heroicons/solid';

export default function DeliveryScreen() {

    const navigation = useNavigation();

  return (
    <View className='bg-[#00ccbb] flex-1'>
        <SafeAreaView className='z-50'>
            <View className='flex-row justify-between items-center p-5'>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <XIcon color="white" size={30}></XIcon>
                </TouchableOpacity>
                <Text className='font-light text-white text-lg'>Order Help</Text>
            </View>
        </SafeAreaView>

        <View className='flex-1 justify-center items-center'>
            <Text className='text-white font-bold'>DeliveryScreen ...</Text>
        </View>
    </View>
  )
}
