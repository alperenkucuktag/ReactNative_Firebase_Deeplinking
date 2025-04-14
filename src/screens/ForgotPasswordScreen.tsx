import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

const ForgotPasswordScreen: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = async () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email.');
      return;
    }

    try {
      await auth().sendPasswordResetEmail(email);
      Alert.alert('Success', 'Password reset email sent!');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to send password reset email.');
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', padding: 16}}>
      <Text style={{fontSize: 24, textAlign: 'center', marginBottom: 16}}>
        Reset Password
      </Text>
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        style={{borderWidth: 1, marginBottom: 16, padding: 8}}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Button title="Reset Password" onPress={handleResetPassword} />
    </View>
  );
};

export default ForgotPasswordScreen;
