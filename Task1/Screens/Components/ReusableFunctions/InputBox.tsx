import React from "react";
import { View,Text,StyleSheet, TextInput } from "react-native";

import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const InputBox = ({placeholder='',ErrorMessage=''
,ErrorCondition=false,keyboardType='default',secureTextEntry = false
,Value,SetValue}:any) =>{

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


export const PasswordBox = ({placeholder='',ErrorMessage=''
,ErrorCondition=false,keyboardType='default',
Value,SetValue}:any) =>{

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
