import { View, Text, Image } from 'react-native'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const Splash = () => {
    const router = useRouter();
    

    useEffect(() => {
        const startTimer = setTimeout(() => {
            router.push('./Onboarding')
        },2000)

        return () => clearTimeout(startTimer)
    })
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <StatusBar style='light'/>
      <Image source={require('../assets/images/logo.png')}/>
    </View>
  )
}

export default Splash