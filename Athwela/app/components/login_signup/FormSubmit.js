import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

export default function FormSubmit({title}) {
  return (
    <TouchableOpacity style={styles.container}>
        <Text style={{fontSize:18, color:'#fff'}}>
            {title}
        </Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    container:{
        height:45,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(27,27,51,0.4)'
        
    }
})