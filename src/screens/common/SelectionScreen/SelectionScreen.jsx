import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import React, { useState } from "react";
import { Dropdown } from 'react-native-element-dropdown';


const SelectionScreen = ({ navigation }) => {
    const [selectedValue, setSelectedValue] = useState("");
  return (
    <View style={styles.container}>
        <View style={styles.Buttoncontainer}>
            <TouchableOpacity style={styles.button1} 
            activeOpacity={0.8}
            onPress={()=>{navigation.navigate("Homescreen1") }}>
                <Text style={styles.text}>Home1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={()=>{navigation.navigate("HomeScreen2")}}>
                <Text style={styles.text}>Home2</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.pickercontainer}>
            <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue) => {
          setSelectedValue(itemValue);
          if (itemValue) {
            navigation.navigate(itemValue); 
          }
        }}
      >
        <Picker.Item label="Select Your University" value="" />
        <Picker.Item label="Maharishi University Of Information Technology" value="Homescreen1" />
        <Picker.Item label="Babu Banarsi Das University" value="Homescreen2" />
      </Picker>
        </View>
    </View>
    
    
  )
}

export default SelectionScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#61b5ed',
    },
    Buttoncontainer:{
       marginTop:200,
        justifyContent:'space-between',
        flexDirection:'row',
        
        

    },
    button1:{
        backgroundColor:'#ECEEDF',
        margin:40,
        borderRadius:8,
        
    },
    text:{
        fontSize:22,
        padding:26,
        
    },
    picker:{
      backgroundColor:'#ECEEDF',
      marginTop:10,
      justifyContent:'center',
      marginBottom:11,
    },
    pickercontainer:{
      paddingTop:102,
      padding:22,
    }
})