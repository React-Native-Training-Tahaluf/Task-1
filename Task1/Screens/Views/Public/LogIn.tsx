import React,{useEffect,useRef} from "react";
import { StyleSheet,Text, View,TouchableOpacity, ToastAndroid } from "react-native";
import {InputBoxUseRef, PasswordBoxUseRef} from "../../Components/ReusableFunctions/InputBox";
import AsyncStorage from '@react-native-community/async-storage';
import { SafeAreaView } from "react-native-safe-area-context";
import LoadScreen from "../LoadScreen";
import { PrivateNavigation } from "../../Navigation/Navigation";
import { SuccessButton } from "../../Components/ReusableFunctions/Buttons";
import { useNavigation } from "@react-navigation/native";
import { MainScreen } from "../../Components/ReusableFunctions/Containers";
import { ConditionEmail, ConditionLength } from "../../Components/ReusableFunctions/Conditions";

const LogIn = () =>{
console.log('[LogIn] : Screen : Rerender');

    var navigation = useNavigation<any>();

    var [IsLoggedIn,SetIsLoggedIn] = React.useState(false);
    var [Loading,SetLoading] = React.useState(true);

    var LogInForm = useRef({Email : '',Password:''});

    const LogIn = () =>{
        if(!ConditionEmail(LogInForm.current.Email)
        && !ConditionLength(LogInForm.current.Password,8)){
                SetLoading(true);

        setTimeout(async () => {
            await AsyncStorage.setItem('token','MyToken');
            SetIsLoggedIn(true);
            SetLoading(false);
        }, 2000);
        }else{
            ToastAndroid.showWithGravityAndOffset(
      "Make Sure Enter Email And Password",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
        }
    }

    const ToRegister = () =>{
navigation.navigate('Register'
                    ,{Email:LogInForm.current.Email});
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

            <InputBoxUseRef Type = 'Email' 
            placeholder = 'Enter Your Email' 
            ErrorMessage ='should be email.' 
            onChange = {(val:any)=>{LogInForm.current.Email = val;}} 
             />
            <PasswordBoxUseRef
            Type = 'Length' Length = {8}
            placeholder = 'Enter Your Password' 
            ErrorMessage ='Password should be much more 8 character.' 
            onChange = {(val:any)=>{LogInForm.current.Password = val;}}
             />

            <View>
                <TouchableOpacity style={[Style.ForgetPasswordButton]}
                onPress={()=>{navigation.navigate('ForgetPassword'
                ,{Email:LogInForm.current.Email})}}>
                    <Text style={[Style.ForgetPasswordText]}>Forget Password</Text>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row'
            ,justifyContent:'space-between'}}>

                    <SuccessButton text='Register' 
                    ButtonStyle={{borderRadius:30,width:100}} 
                    TextStyle ={{fontSize:15}}
                    Action={()=>{ToRegister();}} />

            <TouchableOpacity style={[Style.LogInButtonActive]} 
            onPress = {()=>{LogIn()}}>
                <Text style={{color:'#fff'}}>LogIn</Text>
            </TouchableOpacity>
            </View>
            </View>
        </MainScreen>
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
