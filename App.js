import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';

export default function App() {
const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <TailwindProvider>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Restaurant" component={RestaurantScreen} />
                </Stack.Navigator>
            </TailwindProvider>
        </NavigationContainer>
    );
}
