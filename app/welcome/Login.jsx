import {KeyboardAvoidingView,Animated,Platform, Easing, StyleSheet, Text, View, useWindowDimensions, Image,Modal,ActivityIndicator , TouchableOpacity,TextInput } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React, {useState, useRef, useEffect} from 'react';
import { StatusBar } from "expo-status-bar";
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';

const Login = ({
    titleActiveSize =14,
  titleInActiveSize = 16,
  titleActiveColor = '#121212',
  titleInactiveColor = '#c2c2c2',
}) => {
    const router = useRouter();
    const [text, setText] = useState('');
    const [texto, setTexto] = useState('');
    const [password, setPassword] = useState(false)
    const {width} = useWindowDimensions();
    const animatedValue = useRef(new Animated.Value(0));
    const [modal, setModal] = useState(false);
    const [isLoading, setIsLoading] = useState(true);  
  
    const startTimer = () => {
      const processingTimer = setTimeout(() => {
        // set delay to timer for payment
        setIsLoading(false);
        router.push('../pages/Home');
      }, 3000);
  
      // clear the timer if the component is unmounted before the timeout
      return () => clearTimeout(processingTimer);
    };
  
      const openModal = () => {
          setModal(true);
          startTimer();
      }
  
      const closeModal = () => {
          setModal(false);
      }

    const togglePassword = () => {
      setPassword(!password)
    }

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
        <StatusBar style="dark" />
        <Image source={require('../../assets/images/tpt.png')} style={[styles.imaged, {width, resizeMode: 'contain'}]}/>
       
        <View style={{flex:0.3, justifyContent:'center', alignItem: 'center', marginHorizontal:30}}>
            <Text style={{fontSize:25, fontWeight:'bold', marginLeft:20, marginVertical: 20}}>Log In</Text>

            <View style={{ gap:20}}>


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

            <TouchableOpacity onPress={openModal}  style={{width: wp(70),height: hp(6),marginHorizontal:25,top:90, justifyContent: 'center', borderRadius: 10,  alignItems: 'center', backgroundColor: "#0357F9",}} >
          <Text style={{fontSize: hp(2), fontWeight: 'medium', justifyContent: 'center', alignItems: 'center', color: 'white'}}>Confirm</Text>
          </TouchableOpacity>
          
          <Text style={{top:100, marginLeft:50, fontSize:14,  justifyContent: 'center', alignItems: 'center', display:'flex'}}>Don't have an account?
            <Text style={{fontWeight: 'bold', color: "#0357F9", marginTop:20}} onPress={() => router.push('../welcome/Register')}>Register</Text>
             </Text>
         </View>

        <Image source={require('../../assets/images/tpd.png')} style={[styles.image, {width, resizeMode: 'contain'}]}/>
      

        <Modal 
        animationType='slide'
        transparent={true}
        visible={modal}
        onRequestClose={() => {
            setModal(closeModal);
          }}>
           
            <View
             style={{
              flex:1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#12121290'
             }}
            >

            <View style={{  backgroundColor: '#fffff20', paddingVertical: 20, paddingHorizontal: 10, borderRadius: 20, width: wp(200), alignSelf: 'center',height: hp(250) }}>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', }}>
              <ActivityIndicator size="large" color="#0357F9"  style={{ marginTop: 20, marginBottom: 20, backgroundColor: '#F0F0F0', borderRadius: 10, width:100, height:100 }}/>
              </View>
            
            </View>
            
            </View>
       
       
      </Modal>

      </KeyboardAvoidingView>
    )
  }
  
  export default Login

  const styles = StyleSheet.create({
 
    image: {
      top: 210,
      left: 95,
      width: wp(20),
      height: hp(20)
    },
    imaged: {
        position: 'absolute',
        top:0,
        right:110,
        width: wp(20),
        height:hp(20)
    },
    
          
     textStyle: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      borderRadius:10
      },
  })
  
  