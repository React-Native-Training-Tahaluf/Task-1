import React from "react";
import { StyleSheet,Image,ImageBackground,Text,Easing, View, Animated } from "react-native";



const LoadScreen = () =>{
    console.log('[LoadScreen] : Screen : Rerender');

    var spinValue = new Animated.Value(0);

const spin = spinValue.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '360deg']
})
Animated.loop(
 Animated.timing(
   spinValue,
   {
    toValue: 1,
    duration: 2000,
    easing: Easing.linear,
    useNativeDriver: true
   }
 )
).start();

    return(
        <ImageBackground source={require('../../Assets/Images/Background/pexels-photo-3258236.jpeg')}
         resizeMode="cover" style={[Style.MainView]}>
<Animated.Image
  style={[{transform: [{rotate: spin}] },Style.Icon]}
  source={require('../../Assets/Images/Icons/jordan.png')} />

            <Text style={[Style.Text]}>Loading...</Text>
        </ImageBackground>
    )
}

export default LoadScreen;


const Style = StyleSheet.create({
    MainView :{
        flex:1,justifyContent:'center',alignItems:'center'
    },
    Icon :{
        height:150,width:150
    },
    Text :{
        fontSize:30, color:'#fff'
    }
});
