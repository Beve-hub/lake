import { StyleSheet, Text, View, useWindowDimensions, Image, TouchableOpacity } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React from 'react'
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Landscreen = () => {
  const router = useRouter();
  const {width} = useWindowDimensions();
  return (
    <View style={{flex:1, justifyContent:'center', }}>
      <StatusBar style="dark" />
      <View style={{flex:0.3, justifyContent:'center', alignItem: 'center', marginHorizontal:30}}>
        <Text style={styles.title}>Have we met before?</Text>
        <Text style={styles.description}>Create an account or sign in to contactads save your favourites, receive alerts for new search results,and so much more.</Text>
      

        <View style={{ position: 'center', marginTop:50}}>
      <TouchableOpacity onPress={() => router.push('../welcome/Login')} style={{ alignItems: 'center', marginBottom:20, flexDirection: 'row',    justifyContent:'space-between',  width:wp(25), height:wp(10)   }} activeOpacity={0.6}>
           <Text style={styles.bot}>Login </Text> 
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('../welcome/Register')} style={{ alignItems: 'center', marginBottom:20, flexDirection: 'row',    justifyContent:'space-between',  width:wp(25), height:wp(10)   }} activeOpacity={0.6}>
           <Text style={styles.bot}>Register </Text> 
      </TouchableOpacity>
        

      </View>
      </View>
      
      <Image source={require('../../assets/images/tpd.png')} style={[styles.image, {width, resizeMode: 'contain'}]}/>
    </View>
  )
}

export default Landscreen

const styles = StyleSheet.create({
 
  image: {
      position: 'absolute',
      bottom:0,
      left:95,
      width: wp(20),
      height:hp(20)
      
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
   },
   bot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#121212',
       },
})