import {View, Text, StyleSheet, Animated, useWindowDimensions } from "react-native"
import React from 'react'

const Paginator = ({data, scrollX, }) => {
    const { width } = useWindowDimensions();
  return (
    <View style={{flexDirection: 'row', height: 0,  position:'absolute', bottom:0 }}>
       {data.map((_, i) => {
                const inputRange = [(i - 1) * width, i * width, (i + 1)*width]
                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.3,1,0.3],
                    extrapolate: 'clamp'
                })
               
                return <Animated.View style={[styles.dot, {width: 10, opacity}]} key={i.toString}/>
            })}
    </View>
  )
}

export default Paginator

const styles = StyleSheet.create({
    container: {
        flex: 0.7, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    dot: {
        height:5,
        width:5,
        borderRadius: 5,
        backgroundColor: '#00308D',
        marginHorizontal: 8,
    }
})