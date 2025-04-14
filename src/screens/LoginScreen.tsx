import React from 'react';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  const handleForgotPassword = () => {
    navigation.navigate('Forgot');
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        padding: 50,
        backgroundColor: '#fff',
      }}>
      <Text style={{fontSize: 24, textAlign: 'center', marginBottom: 16}}>
        Login
      </Text>
      <TextInput
        placeholder="Email"
        style={{borderWidth: 1, marginBottom: 12, padding: 8}}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={{borderWidth: 1, marginBottom: 16, padding: 8}}
      />
      <View
        style={{
          flexDirection: 'row',
          gap: 20,
          marginTop: 16,
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={{fontSize: 20, color: 'blue', textAlign: 'center'}}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={{fontSize: 20, color: 'blue', textAlign: 'center'}}>
            Sign Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={{fontSize: 20, color: 'blue', textAlign: 'center'}}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
