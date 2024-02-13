import { StyleSheet, Text, View, useWindowDimensions, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from "expo-status-bar";
import { data } from './../../components/slides';


const OnboardingItem = ({item}) => {
  const {width} = useWindowDimensions();


  return (
    <View style={[styles.container, {width}]}>
    <StatusBar style="dark" />

    <Image source={item.image } style={[styles.image, {width, resizeMode: 'contain'}]} />

    <View style={{ flexDirection: 'grid',justifyContent: 'center',alignItems:'center',}}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
    
    </View>
  )
}

export default OnboardingItem

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      
  },
  image: {
      flex: 1,
      justifyContent: 'center',
      marginTop: 200,
      marginBottom: 60,
      width: wp(40),
      height:hp(30)
      
  },
 title: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems:'center',
  fontWeight: 'bold',
  fontSize: 20,
  marginBottom: 10,
  color: '#121212',
  textAlign: 'flex-start',
  width: wp(80),
 },
 description: {
  fontWeight: '300',
  color: '#121212',
  textAlign: 'flex-start',
  width: wp(80),
 }
})