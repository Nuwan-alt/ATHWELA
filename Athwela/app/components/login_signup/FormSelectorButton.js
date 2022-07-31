import { StyleSheet, Text, View,TouchableWithoutFeedback,Animated } from 'react-native'
import React from 'react'

export default function FormSelectorButton({title,style,backgroundColor}) {
  return (
    <TouchableWithoutFeedback>
          <Animated.View style={[styles.container,style,{backgroundColor}]}>
            <Text style={styles.textStyle}>
              {title}
            </Text>
          </Animated.View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    container:{height:50, width:'50%',justifyContent:'center',alignItems:'center'},
    textStyle:{color:'white',fontSize:16}
})