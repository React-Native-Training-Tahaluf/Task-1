
import React,{useState,useEffect} from "react";
import { StyleSheet, Text, View,Image } from "react-native";

import { ConditionConfirmValues, ConditionLength } from "../../Components/ReusableFunctions/Conditions";
import { PasswordBox, PasswordBoxUseRef } from "../ReusableFunctions/InputBox";
import * as Animatable from 'react-native-animatable';
import { NormalErrorMessage } from "../ReusableFunctions/ErrorMessage";


export const RegistrationScreen = 
({Password,SetPassword,ConfirmPassword,SetConfirmPassword
}:any) =>{
    console.log('[RegistrationScreen] : (ForgetPassword) Sub Screen : Rerender');  
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


//*******************************************UseRef */
export const RegistrationScreenUseRef = 
({ForgetPasswordForm,forceUpdate}:any) =>{
    console.log('[RegistrationScreen] : (ForgetPassword) Sub Screen : Rerender');  
    
        var [VisibleLength,SetVisibleLength] = useState(false);
    var [VisibleConfirmValue,SetVisibleConfirmValue] = useState(false);

        useEffect(() => {
        forceUpdate();
    }, [VisibleLength,VisibleConfirmValue])
    return (
        <View style={[Style.MainView]}>
            <View style={{flex:1,alignItems:'center'}}>
            <Image source={
                require('../../../Assets/Images/Icons/verified-user.png')
            }style={[Style.Icon]}
            />
            </View>

            <PasswordBoxUseRef
            Type = 'Length' Length = {8}
            placeholder = 'Enter Your Password' 
            ErrorMessage ='Password should be much more 8 character.' 
            onChange = {(val:any)=>{ForgetPasswordForm.current.Password = val;}}
             />

            <PasswordBoxUseRef
            Type = 'Length' Length = {8}
            placeholder = 'Enter Confirm Password' 
            ErrorMessage ='Password should be much more 8 character.' 
            onChange = {(val:any)=>{ForgetPasswordForm.current.ConfirmPassword = val; 
                SetVisibleLength(ConditionLength(val,8)); 
                SetVisibleConfirmValue(ConditionConfirmValues(ForgetPasswordForm.current.ConfirmPassword
                    ,ForgetPasswordForm.current.Password))
                }}
             />

            <NormalErrorMessage 
             ErrorMessage ='Password not match for confirm password' 
             Condition = {(!VisibleLength && !VisibleConfirmValue)}/>
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
    console.log('[SubmitScreen] : (ForgetPassword) Sub Screen : Rerender'); 
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