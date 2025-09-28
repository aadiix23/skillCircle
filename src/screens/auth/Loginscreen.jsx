
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
      <View style={{}}><Text style={{fontSize:24, paddingTop:17,fontWeight:'600'}}>Code Crew</Text></View>
      <View>
       <View style={{ flexDirection:'row',alignItems:'center'}}> <Text style={styles.heading}>Welcome</Text><Text style={{fontSize:26,
    fontWeight:'400',
    marginTop:25,color:'#838383'}}> Back!</Text></View>
        <Text style={styles.subheading}>Enter Your Login Information</Text>
      </View>
      <View>
      <Text style={styles.textboxheading}>Email Address</Text>
      <TextInput
      style={styles.input}
      placeholder='Enter Your Mail'/>
      </View>
      <View>
      <Text style={styles.textboxheading}>Password</Text>
      <TextInput
      style={styles.input}
      placeholder='Password'
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
           tintColors={{ true: '#FF8800', false: '#999' }}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
        <Text style={styles.checkboxtext}>Remember Password</Text>
        <Text style={styles.forgotpasstext}>Forgot password ?</Text>
        </View>
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
<View style={styles.bottombar}>
<View style={styles.lastline}>
  <Text style={styles.lastlinetxt}>Don't have an account? </Text>
  <TouchableOpacity onPress={() => navigation.navigate('Signup')} >
        <Text style={styles.signupText}>Sign Up</Text>
      </TouchableOpacity>    
</View>
<TouchableOpacity activeOpacity={0.8} style={styles.buttonWrapper} onPress={() => navigation.navigate('SelectionScreen')}>
          <LinearGradient
            colors={['#FF8800', '#FF8800', 'rgb(244, 128, 50)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Log In</Text>
          </LinearGradient>
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
    marginTop:25,
    color:'#FF8800',
  },
  subheading:{
  fontSize: 16,
  fontWeight:'400',
  color:'#838383'
  },
  textboxheading:{
    marginTop:20,
    fontSize:18,
    fontWeight:600,
    color:'#838383'
  },
  input:{
  width: '94%',     
  borderColor: '#FF8800',
  borderWidth: 1,
  borderRadius: 8,
  height:40,
  paddingHorizontal: 18,
  marginTop: 10,
  backgroundColor: '#fff',
  fontSize: 20,
  },
  icon:{
    right:35,
    marginTop:62,
    position:'absolute'
  },
  checkboxtext:{
    fontWeight:'500',
    fontSize:15,
    top:5,
  color:"#838383"
  },
  checkboxflex:{
    flexDirection:'row',
    marginTop:13,
  },
  forgotpasstext:{
    fontWeight:'500',
    fontSize:15,
    top:5,
    left:58,
    color:"#FF8800"
  },
  buttonText:{
fontSize:20,
width:350,
color:'#FFFFFF',
textAlign:'center',
fontWeight:'800',
  },
buttonWrapper:{
  borderRadius:'8',
alignItems:'center',

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
  fontSize: 15,
  color: '#D9D9D9'
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
  
},
lastlinetxt: {
  fontSize: 15,
  color: '#555',
  paddingLeft:130,
  marginBottom:5,
},
signupText: {
  fontSize: 14,
  color: '#FF8800',  
  fontWeight: 'bold',
},
bottombar:{
marginTop:280,
}
})
