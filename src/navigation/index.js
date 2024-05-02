import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './RootNavigation';
import { MainNavStack } from './Mainstack';

import { HomeScreen , DrawerPage, Login, Employee} from '../Screens';
import { useSelector } from 'react-redux';
import TabBar from './TabBar';
import { getAsyncValue } from '../utility/Common';
import { useEffect, useState } from 'react';



const RootStack = createNativeStackNavigator();

export default function MyProjectNavigation(props) {
  // const {isLogedIn} = props;
  // const isLogedIn = useSelector(state =>state.isLogedIn);
  const [isLogedIn, setIsLogedIn] = useState(true);
  const LoginToken = async ()=>{
    const login = await getAsyncValue(asyncKeys.isLoggedIn)
    setIsLogedIn(login)
    console.log("isLogedIn in navigation",isLogedIn, typeof isLogedIn);
  }
  useEffect(()=>{
    LoginToken()
  },[isLogedIn])
  
  // const isLogedIn = true; for timebeing
  return (
    <NavigationContainer
    //  ref={navigationRef}
    >
      <RootStack.Navigator
       initialRouteName={isLogedIn == 'true' ? 'main' : 'auth'}
       >
        {/* you can add mulitple stack */}
        <RootStack.Screen
          name="auth"
          component={Login}
          // component={MainNavStack}
          options={{
            headerShown: false,
          }}
        />
        {/* <Tab.Navigator>
          <Tab.Screen name = "Home" component={HomeScreen}/>
          <Tab.Screen name = "Employee" component={Employee}/>
        </Tab.Navigator> */}
          <RootStack.Screen
          name="main"
          component={TabBar}
          // component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
