import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import React, { useState } from "react";
import { Dropdown } from 'react-native-element-dropdown';


const SelectionScreen = ({ navigation }) => {
    const [selectedValue, setSelectedValue] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.heading}><Text style={styles.headingText}>Code Crew</Text></View>
      <View style={styles.subheading}><Text style={styles.subheadingText}>Select Your Objective</Text></View>
        <View style={styles.Buttoncontainer}>
            <TouchableOpacity style={styles.button1} 
            activeOpacity={0.8}
            onPress={()=>{navigation.navigate("Homescreen1") }}>
                <Text style={styles.textbox}>Code Crew</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={()=>{navigation.navigate("HomeScreen2")}}>
                <Text style={styles.textbox}>Home2</Text>
            </TouchableOpacity>
        </View>
    </View>
    
    
  )
}

export default SelectionScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f9f9f9',
    },
    textbox:{
      textAlign:'center',
      flex:1,
      fontSize:11,
    },
    Buttoncontainer:{
    padding:1,
    backgroundColor:"#000000",
      flex:1,
    },
    button1:{
        backgroundColor:'#ECEEDF',
        padding:100,
        margin:100,
        borderRadius:'50%'
        
        
    },
    text:{
        fontSize:26,
        padding:26,
        
    },
    heading:{
    fontSize:100,
    marginTop:60,
    },
    headingText:{
      textAlign:'center',
      color:'#000000',
      fontSize:41,
    },
    subheading:{
    fontSize:100,
    marginTop:10,
    
    },
    subheadingText:{
      textAlign:'center',
      color:'#838383',
      fontSize:22,
      fontWeight:'500'
    },
})