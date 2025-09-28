import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileTab from '../Tabs/ProfileTab';
import SettingsTab from '../Tabs/SettingsTab';
import ProjectRoomTab from '../Tabs/ProjectRoomTab';
import ProjectSystemTab from '../Tabs/ProjectSystemTab';
import HomeTab from '../Tabs/hometab';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Color } from 'react-native/types_generated/Libraries/Animated/AnimatedExports';

 const Tab = createBottomTabNavigator();

const Homescreen1 = () => {
 
  return (
    <View style={styles.container}>
      <Tab.Navigator
      initialRouteName="Home"
        screenOptions={({route})=>({
          headerShown: false,   
           tabBarActiveTintColor: '#FF8800',   // selected tab ka color
            tabBarInactiveTintColor: 'gray',
          
          tabBarIcon:({focused,color,size})=>{
            let iconName;
             if (route.name === 'Profile') {
            iconName = 'user';         
          } else if (route.name === 'Setting') {
            iconName = 'cog';         
          } else if (route.name === 'ProjectRoom') {
            iconName = 'group';       
          } else if (route.name === 'ProjectSystem') {
            iconName = 'code';         
          }
          else if (route.name === 'Home') {
            iconName = 'home';         
          }
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
>
  <Tab.Screen name="Profile" component={ProfileTab} />
  <Tab.Screen name="ProjectRoom" component={ProjectRoomTab} />
  <Tab.Screen name="Home" component={HomeTab} />
  <Tab.Screen name="ProjectSystem" component={ProjectSystemTab} />
  <Tab.Screen name="Setting" component={SettingsTab} />
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