import React,{useEffect,useState,useRef} from "react";
import { StyleSheet, Text, View } from "react-native";
import { MainScreen } from "../../Components/ReusableFunctions/Containers";

import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { EmailScreen, RegistrationScreen, SubmitScreen, VerifyEmailScreen } from "../../Components/Screens/RegisterScreens";
import { ConditionConfirmValues, ConditionEmail, ConditionLength } from "../../Components/ReusableFunctions/Conditions";
import { useNavigation } from "@react-navigation/core";



var BackgroundList = [
    require('../../../Assets/Images/Background/pexels-alex-azabache-3250591.jpg'),
    require('../../../Assets/Images/Background/pexels-hisham-zayadnh-5104057.jpg'),
    require('../../../Assets/Images/Background/pexels-hisham-zayadnh-5104079.jpg'),
    require('../../../Assets/Images/Background/pexels-hisham-zayadnh-5218088.jpg'),
    require('../../../Assets/Images/Background/pexels-titoni-thomas-8377121.jpg'),
    require('../../../Assets/Images/Background/pexels-vincent-ma-janssen-3258226.jpg'),
]
const Register = ({route}:any) =>{    
    console.log('[Register] : Rerender');

    var Navigation = useNavigation<any>();
    var [BackgroundImage,SetBackgroundImage] = React.useState(require('../../../Assets/Images/Background/pexels-hisham-zayadnh-4216244.jpg'));
    var [Email,SetEmail] = useState('');
    var [Password,SetPassword] = useState('');
    var [Nickname,SetNickname] = useState('');
    var [ConfirmPassword,SetConfirmPassword] = useState('');

    var [CheckCode,SetCheckCode] = useState(false);

    const progressStepsStyle = {
        activeStepNumColor: "#000",
        activeStepIconBorderColor: "green",
        completedProgressBarColor: "green",
        disabledStepIconColor :'#fff',
        disabledStepNumColor : '#000',
        labelFontSize :16,
        labelColor : '#000'
    };

    const ChangeBackground = () =>{
        var Image = BackgroundList[(Math.random() * BackgroundList.length) | 0]
        SetBackgroundImage(Image)
    }

    const Check = () =>{
        const NickNameCon= !ConditionLength(Nickname,4);
        const PasswordCon = !ConditionLength(Password,8);
        const ConfirmPasswordCon = ConditionConfirmValues(Password,ConfirmPassword);
        
        return ((NickNameCon&&PasswordCon&&ConfirmPasswordCon))
    }

    useEffect(() => {
        console.log(route);
        SetEmail(route.params.Email);
    }, [])

    const Submit = () =>{        
        console.log('Email : ' + Email);
        console.log('Password : ' + Password);
        console.log('Nickname : ' + Nickname);
        console.log('ConfirmPassword : ' + ConfirmPassword);
        
        Navigation.navigate('LogIn')
        route.params.LogIn();
    }

    return(
        <View style={{flex:1}}>
        <MainScreen BackgroundImage = {BackgroundImage}>

    <View style = {[Style.MainView]}>
        <ProgressSteps {...progressStepsStyle}>
        <ProgressStep label="Email" onNext={ChangeBackground} nextBtnDisabled = {ConditionEmail(Email)}
        nextBtnStyle={Style.NextButton}>
            <View style={{ alignItems: 'center' }}>
                <EmailScreen Email ={Email} SetEmail = {SetEmail} />
            </View>
        </ProgressStep>
        <ProgressStep label="Verify Email" onNext={ChangeBackground} nextBtnDisabled = {!CheckCode}
        nextBtnStyle={Style.NextButton}
        previousBtnStyle ={Style.PreviousButton}>
            <View style={{ alignItems: 'center' }}>
                <VerifyEmailScreen SetCheckCode = {SetCheckCode} />
            </View>
        </ProgressStep>
                <ProgressStep label="Registration" nextBtnDisabled = {!Check()}
        nextBtnStyle={Style.NextButton}
        previousBtnDisabled = {true}>
            <View style={{ alignItems: 'center' }}>
                <RegistrationScreen Password={Password} SetPassword ={SetPassword} 
                Nickname ={Nickname} SetNickname={SetNickname}
                ConfirmPassword = {ConfirmPassword} SetConfirmPassword ={SetConfirmPassword}/>
            </View>
        </ProgressStep>
        
        <ProgressStep label="Submit" onSubmit={Submit} nextBtnDisabled = {false}
        nextBtnStyle={Style.NextButton}
        previousBtnDisabled = {true}>
            <View style={{ alignItems: 'center' }}>
                <SubmitScreen />
            </View>
        </ProgressStep>
    </ProgressSteps>
    </View>
        </MainScreen>
        </View>
    )
}


export default Register;

const Style = StyleSheet.create({
    MainView :{
                flex:15,justifyContent:'center',width:'95%',
        backgroundColor:'#ffffffad',margin:10,borderRadius:30,
    },
    NextButton:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    borderWidth:1,
    borderColor:'green',
    },
    PreviousButton :{
                        alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    borderWidth:1,
    borderColor:'red',
    }
})
