
import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import { TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import LinearGradient from 'react-native-linear-gradient';





const Loginscreen = ({ navigation }) => { 
  const [showPassword, setShowPassword] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Log in</Text>
        <Text style={styles.subheading}>Please enter log in details below</Text>
      </View>
      <View>
      <Text style={styles.textboxheading}>Email</Text>
      <TextInput
      style={styles.input}
      placeholder='Enter Your Mail'/>
      </View>
      <View>
      <Text style={styles.textboxheading}>Password</Text>
      <TextInput
      style={styles.input}
      placeholder='Enter Your Password'
      />
      <FontAwesome
          name={showPassword ? "eye" : "eye-slash"}
          size={24}
          color="#333"
          style={styles.icon}
        />
      </View>
        <View style={styles.checkboxflex}>
        <CheckBox
          disabled={false}
           tintColors={{ true: '#141654', false: '#999' }}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
        <Text style={styles.checkboxtext}>Remember Password</Text>
        <Text style={styles.forgotpasstext}>Forgot password ?</Text>
        </View>
         <TouchableOpacity activeOpacity={0.8} style={styles.buttonWrapper} onPress={() => navigation.navigate('SelectionScreen')}>
          <LinearGradient
            colors={['#010124', '#090979', 'rgb(22, 20, 85)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.button}
            
          >
            <Text style={styles.buttonText}>Log In</Text>
          </LinearGradient>
        </TouchableOpacity>
        <View style={styles.orContainer}>
        <View style={styles.line} />
         <Text style={styles.orText}>OR</Text>
         <View style={styles.line} />
        </View>
        <View style={styles.socialContainer}>
  <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#fff', borderWidth: 1, borderColor: '#ddd' }]} onPress={() => navigation.navigate('SelectionScreen')}>
    <Image
  source={require('../../assets/images/google.png')}
  style={styles.iconSocial}
/>
    <Text style={[styles.socialText, { color: '#000' }]}>Google</Text>
  </TouchableOpacity>

  <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#333' }] } onPress={() => navigation.navigate('SelectionScreen')}>
    <FontAwesome name="github" size={20} color="#fff" style={styles.iconSocial} />
    <Text style={[styles.socialText, { color: '#fff' }]}>GitHub</Text>
  </TouchableOpacity>
</View>
<View style={styles.lastline}>
  <Text style={styles.lastlinetxt}>Don't have an account? </Text>
  <TouchableOpacity onPress={() => navigation.navigate('Signup')} >
        <Text style={styles.signupText}>Sign Up</Text>
      </TouchableOpacity>
</View>
      </View>
    
    
    
  )
}

export default Loginscreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#ffffff",
     paddingLeft:15,
     paddingRight:10,
  },
  heading:{
    fontSize:26,
    fontWeight:'600',
    marginTop:40,
    fontFamily:'AlanSans-Regular', 
  },
  subheading:{
  fontSize: 16,
  fontWeight:'300'
  },
  textboxheading:{
    marginTop:20,
    fontSize:18,
    fontWeight:600,
  },
  input:{
  width: '94%',     
  borderColor: '#ccc',
  borderWidth: 1,
  borderRadius: 8,
  paddingHorizontal: 10,
  marginTop: 10,
  backgroundColor: '#fff',
  fontSize: 17,
  },
  icon:{
    right:35,
    marginTop:65,
    position:'absolute'
  },
  checkboxtext:{
    fontWeight:'300',
    fontSize:13,
    top:5,
  },
  checkboxflex:{
    flexDirection:'row'
  },
  forgotpasstext:{
    fontWeight:'300',
    fontSize:13,
    top:5,
    left:55,
  },
  buttonText:{
fontSize:20,
width:300,
color:'#FFFFFF',
textAlign:'center'
  },
buttonWrapper:{
  borderRadius:'8',
alignItems:'center',
marginTop:10,
},
button:{
borderRadius:10,
padding:13,
},
orContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginVertical: 20,
   paddingRight:15,
},
line: {
  flex: 1,
  height: 1,
  backgroundColor: '#ccc',
 
},
orText: {
  marginHorizontal: 10,
  fontSize: 12,
  color: '#555'
},
socialContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between', 
  marginTop: 20,
},
socialButton: {
  flex: 1,                 
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
  borderRadius: 8,
  marginHorizontal: 5,      
},
iconSocial: {
  width: 20,
  height: 20,
  marginRight: 8,
},
socialText: {
  fontSize: 16,
  fontWeight: '600',
},
lastline: {
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: 20,
},
lastlinetxt: {
  fontSize: 14,
  color: '#555',
},
signupText: {
  fontSize: 14,
  color: 'navy',  
  fontWeight: 'bold',
}
})
