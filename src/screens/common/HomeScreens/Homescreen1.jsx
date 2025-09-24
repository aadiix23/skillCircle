import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Homescreen1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Jab Example Ban Jayega tab laga dunga
        HomeScreen1
      </Text>
    </View>
  )
}

export default Homescreen1

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    alignContent:'center'
  
  },
  text:{
    fontSize:40,
  }
})