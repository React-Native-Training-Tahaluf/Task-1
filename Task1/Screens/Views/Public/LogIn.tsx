import React,{useEffect} from "react";
import { StyleSheet,Text, View,TouchableOpacity, ImageBackground } from "react-native";
import {InputBox, PasswordBox} from "../../Components/ReusableFunctions/InputBox";
import AsyncStorage from '@react-native-community/async-storage';
import { SafeAreaView } from "react-native-safe-area-context";
import LoadScreen from "../LoadScreen";
import { Image } from "react-native-animatable";
import { PrivateNavigation } from "../../Navigation/Navigation";
import { SuccessButton } from "../../Components/ReusableFunctions/Buttons";
import { useNavigation } from "@react-navigation/native";
import { MainScreen } from "../../Components/ReusableFunctions/Containers";
import { ConditionEmail, ConditionLength } from "../../Components/ReusableFunctions/Conditions";

const LogIn = () =>{
console.log('[LogIn] : Rerender');

    var navigation = useNavigation<any>();

    var [IsLoggedIn,SetIsLoggedIn] = React.useState(false);
    var [Loading,SetLoading] = React.useState(true);

    var [Email,SetEmail] = React.useState('');
    var [Password,SetPassword] = React.useState('');

    const Submit = () =>{
        SetLoading(true);

        setTimeout(async () => {
            await AsyncStorage.setItem('token','MyToken');
            SetIsLoggedIn(true);
            SetLoading(false);
        }, 2000);
    }

    useEffect(() => {        
        setTimeout(async () => {
          var token =  await AsyncStorage.getItem('token');
          if(token == null){SetIsLoggedIn(false);}else{SetIsLoggedIn(true);}
          SetLoading(false);
        }, 5000);
    }, [])
    
    return (
        <SafeAreaView style={{flex:1}}>
        {
            Loading ? <LoadScreen /> : 
            IsLoggedIn ? <PrivateNavigation SetIsLoggedIn = {SetIsLoggedIn} /> :
        <MainScreen BackgroundImage ={require('../../../Assets/Images/Background/pexels-hisham-zayadnh-5360755.jpg')}>
<View style={[Style.LogInForm]}>
            <InputBox placeholder = 'Email' ErrorMessage ='should be email.' ErrorCondition={ConditionEmail(Email)} keyboardType = 'default' Value = {Email} SetValue = {SetEmail}/>            
            <PasswordBox placeholder = 'Password' ErrorMessage = 'Password should be much more 8 character.' ErrorCondition={ConditionLength(Password,8)} keyboardType = 'default' Value = {Password} SetValue = {SetPassword}/>
            
            <View>
                <TouchableOpacity style={[Style.ForgetPasswordButton]}
                onPress={()=>{navigation.navigate('ForgetPassword')}}>
                    <Text style={[Style.ForgetPasswordText]}>Forget Password</Text>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row'
            ,justifyContent:'space-between'}}>

                    <SuccessButton text='Register' 
                    ButtonStyle={{borderRadius:30,width:100}} 
                    TextStyle ={{fontSize:15}}
                    Action={()=>{navigation.navigate('Register',{Email:Email,LogIn:Submit})}} />


                {
                    !(ConditionEmail(Email) || ConditionLength(Password,8)) ?
            <TouchableOpacity style={[Style.LogInButtonActive]} 
            onPress = {()=>{Submit()}}>
                <Text style={{color:'#fff'}}>LogIn</Text>
            </TouchableOpacity>
                    : 
                    <View style={[Style.LogInButtonInactive]} >
                        <Text style={{color:'#fff'}}>LogIn</Text>
                    </View>
                }
            </View>
            </View>
        </MainScreen>

            // <ImageBackground source={require('../../../Assets/Images/Background/pexels-hisham-zayadnh-5360755.jpg')}
        //  resizeMode="cover" style={[Style.MainView]}>
        //       <View style={{flex:1}}>
        //               <Image source={require('../../../Assets/Images/Icons/petra.png')}
        //               style={[Style.Icon]}
        //               />
        //       </View>
        //      <View style={{flex:2}}></View>
        // <View style={[Style.LogInForm]}>
        //     <InputBox placeholder = 'Email' ErrorMessage ='should be email.' ErrorCondition={ConditionEmail(Email)} keyboardType = 'default' Value = {Email} SetValue = {SetEmail}/>
        //     <InputBox placeholder = 'Password' ErrorMessage = 'Password should be much more 8 character.' ErrorCondition={ConditionLength(Password,8)} keyboardType = 'default' Value = {Password} SetValue = {SetPassword} secureTextEntry = {true}/>
            
        //     <View>
        //         <TouchableOpacity style={[Style.ForgetPasswordButton]}
        //         onPress={()=>{navigation.navigate('ForgetPassword')}}>
        //             <Text style={[Style.ForgetPasswordText]}>Forget Password</Text>
        //         </TouchableOpacity>
        //     </View>

        //     <View style={{flexDirection:'row'
        //     ,justifyContent:'space-between'}}>

        //             <SuccessButton text='Register' 
        //             ButtonStyle={{borderRadius:30,width:100}} 
        //             TextStyle ={{fontSize:15}}
        //             Action={()=>{navigation.navigate('Register')}} />


        //         {
        //             !(ConditionEmail(Email) || ConditionLength(Password,8)) ?
        //     <TouchableOpacity style={[Style.LogInButtonActive]} 
        //     onPress = {()=>{Submit()}}>
        //         <Text style={{color:'#fff'}}>LogIn</Text>
        //     </TouchableOpacity>
        //             : 
        //             <View style={[Style.LogInButtonInactive]} >
        //                 <Text style={{color:'#fff'}}>LogIn</Text>
        //             </View>
        //         }
        //     </View>
        // </View>
        // </ImageBackground>
        
        }
        </SafeAreaView>
    )
}


export default LogIn;


const Style = StyleSheet.create({
    MainView :{
        flex:1,justifyContent:'center',alignItems:'center'
    },
    Icon :{
        height:75,width:75
    },
    LogInForm :{
        flex:3,justifyContent:'center',width:'95%',
        backgroundColor:'#ffffff6b',margin:10,borderRadius:30,
    },
    LogInButtonActive :{
        backgroundColor:'#de8e49',borderRadius:30
        ,width:100,height:50,alignItems:'center',justifyContent:'center'
    },
    LogInButtonInactive :{
        backgroundColor:'#de8e4936',borderRadius:30
        ,width:100,height:50,alignItems:'center',justifyContent:'center'
    },
    ForgetPasswordButton :{
        margin:10,

    },
    ForgetPasswordText:{
        fontSize:15,color:'#fff',fontWeight:'600',
        textDecorationLine: 'underline'
    }
})
