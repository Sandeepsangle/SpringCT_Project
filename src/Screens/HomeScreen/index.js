import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, { useEffect, useState } from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {fetchjsonkeeperData} from '../../Actions/AuthActions';
import { getResWidth, wp } from '../../utility/responsive';
import { asyncKeys } from '../../config';
import { setAsyncValue } from '../../utility/Common';
import { Route } from 'react-router-native';

export default HomeScreen = ({navigation}) => {
  // const {name} = navigation.route.params 
  // const dispatch = useDispatch();
  // console.log(name)
 
  const [empEmail, setEmpEmail] = useState("");
  useEffect(()=>{
    const timeoutId =
    setTimeout(()=>{
      funEmpEmail()
    },2000)
    return (()=>{
      clearTimeout(timeoutId);
    })
  },[empEmail])
  const funEmpEmail = async ()=>{
    const email = await getAsyncValue(asyncKeys.EmailId)
    setEmpEmail(email)
    console.log("empid in navigation",empEmail);
  }
  const LogOutMain = async () =>{
    await setAsyncValue(asyncKeys.isLoggedIn, false)
    await setAsyncValue(asyncKeys.EmailId, '')
    navigation.navigate('auth');
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoutButton} onPress={LogOutMain}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
      <View style={styles.emailContainer}>
        <Text style={styles.emailLabel}>Employee Email:</Text>
        <Text style={styles.emailText}>{empEmail}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  logoutButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  emailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emailLabel: {
    marginRight: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color : 'black'
  },
  emailText: {
    fontSize: 16,
    color: '#333333',
  },
});

