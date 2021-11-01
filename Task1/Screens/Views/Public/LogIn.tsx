import React,{useEffect} from "react";
import { StyleSheet,Text, View,TouchableOpacity, ImageBackground } from "react-native";
import InputBox from "../../Components/ReusableFunctions/InputBox";
import AsyncStorage from '@react-native-community/async-storage';
import { SafeAreaView } from "react-native-safe-area-context";
import LoadScreen from "../LoadScreen";
import { Image } from "react-native-animatable";
import AuthenticateContext from "../../Context/Context";

const LogIn = () =>{
console.log('[LogIn] : Rerender');
        
    const Context : any = React.useContext(AuthenticateContext);
    var [Loading,SetLoading] = React.useState(true);

    var [Email,SetEmail] = React.useState('');
    var [Password,SetPassword] = React.useState('');

    const ConditionEmail = (Value:any) =>{
        let regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;        
        return !regx.test(Value);
    }
    const ConditionLength = (Value:any,Length:any) =>{
        return Value.length < Length;
    }

    const Submit = () =>{
        SetLoading(true);

        setTimeout(async () => {
            await AsyncStorage.setItem('token','MyToken');
            Context.SetLoggedIn(true);
            SetLoading(false);
        }, 2000);
    }

    useEffect(() => {        
        setTimeout(async () => {
          var token =  await AsyncStorage.getItem('token');
          if(token == null){Context.SetLoggedIn(false);}else{Context.SetLoggedIn(true);}
          SetLoading(false);
        }, 5000);
    }, [])
    
    return (
        <SafeAreaView style={{flex:1}}>
        {
            Loading ? <LoadScreen /> : 
        <ImageBackground source={require('../../../Assets/Images/Background/pexels-hisham-zayadnh-5360755.jpg')}
         resizeMode="cover" style={[Style.MainView]}>
              <View style={{flex:1}}>
                      <Image source={require('../../../Assets/Images/Icons/petra.png')}
                      style={[Style.Icon]}
                      />
              </View>
             <View style={{flex:3}}></View>
        <View style={[Style.LogInForm]}>
            <InputBox placeholder = 'Email' ErrorMessage ='should be email.' ErrorCondition={ConditionEmail(Email)} keyboardType = 'default' Value = {Email} SetValue = {SetEmail}/>
            <InputBox placeholder = 'Password' ErrorMessage = 'Password should be much more 8 character.' ErrorCondition={ConditionLength(Password,8)} keyboardType = 'default' Value = {Password} SetValue = {SetPassword} secureTextEntry = {true}/>
            
            <View style={{alignItems:'flex-end'}}>
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
        </ImageBackground>
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
        flex:2,justifyContent:'center',width:'95%',
        backgroundColor:'#ffffff33',margin:10,borderRadius:30,
    },
    LogInButtonActive :{
        backgroundColor:'#de8e49',borderRadius:30
        ,width:100,height:50,alignItems:'center',justifyContent:'center'
    },
    LogInButtonInactive :{
        backgroundColor:'#de8e4936',borderRadius:30
        ,width:100,height:50,alignItems:'center',justifyContent:'center'
    }
})
