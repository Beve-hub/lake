import {Animated, Easing, StyleSheet, Text, View, useWindowDimensions, Image,Modal,ActivityIndicator , TouchableOpacity,TextInput } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React, {useState, useRef, useEffect} from 'react';
import { StatusBar } from "expo-status-bar";
import { useRouter } from 'expo-router';

const Picker = ({
  titleActiveColor = '#0357F9',
  titleInactiveColor = "#c2c2c2",
}) => {
    const router = useRouter();
      const {width} = useWindowDimensions();
       const [modal, setModal] = useState(false);
      const [isLoading, setIsLoading] = useState(true);  
       const [selected, setSelected] = useState([]);
       const [selectedCount, setSelectedCount] = useState(0);
       const [active, setActive] = useState();

    const startTimer = () => {
      const processingTimer = setTimeout(() => {
        // set delay to timer for payment
        setIsLoading(false);
        router.push('../pages/Home');
      }, 3000);
  
      // clear the timer if the component is unmounted before the timeout
      return () => clearTimeout(processingTimer);
    };

    const handleCategory = (category) => {
      if (selected.includes(category)) {
        setSelected((prevSelected) =>
           prevSelected.filter((item) => item !== category));
        setSelectedCount(selectedCount - 1);
        setActive(active);
        
        
      } else {
        if (selected.length < 5) {
          setSelected((prevSelected) => [...prevSelected, category])
          setSelectedCount(selectedCount + 1);
          setActive(active);
          }
      }
    }

    const getStyle = (category) => {
      return {
        backgroundColor: selected.includes(category) ? active :'#c2c2c270',
        padding: 10,
        borderRadius: 20,
        };
    };
  
      const openModal = () => {
          setModal(true);
          startTimer();
      }
  
      const closeModal = () => {
          setModal(false);
      }
  
   
  
      return (
        <View style={{flex:1, justifyContent:'center', }}>
          <StatusBar style="dark" />
          <Image source={require('../../assets/images/tpt.png')} style={[styles.imaged, {width, resizeMode: 'contain'}]}/>
          <View style={{flex:0.3, justifyContent:'center', alignItem: 'center', marginHorizontal:30,marginTop:120}}>

             <Text style={{fontSize:20, fontWeight:'bold', marginLeft:20, marginVertical: 40}}>what are you into ?</Text>
            <Text>{selectedCount}/5</Text>
              <View style={{display:'flex',flexWrap: "wrap", gap:8, flexDirection:'row'}}>
                
             {categories.map((category, index) => (
              <TouchableOpacity key={index} onPress={handleCategory} style={getStyle(category)}>
                <Text>{category}</Text>
              </TouchableOpacity>
             ))}
                               
              </View>
  
              <TouchableOpacity onPress={openModal}  style={{marginTop:30, width: wp(70),height: hp(6),marginHorizontal:25, justifyContent: 'center', borderRadius: 10,  alignItems: 'center', backgroundColor: "#0357F9",}} >
            <Text style={{fontSize: hp(2), fontWeight: 'medium', justifyContent: 'center', alignItems: 'center', color: 'white'}}>Continue</Text>
            </TouchableOpacity>
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
  
        </View>
      )
    }
    
    const categories = [
      'Advice',
      'Animals',
      'Anime',
      'Art & Design',
      'Beauty',
      'Music',
      'Fashion',
      'Finance & Business',
      'Food',
      'Funny',
      'Gaming',
      'Health & Lifestyle',
      'Comedy',
      'News',
      'Reading & Literature',
      'Relationship',
      'School',
      'Science',
      'Sport',
      'Technology',
      'Travel & Nature',
    ];
    
    export default Picker
  
  
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
        subContainer: {
          paddingBottom:20,
           marginHorizontal: 24,
        },
        textStyle: {
          paddingBottom: 30,
          fontSize: 16,
        },
    })
    
    