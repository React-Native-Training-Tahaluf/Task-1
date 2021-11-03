
import React from "react";
import { StyleSheet, Text, View,Image } from "react-native";

import { ConditionConfirmValues, ConditionLength } from "../../Components/ReusableFunctions/Conditions";
import { PasswordBox } from "../ReusableFunctions/InputBox";
import * as Animatable from 'react-native-animatable';


export const RegistrationScreen = 
({Password,SetPassword,ConfirmPassword,SetConfirmPassword
}:any) =>{    
    return (
        <View style={[Style.MainView]}>
            <View style={{flex:1,alignItems:'center'}}>
            <Image source={
                require('../../../Assets/Images/Icons/verified-user.png')
            }style={[Style.Icon]}
            />
            </View>
            <PasswordBox placeholder = 'Password' ErrorMessage = 'Password should be much more 8 character.' ErrorCondition={ConditionLength(Password,8)} keyboardType = 'default' Value = {Password} SetValue = {SetPassword}/> 
            <PasswordBox placeholder = 'Confirm Password' ErrorMessage = 'Confirm Password should be much more 8 character.' ErrorCondition={ConditionLength(Password,8)} keyboardType = 'default' Value = {ConfirmPassword} SetValue = {SetConfirmPassword}/>  
                        {
                !ConditionConfirmValues(Password,ConfirmPassword) && !ConditionLength(Password,8) ?
                            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={StyleRegistrationScreen.ErrorMessage}>Password not match for confirm password</Text>
            </Animatable.View>
                : null
            }
        </View>
    )
}

const StyleRegistrationScreen = StyleSheet.create({
    ErrorMessage: {
        color: '#FF0000',
        fontSize: 14,
    },
})




export const SubmitScreen = () =>{
    return (
        <View style={[Style.MainView]}>
            <View style={{flex:1,alignItems:'center'}}>
            <Image source={
                require('../../../Assets/Images/Icons/password.png')
            }style={[StyleSubmitScreen.Icon]}
            />
            <Text style={[StyleSubmitScreen.Text]}>Success</Text>
            </View>
        </View>
    )
}

const StyleSubmitScreen = StyleSheet.create({
    Icon :{
        height:150,width:150,borderRadius:40
    },
    Text:{
        fontSize:30,fontWeight:'900',color:'green'
    }
})






const Style = StyleSheet.create({
    MainView :{
        width:'100%',justifyContent:'center',flex:1,
    },
    Icon :{
        height:100,width:100
    },
})