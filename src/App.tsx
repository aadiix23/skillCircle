import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signupscreen from '../src/screens/auth/Signupscreen.jsx';
import Loginscreen from '../src/screens/auth/Loginscreen.jsx';
import OnboardingScreen from '../src/screens/onboardingscreen/OnboardingScreen.jsx'
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide(); 
  }, []);
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