import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signupscreen from '../src/screens/auth/Signupscreen.jsx';
import Loginscreen from '../src/screens/auth/Loginscreen.jsx';
import OnboardingScreen from '../src/screens/onboardingscreen/OnboardingScreen.jsx'
import SplashScreen from 'react-native-splash-screen';
import SelectionScreen from './screens/common/SelectionScreen/SelectionScreen.jsx'
import Homescreen1 from './screens/common/HomeScreens/Homescreen1.jsx'
import HomeScreen2 from './screens/common/HomeScreens/HomeScreen2.jsx'
import ProfileTab from './screens/common/Tabs/ProfileTab.jsx';
import SettingTab from './screens/common/Tabs/SettingsTab.jsx';
import ProjectSystemTab from './screens/common/Tabs/ProjectSystemTab.jsx';
import ProjectRoomTab from './screens/common/Tabs/ProjectRoomTab.jsx';
import Home from './screens/common/Tabs/hometab.jsx';
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
 <Stack.Screen 
  name="Login" 
  component={Loginscreen} 
  options={{ headerShown: false, title: "CodeCrew", headerBackVisible: false }} 
/>
  <Stack.Screen name="Onboarding" component={OnboardingScreen} />
   <Stack.Screen name="SelectionScreen" component={SelectionScreen}/>
   <Stack.Screen name="Homescreen1" component={Homescreen1}/>
  <Stack.Screen name="HomeScreen2" component={HomeScreen2}/>
  <Stack.Screen name="Profile" component={ProfileTab}/>
</Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})