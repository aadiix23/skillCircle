import { StyleSheet, Text, View, TextInput,FlatList } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const UserInfo = () => {
  const [search, setSearch] = useState("")
const projects = [
  {
    id: "#PJ101",
    title: "FoodMate",
    desc: "AI-powered Recipe Recommendation App",
    category: "Application Development",
  },
  {
    id: "#PJ102",
    title: "TravelEase",
    desc: "Smart Trip Planner with Budget Optimization",
    category: "Mobile App",
  },
  {
    id: "#PJ103",
    title: "SkillForge",
    desc: "Peer-to-Peer Online Skill Sharing Platform",
    category: "Website Development",
  },
  {
    id: "#PJ104",
    title: "FarmFresh",
    desc: "Organic Food Delivery from Local Farmers",
    category: "E-Commerce",
  },
  {
    id: "#PJ105",
    title: "MediTrack",
    desc: "Health Monitoring and Medicine Reminder App",
    category: "Healthcare",
  },
  {
    id: "#PJ106",
    title: "EventHub",
    desc: "Smart Event Ticket Booking and Management",
    category: "Application Development",
  },
  {
    id: "#PJ107",
    title: "GreenSteps",
    desc: "Carbon Footprint Tracker for Individuals",
    category: "Mobile App",
  },
  {
    id: "#PJ108",
    title: "StudyBuddy",
    desc: "Collaborative Learning Platform for Students",
    category: "Website Development",
  },
  {
    id: "#PJ109",
    title: "WorkNest",
    desc: "Remote Work Collaboration & Productivity Tool",
    category: "Application Development",
  },
  {
    id: "#PJ110",
    title: "ShopLink",
    desc: "Unified Online Shopping Price Comparison Tool",
    category: "E-Commerce",
  },
  {
    id: "#PJ111",
    title: "PetCare",
    desc: "Smart Pet Health and Tracking Application",
    category: "Healthcare",
  },
  {
    id: "#PJ112",
    title: "CityConnect",
    desc: "Digital Complaint & Suggestion Board for Cities",
    category: "Website Development",
  },
  {
    id: "#PJ113",
    title: "TaskFlow",
    desc: "AI-powered To-do & Task Automation Tool",
    category: "Application Development",
  },
  {
    id: "#PJ114",
    title: "GameZone",
    desc: "Online Multiplayer Mini-Games Platform",
    category: "Mobile App",
  },
  {
    id: "#PJ115",
    title: "DocuSafe",
    desc: "Secure Cloud Document Storage and Sharing",
    category: "Website Development",
  },
  {
    id: "#PJ116",
    title: "RideNow",
    desc: "Smart Carpool & Ride-Sharing Application",
    category: "Application Development",
  },
  {
    id: "#PJ117",
    title: "BudgetPal",
    desc: "AI Expense Tracker and Budget Planner",
    category: "Mobile App",
  },
  {
    id: "#PJ119",
    title: "ShopSmart",
    desc: "Smart Grocery Shopping with Auto Suggestions",
    category: "E-Commerce",
  },
  {
    id: "#PJ120",
    title: "CareBridge",
    desc: "Virtual Doctor Consultation and Reports App",
    category: "Healthcare",
  },
];

  return (
    <View style={styles.container}>
      {/* Heading */}
      <Text style={styles.heading}>CodeCrew</Text>

      {/* Subheading */}
      <View style={styles.subheading}>
        <Text style={{ fontSize: 40, fontWeight: '400', color: '#838383' }}>Hello </Text>
        <Text style={{ fontSize: 40, fontWeight: '500', color: '#FF8800' }}>Aadiix!</Text>
      </View>

      {/* Search Box */}
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={20} color="#999" style={styles.icon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search here..."
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
      </View>
     <View style={styles.card}>
  <FlatList
    data={projects}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <View style={styles.cardItem}>
        <Text style={styles.id}>{item.id}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
        <Text style={styles.category}>{item.category}</Text>
         
      </View>
    )}
  />
</View>
    </View>
  )
}

export default UserInfo

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingTop: 20,
  },
  heading: {
    fontSize: 21,
    fontWeight: '500'
  },
  subheading: {
    flexDirection: 'row',
    marginBottom: 20
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 15,
    height: 45,
    borderColor:'#FF8800',
    borderWidth:2,
  },
  icon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  card:{
    borderColor:'#FF8800',
    borderWidth:2,
    height:650,
    marginTop:35,
    marginRight: 15,
    borderRadius: 10,
  },
  category:{
    color:'#7C7C7C',
    paddingTop:40,
    fontSize:15,
  },
  desc:{ 
    fontSize:15,
    color:'#7C7C7C',


  },
  id:{
    color:'#7C7C7C',
    left:320,
    fontWeight:'600',
    position:'absolute',
    paddingTop:15,
    fontSize:16,
  },
  title:{
    fontSize:20,
    color:'#7C7C7C',
    fontWeight:'700'
  },
  cardItem: {
  padding: 10,
  borderBottomWidth: 1,
  borderBottomColor: '#ddd',
  
}
})