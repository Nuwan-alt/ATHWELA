import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import { ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View, ViewBase,Dimensions,Animated, NativeEventEmitter } from 'react-native';
import FormHeader from './app/components/login_signup/FormHeader';
import FormSelectorButton from './app/components/login_signup/FormSelectorButton';
import LoginForm from './app/components/login_signup/LoginForm';
import SignupForm from './app/components/login_signup/SignupForm';



export default function App() {
  const animation = useRef(new Animated.Value(0)).current;
  const {width} = Dimensions.get('window')
  
  const rightHeadingopacity = animation.interpolate({
    inputRange:[0,width],
    outputRange:[0,1]
  })
  const rightHeadingTransY = animation.interpolate({
    inputRange:[0,width],
    outputRange:[-20,0]
  })
  const leftHeadingTransX = animation.interpolate({
    inputRange:[0,width],
    outputRange:[40,2]
  })
  const subFont = animation.interpolate({
    inputRange:[0,width],
    outputRange:[22,18]
  })
  const loginSelector = animation.interpolate({
    inputRange:[0,width],
    outputRange:['rgba(27,27,51,1)','rgba(37,37,61,0.4)']
  })
  const signupSelector = animation.interpolate({
    inputRange:[0,width],
    outputRange:['rgba(27,27,51,0.4)','rgba(37,37,61,1)']
  })

  return (
    <View style={{flex:1,paddingTop:80}}> 
      <View style={{height:80} }>
        <FormHeader leftHeading='Welcome' rightHeading = 'Back' subHeading = 'ATHWELA' rightHeadingopacity={rightHeadingopacity} rightHeadingTransY={rightHeadingTransY} leftHeadingTransX={leftHeadingTransX} subFont={subFont}/>
      </View>

      <View style={{flexDirection:'row',paddingHorizontal:20}}>
      <FormSelectorButton style={styles.borderLeft} title='Login' backgroundColor = {loginSelector} />
      <FormSelectorButton style={styles.borderRight} title='Sign Up' backgroundColor = {signupSelector} />
      </View>
 
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} 
      scrollEventThrottle={16}
      onScroll = {Animated.event([{nativeEvent:{contentOffset:{x:animation}}}],{useNativeDriver:false})}>
        
        <LoginForm  />
        <ScrollView>
           <SignupForm />
        </ScrollView>
        
 
      </ScrollView>


      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderLeft:{
    borderTopLeftRadius:8,
    borderBottomLeftRadius:8

  },
  borderRight:{
    borderTopRightRadius:8,
    borderBottomRightRadius:8
  }
});
