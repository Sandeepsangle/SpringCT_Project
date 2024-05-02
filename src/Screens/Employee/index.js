import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

const Employee = () => {
  data = [
    {
      name : 'shubham Singh',
      Age : 26 ,
      Address : "Sector-10" ,
      CityName : 'Mumbai'
    },
    {
      name : 'Raj Patel',
      Age : 28 ,
      Address : "Sector-12" ,
      CityName : 'Mumbai'
    },
    {
      name : 'Ramesh Wagh',
      Age : 20 ,
      Address : "Sector-19" ,
      CityName : 'Mumbai'
    },
    {
      name : 'Raj Kumar',
      Age : 23 ,
      Address : "Sector-5" ,
      CityName : 'Mumbai'
    },
   
  ] 
  
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style = {{color : 'black'}}>{item.name}</Text>
      <View style = {{
        flexDirection : 'row',
        borderBlockColor : 'black'
      }}>
      <Text style = {{color : 'black'}}>Age: {item.Age} years</Text>
      <Text style = {{color : 'black'}}>{item.Address}</Text>
      <Text style = {{color : 'black'}}>{item.CityName}</Text>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList 
      data = {data}
      renderItem={renderItem}
      />
    </View>
  )
}

export default Employee

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    
  },
});