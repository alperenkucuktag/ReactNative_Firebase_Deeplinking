import React from 'react';
import {View, Text} from 'react-native';

const HomeScreen: React.FC = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 24}}>Welcome to Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
