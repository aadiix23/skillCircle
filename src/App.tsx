import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loginscreen from '../src/screens/Loginscreen';
import signupscreen from '../src/screens/Signupscreen.tsx';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
  <NavigationContainer>
     <Stack.Navigator screenOptions={{
      headerShown:false,
     }}>
      <Stack.Screen name="Login" component={Loginscreen} />
      <Stack.Screen name="Signup" component={signupscreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})