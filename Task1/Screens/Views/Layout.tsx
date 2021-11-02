import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { PublicNavigation } from "../Navigation/Navigation";


const Layout = () =>{
console.log('[Layout] : Rerender');
    return (
        <NavigationContainer>
            <PublicNavigation />
        </NavigationContainer>
    )
}


export default Layout;





