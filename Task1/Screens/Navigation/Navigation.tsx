import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LogIn from "../Views/Public/LogIn";
import Register from "../Views/Public/Register";
import Home from "../Views/Private/Home";
import { View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import ForgetPassword from "../Views/Public/ForgetPassword";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
            <BottomBar.Navigator>
                <BottomBar.Screen
                    options={{
                        tabBarLabel: ''
                        ,headerShown:false,
                        tabBarIcon:()=>{
                            return (
                                 <FontAwesome 
        name="sign-out"
        color='blue'
        size={40}
        onPress={()=>{Logout()}} color= 'red'
    />
                            )
                        }
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

