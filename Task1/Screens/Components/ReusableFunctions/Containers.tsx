import React from "react";
import {View,ImageBackground,Image,StyleSheet} from 'react-native';

export const MainScreen = ({children
    ,BackgroundImage = require('../../../Assets/Images/Background/pexels-hisham-zayadnh-5360755.jpg')
}:any)=>{
    return(
                <ImageBackground source={BackgroundImage}
         resizeMode="cover" style={[Style.MainView]}>
              <View style={{flex:1}}>
            <Image source={
                require('../../../Assets/Images/Icons/petra.png')
            }
            style={[Style.Icon]}
            />
              </View>
             <View style={[{flex:2}]}></View>
             {children}
             </ImageBackground>
    )
}


const Style = StyleSheet.create({
    MainView :{
        flex:1,justifyContent:'center',alignItems:'center'
    },
    Icon :{
        height:75,width:75
    },
})
