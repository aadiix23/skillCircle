import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const ProjectRoomTab = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logoname}>CodeCrew</Text>

      <View style={styles.subheadingcontainer}>
        <Text style={styles.subheading}>Projects</Text>

        {/* Search + Filter */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchbox}
            placeholder='Search'
          />
          <TouchableOpacity style={styles.filterIcon}>
            <FontAwesome name="filter" size={20} color="#555" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ProjectRoomTab

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    paddingLeft: 15,
  },
  logoname: {
    fontSize: 30,
    fontWeight: '600'
  },
  subheadingcontainer: {
    flexDirection: 'row',
  },
  subheading: {
    fontSize: 35,
    marginTop: 20,
    color: '#FF8800'
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    marginLeft: 65,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 8,
    height: 40,
    width: 190,
  },
  searchbox: {
    flex: 1,
    padding: 4,
  },
  filterIcon: {
    marginLeft: 8,
  }
})
