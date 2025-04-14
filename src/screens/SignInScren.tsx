import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

const SignUpScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    try {
      await auth().createUserWithEmailAndPassword(email, password);
      Alert.alert('Success', 'User registered successfully!');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to register user.');
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', padding: 16}}>
      <Text style={{fontSize: 24, textAlign: 'center', marginBottom: 16}}>
        Sign Up
      </Text>
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        style={{borderWidth: 1, marginBottom: 16, padding: 8}}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        style={{borderWidth: 1, marginBottom: 16, padding: 8}}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

export default SignUpScreen;
