import { StyleSheet, Text, View,Dimensions, TextInput  } from 'react-native'
import React from 'react'
import FormInput from './FormInput'
import FormSubmit from './FormSubmit'

export default function SignupForm() {
  return (
    <View style= {[styles.container]}>

        <FormInput title='Name'/>
        <FormInput title='NIC'/>
        <FormInput title='Email' placeholder='example@gmail.com'/>
        <FormInput title='Password'/>
        <FormInput title='Confrim Password' placeholder='Enter Password Again'/>
        <FormSubmit title='Sign Up'/>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{paddingHorizontal:20,width:Dimensions.get('window').width, marginTop:20},
    text:{color:'white',fontSize:50,fontWeight:'bold'}
})