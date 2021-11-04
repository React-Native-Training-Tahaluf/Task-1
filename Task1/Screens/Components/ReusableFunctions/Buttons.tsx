import React from "react";
import { TouchableOpacity,Text, StyleSheet } from "react-native";


export const DangerButton = ({text,Action,style={}}:any) => {     
    console.log('[DangerButton] : Button : Rerender');
    return (
    <TouchableOpacity style={[Style.DangerButton]}
    onPress={()=>{Action()}}>
        <Text style={[Style.DangerText]}>{text}</Text>
    </TouchableOpacity>
    )
}


export const SuccessButton = ({text,Action,ButtonStyle={},TextStyle={}}:any) => {     
    console.log('[SuccessButton] : Button : Rerender');
    return (
    <TouchableOpacity style={[Style.SuccessButton,ButtonStyle]}
    onPress={()=>{Action()}}>
        <Text style={[Style.SuccessText,TextStyle]}>{text}</Text>
    </TouchableOpacity>
    )
}

var Style = StyleSheet.create({
    //*********************************Danger
    DangerButton :{
        width:'100%',height:50,justifyContent:'center',alignItems:'center',
        backgroundColor:'#cb0000'
    },
    DangerText : {
        fontSize:35,color:'#fff'
    },

    //*********************************Success
    SuccessButton :{
        width:'100%',height:50,justifyContent:'center',alignItems:'center',
        backgroundColor:'#00d11f'
    },
    SuccessText : {
        fontSize:35,color:'#fff'
    }
})
