import React from "react";
import * as Animatable from 'react-native-animatable';
import { View,Text, StyleSheet } from "react-native";

export const NormalErrorMessage = ({ErrorMessage='',Condition=false,StyleError ={}}:any) =>{
    console.log('[NormalErrorMessage] : Component : Rerender');
    return (
        <View>
                        {
                Condition ?
                            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={[Style.ErrorMessage,StyleError]}>{ErrorMessage}</Text>
            </Animatable.View>
                : null
            }
        </View>
    )
}


const Style = StyleSheet.create({
    ErrorMessage: {
        color: '#FF0000',
        fontSize: 14,
    }
})
