import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loginscreen from '../src/screens/Loginscreen';
import Signupscreen from '../src/screens/Signupscreen.jsx';
import OnboardingScreen from '../src/screens/OnboardingScreen.jsx'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
  <NavigationContainer>
     <Stack.Navigator 
  initialRouteName="Onboarding"
  screenOptions={{ headerShown: false }}
>
  <Stack.Screen name="Signup" component={Signupscreen} />
  <Stack.Screen name="Login" component={Loginscreen} />
  <Stack.Screen name="Onboarding" component={OnboardingScreen} />
</Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})