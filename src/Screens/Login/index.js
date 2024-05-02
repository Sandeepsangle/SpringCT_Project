import React, { useEffect } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Formik, useFormik } from "formik";
import * as yup from 'yup';
import { getResHeight, getResWidth } from "../../utility/responsive";
import { fetchspringcturlData } from "../../Actions/AuthActions";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncValue, setAsyncValue } from "../../utility/Common";
import { asyncKeys } from "../../config";

export default Login = ({navigation}) =>
{   
    const dispatch = useDispatch()
    const springcturl = useSelector(state =>state.springcturlReducer)
    // console.log("springcturl",springcturl)
    // useEffect(()=>{console.log("springcturl",springcturl)},[springcturl])
    
    const loginValidationSchema = yup.object().shape({
        email: yup
          .string()
          .email("Please enter valid email")
          .required('Email Address is Required'),
        password: yup
          .string()
          .min(1, ({ min }) => `Password must be at least ${min} characters`)
          .required('Password is required'),
      })
      const handleSubmit = async values =>{
        const name = values.email
           payload = {
            "email": values.email,
            "password": values.password
           }  
           await setAsyncValue(asyncKeys.EmailId, values.email)
        await dispatch(fetchspringcturlData(payload))
        const isLogedIn = await getAsyncValue(asyncKeys.isLoggedIn)
        console.log(typeof isLogedIn)
            if(isLogedIn == 'true') { 
            navigation.navigate('main', 
                {name: name}
            )
        }else{
             values.email = ""
             values.password = ""
            Alert.alert("User not Found")     
        }}
      return (
        <View style={styles.loginContainer}>
        <Text style = {{color : 'black'}}>Login Screen</Text>
        <Formik
            validationSchema={ loginValidationSchema}
          initialValues={{ email: '', password: '' }}
          onSubmit={handleSubmit}
        >
          {({ handleChange, handleBlur, handleSubmit, values,isValid,errors }) => (
            <>
              <TextInput
                name="email"
                placeholder="Email Address"
                style={styles.textInput}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />
              {errors.email &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
       }
              <TextInput
                name="password"
                placeholder="Password"
                style={styles.textInput}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
              />
              {errors.password &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
       }
              <Button
              disabled = {false}
               onPress={handleSubmit} title="Submit" />
            </>
          )}
        </Formik>
      </View>
      );
    }
const styles = StyleSheet.create({
    loginContainer: {
        width: '80%',
        // flex : 1,
        // height : '40%',
        marginVertical : 'auto',
        alignItems: 'center',
        alignSelf : 'center',
        backgroundColor: 'white',
        padding: 10,
        elevation: 10,
        backgroundColor: '#e6e6e6'
      },
      textInput: {
        height: 40,
        width: '100%',
        margin: 10,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10,
        color : 'black'
      },
})
   
