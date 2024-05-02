/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SplashScreen from './src/SplashScreen';
import MyProjectNavigation from './src/navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor ,store} from './src/store';
import { HomeScreen } from './src/Screens';


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [splashEnd, setSplashEnd] = useState(false);
  
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  // const stateisLogedIn = useSelector(state =>state.isLogedIn)
  // console.log("stateisLogedIn",stateisLogedIn);

 useEffect(()=>{
  
  const timeout =
  setTimeout(()=>{
    setSplashEnd(true);
},2000);
return()=>{
  clearTimeout(timeout);
}
 },[])
  return (
   
      <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
     { !splashEnd ?
      <SplashScreen />:
      <Provider store={store}>
        <PersistGate loading = {null} persistor={persistor}>
          <MyProjectNavigation/>
        </PersistGate>
      </Provider>
      }
      </>

  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
