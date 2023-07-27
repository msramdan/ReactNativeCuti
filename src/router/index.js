import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Splash } from '../pages';

const Stack = createNativeStackNavigator();
const Route = () => {
  return (
    <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      </Stack.Navigator>
  )
}

export default Route