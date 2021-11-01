import React,{useEffect} from "react";

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LogIn from "../Views/Public/LogIn";
import Register from "../Views/Public/Register";
import Home from "../Views/Private/Home";
import AuthenticateContext from "../Context/Context";
import { Text, View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

const Stack = createStackNavigator();
const BottomBar = createBottomTabNavigator();

export const PublicNavigation = () =>{
   console.log('[PublicNavigation] : Rerender');
        
    return(
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='LogIn'>
            <Stack.Screen name='LogIn' component={LogIn} />
            <Stack.Screen name='Register' component={Register} />
        </Stack.Navigator>
    )
}

export const PrivateNavigation = () =>{
    return(
            <BottomBar.Navigator>
                <BottomBar.Screen
                    options={{
                        tabBarLabel: 'Home Screen'
                    }}
                    name={'Home'}
                    component={Home}
                ></BottomBar.Screen>
            </BottomBar.Navigator>
    )
}

const Route = () =>{

    const Context : any = React.useContext(AuthenticateContext);
    
    return (
        <View style={{flex:1}}>
        {
            Context.IsLoggedIn ? <PrivateNavigation /> : <PublicNavigation />
        }
        </View>
    )
}

export default Route;