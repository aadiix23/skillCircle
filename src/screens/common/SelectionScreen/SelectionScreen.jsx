import { StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native'
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
                 <Image 
          source={require('../../../assets/images/skill2.png')} resizeMode='contain'
          style={styles.images}
        />
                <Text style={styles.buttonText}>Startup Focused</Text>
            </TouchableOpacity>
            <Text style={styles.buttonText}>Skill Development</Text>
            <TouchableOpacity style={styles.button1} onPress={()=>{navigation.navigate("HomeScreen2")}}>
                <Image 
          source={require('../../../assets/images/startupfocus2.png')} resizeMode='contain'
          style={styles.images}
        />
            </TouchableOpacity>
             <Text style={styles.buttonText}>Skill Focused</Text>
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
    justifyContent:'center',
    marginTop:32,
    alignItems:"center"
      
      
    },
    button1:{
    backgroundColor:'#ECEEDF',
    width:200,
    height:200,
    borderRadius:100,
    justifyContent:'center',
    margin:50,
    alignItems:'center',
    overflow:'hidden',   
    },
    textbox:{
        fontSize:26,
        padding:26,
        textAlign:'center'
        
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
     letterSpacing:1.9,
      fontWeight:'500'
    },
    images:{
        width: "100%",
    height: "180%",
    resizeMode: "cover" 
    },
    buttonText:{
      fontSize:24,
      letterSpacing:1.4,
      color:'#747474',
      paddingBottom:1,
      
    }
    
})