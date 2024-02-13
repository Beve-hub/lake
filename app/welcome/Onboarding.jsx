import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import NextButton from "./NextButton";
import Paginator from "./Paginator";
import { data } from "./../../components/slides";
import OnboardingItem from "./OnboardingItem";

const Onboarding = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [current, setCurrent] = useState(0);
  const router = useRouter();

  const SlideRef = useRef(null);
  

  const scrollTo = () => {
    if (current > Slides.lenght - 1) {
      SlideRef.current.scrollToIndex({ index: current + 1 });
    } else {
      console.log("last item");
    }
  };

  return (
    <View style={{ flex: 0.8, justifyContent: "center", alignItems: "center" }}>
      <StatusBar style="light" />
        <ScrollView>
        <FlatList
        data={data}
        ref={SlideRef}
        renderItem={({ item }) => <OnboardingItem item={item} scrollX={scrollX} />}
        horizontal={true}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX }}}], {
          useNativeDriver: false,
        })}
        />
      </ScrollView>
      <Paginator data={data} scrollX={scrollX} />  
      <NextButton />
    </View>
  );
};

export default Onboarding;
