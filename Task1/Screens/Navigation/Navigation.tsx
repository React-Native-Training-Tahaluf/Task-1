import React,{useEffect} from "react";

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LogIn from "../Views/Public/LogIn";
import Register from "../Views/Public/Register";
import Home from "../Views/Private/Home";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { DangerButton } from "../Components/ReusableFunctions/Buttons";
import ForgetPassword from "../Views/Public/ForgetPassword";

const Stack = createStackNavigator();
const BottomBar = createBottomTabNavigator();

export const PublicNavigation = () =>{
   console.log('[PublicNavigation] : Rerender');
        
    return(
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='LogIn'>
            <Stack.Screen name='LogIn' component={LogIn} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='ForgetPassword' component={ForgetPassword} />
        </Stack.Navigator>
    )
}

export const PrivateNavigation = (props) =>{
    console.log('[PrivateNavigation] : Rerender');
        
    const Logout= async()=>{
        await AsyncStorage.removeItem('token');
        props.SetIsLoggedIn(false);
    }

    return(
        <View style={{flex:1}}>
            <DangerButton text ='LogOut' Action = {Logout} />
            <BottomBar.Navigator>
                <BottomBar.Screen
                    options={{
                        tabBarLabel: 'Home Screen'
                        ,headerShown:false
                    }}
                    name={'Home'}
                    component={Home}
                ></BottomBar.Screen>
            </BottomBar.Navigator>
        </View>
    )
}

// const Route = () =>{
    
//     return (
//         <View style={{flex:1}}>
//             <PublicNavigation />
//         </View>
//     )
// }

