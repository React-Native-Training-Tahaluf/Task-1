import React from "react";
import { View,Text,StyleSheet, TextInput } from "react-native";

import * as Animatable from 'react-native-animatable';

const InputBox = ({placeholder,ErrorMessage,ErrorCondition,keyboardType,secureTextEntry = false,Value,SetValue}) =>{

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

export default InputBox;


const Style = StyleSheet.create({
    TextInput : {
        width:'95%',backgroundColor:'#fff',margin:10,borderRadius:10,
        color:'#000'
    },
    ErrorMessage: {
        color: '#FF0000',
        fontSize: 14,
    },
})
