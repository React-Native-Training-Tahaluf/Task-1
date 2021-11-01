import AsyncStorage from "@react-native-community/async-storage";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";


const Home = () =>{
    console.log('[Home] : Rerender');

    return(
        <View>
            <Text>Home</Text>
        </View>
    )
}


export default Home;
