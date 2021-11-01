import AsyncStorage from "@react-native-community/async-storage";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import AuthenticateContext from "../../Context/Context";


const Home = () =>{
    const Context : any = React.useContext(AuthenticateContext);
    
    const Logout= async()=>{
        await AsyncStorage.removeItem('token');
        Context.SetLoggedIn(false);
    }

    return(
        <View>
            <Text>Home</Text>
            <TouchableOpacity onPress={()=>{Logout()}}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}


export default Home;
