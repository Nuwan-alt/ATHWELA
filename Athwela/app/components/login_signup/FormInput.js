import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const FormInput = ({title,placeholder}) => {
  return (
    <View>
            <Text style={styles.label}>{title}</Text>
            <TextInput placeholder={placeholder} style={styles.input}></TextInput>
    </View>
  )
}

export default FormInput

const styles = StyleSheet.create({
    label:{fontWeight:'bold', marginBottom:5},
    input:{borderWidth:1 , height:40,marginBottom:15, borderColor:'#1b1b33', borderRadius:8, fontSize:16, paddingLeft:10, borderBottomWidth:2}

})