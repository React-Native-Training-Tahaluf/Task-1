import React, { useRef, useState,useEffect } from "react";
import { View,Text,StyleSheet, TextInput } from "react-native";

import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SelectCondition } from "./Conditions";
import { NormalErrorMessage } from "./ErrorMessage";

export const InputBox = ({placeholder='',ErrorMessage=''
,ErrorCondition=false,keyboardType='default',secureTextEntry = false
,Value,SetValue}:any) =>{
    console.log('[InputBox] : Component : Rerender');

    return (
        <View>
            <TextInput placeholder = {placeholder}
            style = {[Style.TextInput]}
            autoCorrect = {false} keyboardType = {keyboardType}
            placeholderTextColor = '#000'
            value = {Value} onChangeText = {(val) => SetValue(val)}
            secureTextEntry = {secureTextEntry}
            />
            {
                ErrorCondition ?
                            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={Style.ErrorMessage}>{ErrorMessage}</Text>
            </Animatable.View>
                : null
            }
        </View>
    )
}


//*************************************************************** useState
export const PasswordBox = ({placeholder='',ErrorMessage=''
,ErrorCondition=false,keyboardType='default',
Value,SetValue}:any) =>{

    console.log('[PasswordBox] : Component : Rerender');
    var [secureTextEntry,setsecureTextEntry] = React.useState(true);
    return (
        <View>
            <View style={[Style.PasswordBox]} >
            <TextInput placeholder = {placeholder}
            style = {[Style.TextInput,{width:'85%'}]}
            autoCorrect = {false} keyboardType = {keyboardType}
            placeholderTextColor = '#000'
            value = {Value} onChangeText = {(val) => SetValue(val)}
            secureTextEntry = {secureTextEntry}
            />
                {secureTextEntry ? 
                <FontAwesome 
        name="eye-slash"
        color='#f13140'
        size={20}
        onPress={()=>{setsecureTextEntry(false)}}
    />
    :             <FontAwesome 
        name="eye"
        color='#f13140'
        size={20}
        onPress={()=>{setsecureTextEntry(true)}}
    />}
            </View>
            {
                ErrorCondition ?
                            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={Style.ErrorMessage}>{ErrorMessage}</Text>
            </Animatable.View>
                : null
            }
        </View>
    )
}









//*************************************************************** useRef
export const InputBoxUseRef = ({Type = '',Length=0,InitialValue='',
    placeholder='',ErrorMessage=''
,keyboardType='default',secureTextEntry = false,StyleBox={}
,onChange,forceUpdate=()=>{} }:any) =>{
console.log('[InputBoxUseRef] : Component : Rerender');

    var [Visible,SetVisible] = useState(false);

    useEffect(() => {
        forceUpdate();
    }, [Visible])

    return (
        <View>
            <TextInput placeholder = {placeholder}
            style = {[Style.TextInput,StyleBox]}
            autoCorrect = {false} keyboardType = {keyboardType}
            placeholderTextColor = '#000'
            onChangeText = {(val:any) =>{onChange(val);
                var Fun = SelectCondition(Type);                                   
                SetVisible(Fun(val,Length))
            }}
            secureTextEntry = {secureTextEntry}
            />
            <NormalErrorMessage ErrorMessage ={ErrorMessage} 
            Condition = {Visible} />
        </View>
    )
}


export const PasswordBoxUseRef = ({Type = '',Length=0,
    placeholder='',ErrorMessage=''
,keyboardType='default',StyleBox={}
,onChange}:any) =>{
    console.log('[PasswordBoxUseRef] : Component : Rerender');
    

    var [secureTextEntry,setsecureTextEntry] = React.useState(true);
    var [Visible,SetVisible] = useState(false);
    return (
        <View>
            <View style={[Style.PasswordBox]} >
            <TextInput placeholder = {placeholder}
            style = {[Style.TextInput,{width:'85%'},StyleBox]}
            autoCorrect = {false} keyboardType = {keyboardType}
            placeholderTextColor = '#000'
            onChangeText = {(val:any) =>{onChange(val);
                var Fun = SelectCondition(Type);                                                   
                SetVisible(Fun(val,Length))
            }}
            secureTextEntry = {secureTextEntry}
            />
                {secureTextEntry ? 
                <FontAwesome 
        name="eye-slash"
        color='#f13140'
        size={20}
        onPress={()=>{setsecureTextEntry(false)}}
    />
    :             <FontAwesome 
        name="eye"
        color='#f13140'
        size={20}
        onPress={()=>{setsecureTextEntry(true)}}
    />}
            </View>
            <NormalErrorMessage ErrorMessage ={ErrorMessage} 
            Condition = {Visible} />
        </View>
    )
}

const Style = StyleSheet.create({
    TextInput : {
        width:'95%',backgroundColor:'#fff',margin:10,borderRadius:10,
        color:'#000'
    },
    ErrorMessage: {
        color: '#FF0000',
        fontSize: 14,
    },
    PasswordBox:{
        flexDirection:'row',
        alignItems:'center'
    }
})
