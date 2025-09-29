import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import LinearGradient from 'react-native-linear-gradient';
import { Picker } from '@react-native-picker/picker';

const Loginscreen = ({ navigation }) => { 
  const [showPassword, setShowPassword] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [selectedValue, setSelectedValue] = useState('option1');

  return (
    <View style={styles.container}>
      <Text style={{fontSize:20, paddingTop:8,fontWeight:'600'}}>Code Crew</Text>

      <View>
        <View style={{ flexDirection:'row',alignItems:'center'}}> 
          <Text style={{fontSize:20, fontWeight:'400',color:'#838383'}}>Start Your</Text>
          <Text style={styles.heading}> Journey!</Text>
        </View>
        <Text style={styles.subheading}>Enter Your Details</Text>
      </View>

      <View style={styles.avatarContainer}>
        <TouchableOpacity style={styles.avatarWrapper}>
          <Image
            source={require('../../assets/images/placeholder1.png')} 
            style={styles.avatar}
          />
        </TouchableOpacity>
        <Text style={styles.uploadText}>Upload Image</Text>
      </View>

      <Text style={styles.textboxheading}>Enter Your Name</Text>
      <View style={{flexDirection:'row'}}>
        <TextInput
          style={styles.inputnames}
          placeholder='First Name'
        />
        <TextInput
          style={styles.inputnames}
          placeholder='Last Name'
        />
      </View>

      <Text style={styles.textboxheading}>Select Option</Text>
     <View style={[styles.input, { justifyContent: 'center' }]}>
  <Picker
    selectedValue={selectedValue}
    onValueChange={(itemValue) => setSelectedValue(itemValue)}
    style={{ height: 50, width: '100%' }}
    itemStyle={{ textAlign: 'center', fontSize: 16 }}
  >
  <Picker.Item label="Acharya N.G. Ranga Agricultural University, Hyderabad" value="ANGRAU" />
  <Picker.Item label="Acharya Nagarjuna University, Guntur" value="ANU" />
  <Picker.Item label="Adamas University, Barasat" value="AU" />
  <Picker.Item label="Adesh University, Bathinda" value="AU" />
  <Picker.Item label="Adikavi Nannaya University, Rajahmundry" value="AKNU" />
  <Picker.Item label="Ahmedabad University, Ahmedabad" value="AU" />
  <Picker.Item label="Ajeenkya D.Y. Patil University, Pune" value="ADYPU" />
  <Picker.Item label="Akal University, Bathinda" value="AU" />
  <Picker.Item label="AKS University, Satna" value="AKSU" />
  <Picker.Item label="Alagappa University, Karaikudi" value="AU" />
  <Picker.Item label="Alakh Prakash Goyal Shimla University, Shimla" value="APGSU" />
  <Picker.Item label="Al-Falah University, Faridabad" value="AFU" />
  <Picker.Item label="Aliah University, Kolkata" value="AU" />
  <Picker.Item label="Aligarh Muslim University, Aligarh" value="AMU" />
  <Picker.Item label="Allahabad State University, Allahabad" value="ASU" />
  <Picker.Item label="Anand Agricultural University, Anand" value="AAU" />
  <Picker.Item label="Andhra University, Waltair" value="AU" />
  <Picker.Item label="Anna University, Chennai" value="AU" />
  <Picker.Item label="Arunachal University of Studies, Namsai" value="AUS" />
  <Picker.Item label="Assam University, Silchar" value="AU" />
  <Picker.Item label="Atal Bihari Vajpayee Hindi University, Bhopal" value="ABVHU" />
  <Picker.Item label="Atma Ram Sanatan Dharma College, Delhi" value="ARSDC" />
  <Picker.Item label="Baba Farid University of Health Sciences, Faridkot" value="BFUHS" />
  <Picker.Item label="Baba Ghulam Shah Badshah University, Rajouri" value="BGSBU" />
  <Picker.Item label="Banaras Hindu University, Varanasi" value="BHU" />
  <Picker.Item label="Banasthali Vidyapith, Banasthali" value="BV" />
  <Picker.Item label="Bangalore University, Bangalore" value="BU" />
  <Picker.Item label="Bangalore University of Agricultural Sciences, Bangalore" value="BUAS" />
  <Picker.Item label="Barkatullah University, Bhopal" value="BU" />
  <Picker.Item label="Barnagarh University, Barnagarh" value="BU" />
  <Picker.Item label="Bharathiar University, Coimbatore" value="BU" />
  <Picker.Item label="Bharati Vidyapeeth University, Pune" value="BVU" />
  <Picker.Item label="Bhilai Institute of Technology, Durg" value="BITD" />
  <Picker.Item label="Bhopal University of Agricultural Sciences, Bhopal" value="BUAS" />
  <Picker.Item label="Bihar Agricultural University, Sabour" value="BAU" />
  <Picker.Item label="Birla Institute of Technology and Science, Pilani" value="BITS" />
  <Picker.Item label="Bodoland University, Kokrajhar" value="BU" />
  <Picker.Item label="Bundelkhand University, Jhansi" value="BU" />
  <Picker.Item label="Calcutta University, Kolkata" value="CU" />
  <Picker.Item label="Central Agricultural University, Imphal" value="CAU" />
  <Picker.Item label="Central University of Gujarat, Gandhinagar" value="CUG" />
  <Picker.Item label="Central University of Haryana, Mahendergarh" value="CUH" />
  <Picker.Item label="Central University of Jammu, Jammu" value="CUJ" />
  <Picker.Item label="Central University of Jharkhand, Ranchi" value="CUJ" />
  <Picker.Item label="Central University of Karnataka, Kalaburagi" value="CUK" />
  <Picker.Item label="Central University of Kerala, Kasaragod" value="CUK" />
  <Picker.Item label="Central University of Punjab, Bathinda" value="CUP" />
  <Picker.Item label="Central University of Rajasthan, Kishangarh" value="CUR" />
  <Picker.Item label="Central University of South Bihar, Gaya" value="CUSBR" />
  <Picker.Item label="Central University of Tamil Nadu, Thiruvarur" value="CUTN" />
  <Picker.Item label="Central University of Telangana, Hyderabad" value="CUT" />
  <Picker.Item label="Central University of Uttar Pradesh, Prayagraj" value="CUP" />
  <Picker.Item label="Central University of Uttarakhand, Srinagar" value="CUU" />
  <Picker.Item label="Central University of West Bengal, Kolkata" value="CUWB" />
  <Picker.Item label="Chandigarh University, Chandigarh" value="CU" />
  <Picker.Item label="Chaudhary Charan Singh University, Meerut" value="CCSU" />
  <Picker.Item label="Chhattisgarh Swami Vivekanand Technical University, Bhilai" value="CSVTU" />
  <Picker.Item label="Chitkara University, Chandigarh" value="CU" />
  <Picker.Item label="Dr. Bhim Rao Ambedkar University, Agra" value="DBRAU" />
  <Picker.Item label="Dr. Harisingh Gour Vishwavidyalaya, Sagar" value="DHGV" />
  <Picker.Item label="Dr. Ram Manohar Lohia National Law University, Lucknow" value="RMLNLU" />
  <Picker.Item label="Dr. Yashwant Singh Parmar University of Horticulture and Forestry, Solan" value="DYSPUHF" />
  <Picker.Item label="Dibrugarh University, Dibrugarh" value="DU" />
  <Picker.Item label="Doon University, Dehradun" value="DU" />
  <Picker.Item label="Dr. B.R. Ambedkar University, Agra" value="BRAU" />
  <Picker.Item label="Dr. Ram Manohar Lohia National Law University, Lucknow" value="RMLNLU" />
  <Picker.Item label="Dr. Yashwant Singh Parmar University of Horticulture and Forestry, Solan" value="DYSPUHF" />
  <Picker.Item label="Dibrugarh University, Dibrugarh" value="DU" />
  <Picker.Item label="Doon University, Dehradun" value="DU" />
  <Picker.Item label="Dr. B.R. Ambedkar University, Agra" value="BRAU" />
  <Picker.Item label="Dr. Ram Manohar Lohia National Law University, Lucknow" value="RMLNLU" />
  <Picker.Item label="Dr. Yashwant Singh Parmar University of Horticulture and Forestry, Solan" value="DYSPUHF" />
  <Picker.Item label="Dibrugarh University, Dibrugarh" value="DU" />
  <Picker.Item label="Doon University, Dehradun" value="DU" />
  <Picker.Item label="Dr. B.R. Ambedkar University, Agra" value="BRAU" />
  <Picker.Item label="Dr. Ram Manohar Lohia National Law University, Lucknow" value="RMLNLU" />
  <Picker.Item label="Dr. Yashwant Singh Parmar University of Horticulture and Forestry, Solan" value="DYSPUHF" />
  <Picker.Item label="Dibrugarh University, Dibrugarh" value="DU" />
  <Picker.Item label="Doon University, Dehradun" value="DU" />
  <Picker.Item label="Dr. B.R. Ambedkar University, Agra" value="BRAU" />
  <Picker.Item label="Dr. Ram Manohar Lohia National Law University, Lucknow" value="RMLNLU" />
  <Picker.Item label="Dr. Yashwant Singh Parmar University of Horticulture and Forestry, Solan" value="DYSPUHF" />
  <Picker.Item label="Dibrugarh University, Dibrugarh" value="DU" />
  <Picker.Item label="Doon University, Dehradun" value="DU" />
  <Picker.Item label="Dr. B.R. Ambedkar University, Agra" value="BRAU" />
  <Picker.Item label="Dr. Ram Manohar Lohia National Law University, Lucknow" value="RMLNLU" />
  <Picker.Item label="Dr. Yashwant Singh Parmar University of Horticulture and Forestry, Solan" value="DYSPUHF" />
  <Picker.Item label="Dibrugarh University, Dibrugarh" value="DU" />
  <Picker.Item label="Doon University, Dehradun" value="DU" />
  <Picker.Item label="Dr. B.R. Ambedkar University, Agra" value="BRAU" />
  <Picker.Item label="Dr. Ram Manohar Lohia National Law University, Lucknow" value="RMLNLU" />
  <Picker.Item label="Dr. Yashwant Singh Parmar University of Horticulture and Forestry, Solan" value="DYSPUHF" />
  <Picker.Item label="Dibrugarh University, Dibrugarh" value="DU" />
  <Picker.Item label="Doon University, Dehradun" value="DU" />
  <Picker.Item label="Dr. B.R. Ambedkar University, Agra" value="BRAU" />
  <Picker.Item label="Dr. Ram Manohar Lohia National Law University, Lucknow" value="RMLNLU" />
  </Picker>
</View>

      <Text style={styles.textboxheading}>Email Address</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter Your Email'
      />
      <Text style={styles.textboxheading}>Create a Password</Text>
      <TextInput
        style={styles.input}
        placeholder='Password'
      />
      <Text style={styles.textboxheading}>Re-Enter Your Password</Text>
      <TextInput
        style={styles.input}
        placeholder='Password'
      />
      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.socialContainer}>
        <TouchableOpacity 
          style={[styles.socialButton, { backgroundColor: '#fff', borderWidth: 1, borderColor: '#ddd' }]} 
          onPress={() => navigation.navigate('SelectionScreen')}
        >
          <Image
            source={require('../../assets/images/google.png')}
            style={styles.iconSocial}
          />
          <Text style={[styles.socialText, { color: '#000' }]}>Google</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.socialButton, { backgroundColor: '#333' }]} 
          onPress={() => navigation.navigate('SelectionScreen')}
        >
          <FontAwesome name="github" size={16} color="#fff" style={styles.iconSocial} />
          <Text style={[styles.socialText, { color: '#fff' }]}>GitHub</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottombar}>
        <View style={styles.lastline}>
          <Text style={styles.lastlinetxt}>Already a User?  </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')} >
            <Text style={styles.signupText}>Login</Text>
          </TouchableOpacity>    
        </View>
        <TouchableOpacity 
          activeOpacity={0.8} 
          style={styles.buttonWrapper} 
          onPress={() => navigation.navigate('SelectionScreen')}
        >
          <LinearGradient
            colors={['#FF8800', '#FF8800', 'rgb(244, 128, 50)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Start Upgrading Your Skills!</Text>
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
    paddingHorizontal:14,
    marginTop:25,
  },
  heading:{
    fontSize:23,
    fontWeight:'600',
    color:'#FF8800',
  },
  subheading:{
    fontSize:16,
    fontWeight:'400',
    color:'#7C7C7C',
    marginBottom:8,
  },
  textboxheading:{
    marginTop:10,
    fontSize:16,
    fontWeight:'500',
    color:'#838383'
  },
  input:{
    width: '95%',     
    borderColor: '#FF8800',
    borderWidth: 1,
    borderRadius: 6,
    height:42,
    paddingHorizontal: 14,
    marginTop: 8,
    backgroundColor: '#fff',
    fontSize: 16,
    elevation:25,
  },
  inputnames:{     
    flex:1,
    borderColor: '#FF8800',
    borderWidth: 1,
    borderRadius: 6,
    height:42,
    elevation:25,
    paddingHorizontal: 14,
    marginTop: 8,
    backgroundColor: '#fff',
    fontSize: 16,
    marginRight:10,
  },
  icon:{
    right:32,
    top:44,
    position:'absolute'
  },
  checkboxtext:{
    fontWeight:'500',
    fontSize:15,
    top:2,
    color:"#838383"
  },
  checkboxflex:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:10,
  },
  forgotpasstext:{
    fontWeight:'500',
    fontSize:15,
    left:24,
    color:"#FF8800"
  },
  buttonText:{
    fontSize:18,
    color:'#FFFFFF',
    textAlign:'center',
    fontWeight:'800',
  },
  buttonWrapper:{
    borderRadius:6,
    alignItems:'center',
    marginTop:5,
    elevation:25,
  },
  button:{
    borderRadius:8,
    paddingVertical:12,
    width:'100%',
    elevation:25,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical:14,
  },
  line: {
    flex: 1,
    height: 1.5,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal:8,
    fontSize:14,
    color: '#D9D9D9'
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginTop:12,
  },
  socialButton: {
    flex: 1,                 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:10,
    borderRadius: 6,
    marginHorizontal:6,   
    elevation:25,   
  },
  iconSocial: {
    width:18,
    height:18,
    marginRight:8,
  },
  socialText: {
    fontSize:15,
    fontWeight: '600',
  },
  lastline: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom:8,
  },
  lastlinetxt: {
    fontSize:15,
    color: '#555',
    marginLeft:180,
  },
  signupText: {
    fontSize:15,
    color: '#FF8800',  
    fontWeight: 'bold',
  },
  bottombar:{
    marginTop:40,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop:10,
  },
  avatarWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 45,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  avatar: {
    width: 90,
    height: 80,
    borderRadius: 45,
    resizeMode: 'cover',
  },
  uploadText: {
    marginTop:6,
    fontSize:14,
    fontWeight:'500',
    color: '#838383',
  },
});
