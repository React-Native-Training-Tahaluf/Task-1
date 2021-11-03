import React, { useState,useEffect,useRef } from "react";
import { View,Image, StyleSheet, Text, ToastAndroid, Button } from "react-native";
import { ConditionConfirmValues, ConditionEmail, ConditionLength } from "../ReusableFunctions/Conditions";
import { InputBox, PasswordBox } from "../ReusableFunctions/InputBox";
import * as Animatable from 'react-native-animatable';

import {Timer, Countdown} from 'react-native-element-timer';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { SuccessButton } from "../ReusableFunctions/Buttons";

export const EmailScreen = ({Email,SetEmail}:any) =>{
    return (
        <View style={[Style.MainView]}>
            <View style={{flex:1,alignItems:'center'}}>
            <Image source={
                require('../../../Assets/Images/Icons/email.png')
            }style={[Style.Icon]}
            />
            </View>
            <InputBox placeholder = 'Enter Your Email' ErrorMessage ='should be email.' ErrorCondition={ConditionEmail(Email)} keyboardType = 'default' Value = {Email} SetValue = {SetEmail}/>     
        </View>
    )
}






export const VerifyEmailScreen = ({SetCheckCode}:any) =>{
console.log('VerifyEmailScreen');

    const timerRef = useRef(null);
    var [StatusTimer,SetStatusTimer] = useState(true);

    useEffect(() => {
        console.log('Start Timer');
        timerRef.current.start();
    }, []);
    const RestTimer = () =>{
        console.log('Start Timer');
        timerRef.current.start(); 
        SetStatusTimer(true);
    }
    const EndTimer = () =>{
        SetStatusTimer(false);
    }

    return (
        <View style={[Style.MainView]}>
            <View style={{flex:1,alignItems:'center'}}>
            <Image source={
                require('../../../Assets/Images/Icons/VerifyEmail.png')
            }style={[Style.Icon]}
            />
            <View style={{alignItems:'center',justifyContent:'center'}}>
            </View>
              <Text style={[StyleVerifyEmailScreen.Text]}>Check Your Email Please</Text>

{ StatusTimer ? 
              <OTPInputView 
    style={{width: '80%', height: 100}}
    pinCount={6}
    autoFocusOnLoad
    codeInputFieldStyle={StyleVerifyEmailScreen.underlineStyleBase}
    codeInputHighlightStyle={StyleVerifyEmailScreen.underlineStyleHighLighted}
    onCodeFilled = {(code => {
        if(ConditionConfirmValues('123456',code)){
            SetCheckCode(true);
                ToastAndroid.showWithGravityAndOffset(
      "Success",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
        }else{
            SetCheckCode(false);
                ToastAndroid.showWithGravityAndOffset(
      "Mistake Code",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
        }
    })}
/>
:null}

<View>
                    <Countdown
                    ref={timerRef}
                    seconds={30}
                    style={StyleVerifyEmailScreen.Timer}
                    textStyle={StyleVerifyEmailScreen.CountTimer}
                    onEnd={e => {EndTimer();}}
                />
                {
                    StatusTimer ? null :
                            <SuccessButton text='Resend' 
        ButtonStyle={{borderRadius:10,width:100,marginTop:30}} 
        TextStyle ={{fontSize:15}}
        Action={()=> {RestTimer()}} />

                }
</View>
</View>
        </View>
    )
}

const StyleVerifyEmailScreen = StyleSheet.create({
    Text :{
        fontSize:23,color:'green'
    },
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth:0,
    borderBottomWidth: 1,
    borderColor:'#fff',
    color:'#000',
    fontSize:20
  },
 
  underlineStyleHighLighted: {
    borderColor: "green",
  },
  Timer :{
      borderWidth:1,justifyContent:'center',alignItems:'center'
  },
  CountTimer:{
      fontSize:30,padding:10
  }
})




export const RegistrationScreen = 
({Password,SetPassword,Nickname,SetNickname
    ,ConfirmPassword,SetConfirmPassword
}:any) =>{    
    return (
        <View style={[Style.MainView]}>
            <View style={{flex:1,alignItems:'center'}}>
            <Image source={
                require('../../../Assets/Images/Icons/verified-user.png')
            }style={[Style.Icon]}
            />
            </View>
            <InputBox placeholder = 'Enter Your Nickname' ErrorMessage ='Nickname should be much more 4 character.' ErrorCondition={ConditionLength(Nickname,4)} keyboardType = 'default' Value = {Nickname} SetValue = {SetNickname}/>  

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
                require('../../../Assets/Images/Icons/pexels-hisham-zayadnh-7025667.jpg')
            }style={[StyleSubmitScreen.Icon]}
            />
            <Text style={[StyleSubmitScreen.Text]}>Welcome</Text>
            </View>
        </View>
    )
}

const StyleSubmitScreen = StyleSheet.create({
    Icon :{
        height:280,width:280,borderRadius:40
    },
    Text:{
        fontSize:30,fontWeight:'900',color:'#000'
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




