import { View, Text,StyleSheet,Animated } from 'react-native'


const FormHeader = ({leftHeading,rightHeading,subHeading,leftHeadingTransX=40, rightHeadingTransY=-20,rightHeadingopacity=1,subFont=18}) => {
  return (
    <>
    <View style={styles.container}>
          <Animated.Text style={[styles.heading,{transform:[{translateX:leftHeadingTransX}]}]}> {leftHeading} </Animated.Text>
          <Animated.Text style={[styles.heading,{opacity:rightHeadingopacity, transform:[{translateY:rightHeadingTransY}]}]}> {rightHeading} </Animated.Text>
    </View>
    <Animated.Text style={[styles.subHeading,{fontSize:subFont}]}> {subHeading} </Animated.Text>
    </>
  )
}

const styles = StyleSheet.create({
    container: {flexDirection:'row',justifyContent:'center',alignItems:'center'},
    heading: {fontSize:30,fontWeight:'bold',color:'#1b1b33'},
    subHeading:{fontSize:18,color:'#1b1b33',textAlign:'center'}
  });

export default FormHeader