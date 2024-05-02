import {View, Text} from 'react-native';
import React from 'react';

export default DrawerPage = () => {
  console.log("red2");
  return (
    <View style = {{ flex : 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style= {{color : 'red'}}>DrawerPage</Text>
    </View>
  );
};

