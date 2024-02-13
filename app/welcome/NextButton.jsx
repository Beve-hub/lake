import { StyleSheet, Text, TouchableOpacity, View ,  Animated} from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const NextButton = () => {
    const router = useRouter();
  return (
    <View style={{flexDirection: 'row',   position:'absolute', top:650,right:0 }}>
        <TouchableOpacity onPress={() => router.push('./Landscreen')} style={{elevation: 10,shadowColor: '#121212', alignItems: 'center', marginBottom:20, flexDirection: 'row', backgroundColor:'#00308D',   justifyContent:'center',  width:wp(25), height:wp(10)   }} activeOpacity={0.6}>
           <Text style={{flexDirection: 'row', fontSize:18, fontWeight:'bold',  color: 'white',  justifyContent: 'center',alignItems: 'center',}}>
            Skip >>>
            </Text>
      </TouchableOpacity>
    </View>
  )
}

export default NextButton