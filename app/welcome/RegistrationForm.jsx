import { KeyboardAvoidingView,Animated,Platform, Easing, StyleSheet, Text, View, useWindowDimensions, Image,Modal,ActivityIndicator , TouchableOpacity,TextInput } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp,  } from "react-native-responsive-screen";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import CountryPicker from "react-native-country-picker-modal";


const RegistrationForm = () => {
    const router = useRouter();
    const [text, setText] = useState("");
    const [texto, setTexto] = useState("");
    const [email, setEmail] = useState("");
    const [num, setNum] = useState('');
    const [password, setPassword] = useState(false);
    const [showCountry, setShowCountry] = useState(false)
    const [countryCode, setCountryCode] = useState('NG')
    const [country, setCountry] = useState(null)
    const [withCountryNameButton, setWithCountryNameButton] = useState(
      false,
    )
    const [withFlag, setWithFlag] = useState(true)
    const [withEmoji, setWithEmoji] = useState(true)
    const [withFilter, setWithFilter] = useState(true)
    const [withAlphaFilter, setWithAlphaFilter] = useState(false)
    const [withCallingCode, setWithCallingCode] = useState(false)
  
    const onSelect = (country) => {
      setCountryCode(country.cca2)
      setCountry(country)
    }
  
      const { width } = useWindowDimensions();
      const animatedValue = useRef(new Animated.Value(0));
   
      const togglePassword = () => {
      setPassword(!password);
    };
  
    const startAnimation = () => {
      Animated.timing(animatedValue.current, {
        toValue: 1,
        duration: 500,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: false,
      }).start();
    };
  

    const onFocus = () => {
      startAnimation();
    };
  
    const onBlur = () => {
      if (!text) {
        Animated.timing(animatedValue?.current, {
          toValue: 0,
          duration: 500,
          easing: Easing.bezier(0.4, 0.0, 0.2, 1),
          useNativeDriver: false,
        }).start();
      }
    };
  
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex:1, justifyContent:'center', }}>
            
    
       
       
        <Image
          source={require("../../assets/images/tpt.png")}
          style={[styles.imaged, { width, resizeMode: "contain" }]}
        />
       
        <View
          style={{
            flex: 0.3,
            justifyContent: "center",
            alignItem: "center",
            marginHorizontal: 30,
          }}
        >
            
          <Text  style={{ fontSize: 20,  fontWeight: "bold", marginLeft: 20, marginVertical: 40, }} > Register</Text>
  
          <View style={{ gap: 20 }}>
            <View >
            <Text style={{fontSize: hp(2), fontWeight: 'bold',  padding:5}}>FullName</Text>
              <TextInput
                placeholder=""
                onChangeText={(newText) => setText(newText)}
                value={text}
                keyboardType="text"
                style={styles.textStyle}
                onBlur={onBlur}
                onFocus={onFocus}
              />
            </View>
  
            

         <View>
          <Text style={{fontSize: hp(2), fontWeight: 'bold',  padding:5}}>Email</Text>
          <TextInput
          placeholder=""
          onChangeText={newText => setText(newText)}
          value={text}
          keyboardType="text"
          style={styles.textStyle}
          onBlur={onBlur}
          onFocus={onFocus}
          />
          </View>
  
            <View >
            <Text style={{fontSize: hp(2), fontWeight: 'bold',  padding:5}}>Phone Numnber</Text>
              <TextInput
               placeholder=""
               onChangeText={(newText) => setNum(newText)}
               value={num}
               style={styles.number}
               keyboardType="numeric"
               onBlur={onBlur}
               onFocus={onFocus}
              />
              <TouchableOpacity style={{ left: 5, bottom: 10, width:40, flexDirection:'row', justifyContent:'center', position:'absolute',}}>
              <CountryPicker
               {...{
                  countryCode,
                  withFilter,
                  withFlag,
                  withCountryNameButton,
                  withAlphaFilter,
                  withCallingCode,
                  withEmoji,
                  onSelect,
                }}
                visible={showCountry}
              />
              <Text style={{ left: 35, bottom: 5,  flexDirection:'row', justifyContent:'center', position:'absolute',textAlign:'center' }}>+{country?.callingCode}</Text>
               </TouchableOpacity>
             </View>
  
             <View >
          <Text style={{fontSize: hp(2), fontWeight: 'bold',  padding:5}}>Password</Text>
            <TextInput
          secureTextEntry={!password}
          placeholder=""
          onChangeText={newText => setTexto(newText)}
          value={texto}
          keyboardType="text"
          style={styles.textStyle}
          onBlur={onBlur}
          onFocus={onFocus}
          />
          <TouchableOpacity onPress={togglePassword} style={{left:240, bottom:35}}>
            <Text>{password ? <Feather name="unlock" size={20} color="#121212" /> : <Feather name="lock" size={20} color="#121212" />}</Text>
          </TouchableOpacity>
          <Text style={{ fontSize:14, color: "#0357F990",  justifyContent: 'flex-end', alignItems: 'flex-end', }}>Forgotten password?</Text>
          </View>
                 
          </View>
          
          <TouchableOpacity
            onPress={() => router.push('../welcome/Picker')}
            style={{
              width: wp(70),
              height: hp(6),
              marginHorizontal: 25,
              top: 90,
              justifyContent: "center",
              borderRadius: 10,
              alignItems: "center",
              backgroundColor: "#0357F9",
            }}
          >
            <Text
              style={{
                fontSize: hp(2),
                fontWeight: "medium",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            >
              Confirm
            </Text>
          </TouchableOpacity>
  
          <Text
            style={{
              top: 100,
              marginLeft: 50,
              fontSize: 14,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            Don't have an account?
            <Text
              style={{ fontWeight: "bold", color: "#0357F9", marginTop: 20 }}
              onPress={() => router.push("../welcome/Login")}
            >
              LogIn
            </Text>
          </Text>
        </View>
      
        <Image source={require("../../assets/images/tpd.png")} style={[styles.image, { width, resizeMode: "contain" }]} />
     
      </KeyboardAvoidingView  >
    );
  };


export default RegistrationForm

const styles = StyleSheet.create({
    image: {
      top: 210,
      left: 95,
      width: wp(20),
      height: hp(20),
    },
    imaged: {
      position: "absolute",
      top: 0,
      right: 110,
      width: wp(20),
      height: hp(20),
    },
      
    textStyle: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius:10
        },
    number: {
      paddingLeft: 65,
      fontSize: 16,
      fontSize:14,
      borderWidth: 1,
        borderColor: '#ccc',
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius:10
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
      },
  });