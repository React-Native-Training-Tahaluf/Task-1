import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AuthenticateContext from "../Context/Context";
import Route, { PrivateNavigation, PublicNavigation } from "../Navigation/Navigation";

const Layout = () =>{
    var [IsLoggedIn,SetLoggedIn] = React.useState(false);

    return (
        <AuthenticateContext.Provider value={{IsLoggedIn:IsLoggedIn,SetLoggedIn : SetLoggedIn}}>
        <NavigationContainer>
            <Route />
        </NavigationContainer>
        </AuthenticateContext.Provider>
    )
}


export default Layout;





