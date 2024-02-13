import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import {  widthPercentageToDP as wp,  heightPercentageToDP as hp,} from "react-native-responsive-screen";


const Splash = () => {
 
  const router = useRouter();

  useEffect(() => {
    const startTimer = setTimeout(() => {
        router.push('../welcome/Onboarding')
    },2000)

    return () => clearTimeout(startTimer)
})

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <StatusBar style='light'/>
     <Image source={require('../../assets/images/logo.png')}/>
    </View>
  )
}

export default Splash