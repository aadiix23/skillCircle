import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileTab from '../Tabs/ProfileTab';
import SettingsTab from '../Tabs/SettingsTab';

 const Tab = createBottomTabNavigator();

const Homescreen1 = () => {
 
  return (
    <View style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen name="ProfileTab" component={ProfileTab} />
        <Tab.Screen name="SettingTab" component={SettingsTab} />
      </Tab.Navigator>
        </View>
  )
}

export default Homescreen1

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  text:{
    fontSize:40,
  }
})