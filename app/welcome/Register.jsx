import React from 'react';
import { SafeAreaView } from 'react-native';
import RegistrationForm from './RegistrationForm';
import { StatusBar } from "expo-status-bar";


const Register = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
         <StatusBar style="dark" />
      <RegistrationForm/>
    </SafeAreaView>
  )
}

export default Register