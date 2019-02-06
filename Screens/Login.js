import React,{Component} from 'react';
import {  AsyncStorage,Dimensions,StatusBar,StyleSheet,ImageBackground,KeyboardAvoidingView,Text,TouchableOpacity, Image, View,Alert} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { TextInput, ScrollView } from 'react-native-gesture-handler';


let {height, width} = Dimensions.get('window');

class Login extends React.Component{

render(){
return(
<KeyboardAvoidingView behavior={"padding"} enabled  style={{flexGrow:1,height:height}} >
    <StatusBar barStyle="light-content" />
    <ScrollView >
    <ImageBackground source={require('../Images/login-signup-background.png')} style={styles.backroundImage}> 
        
            <View style={{flex:1}}>
            <TouchableOpacity style={{flex:2}} onPress={()=>this.props.navigation.goBack()}>
            <Image source={require('../Images/cross.png')} style={styles.crossIcon}/>
            </TouchableOpacity>
            <View style={{flex:11 }}>
                <View style={{flex:1}}>
                </View>
                <View style={{flex:2}}>
                    <Text style={styles.loginText}>log in</Text>
                </View>
                <View style={{flex:6,alignItems:'center'}}>
                    <View style={styles.EmailView}>
                        <TextInput style={styles.Emailinput} placeholder='email address' placeholderTextColor='#7b8ea8'/>
                    </View>
                    <View style={styles.PasswordView}>

                    <TextInput style={styles.Passwordinput} secureTextEntry={true} placeholder='password' placeholderTextColor='#7b8ea8'/>
                    <Image source={require('../Images/password.png')} style={{ width:'60%',height:'60%',resizeMode:'contain'}}/>
                    </View>
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>
                            log in
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.BottomView}>
                        <Text style={styles.BottomText}>forgot password?</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:2}}>

                </View>
            </View>
            
            <TouchableOpacity style={styles.BottomView}>
            <Text style={styles.BottomText}>new to [solidcore]?</Text>
            </TouchableOpacity>

            </View> 
        

    </ImageBackground>
    </ScrollView>
</KeyboardAvoidingView>
    );
    }
}

const styles=EStyleSheet.create({
    backroundImage:{
       width:'100%',
       height:height
    },
    crossIcon:{
       width:'20%',
       height:'20%',
       resizeMode:'contain',
       marginTop: '2.5rem',
       marginLeft: '0.5rem',
    },
    BottomText:{
       color:'#7b8ea8',
       fontFamily: 'raleway'
    },
    BottomView:{
        flex:1,
        alignItems:'center',
        //backgroundColor:'blue'
        
    },
    loginText:{
        flex:1,
       color:'#FFFFFF',
       fontFamily: 'Blue Liquid Bold',
       fontSize:'2rem',
       textAlign:'center'
    },
    EmailView:{
      width:'80%',
      borderBottomColor:'#7b8ea8',
      borderBottomWidth:1,
      paddingTop:'1.5rem',
      paddingBottom: '0.5rem',
      paddingLeft: '0.3rem',
    },
    Emailinput:{
      color:'#7b8ea8',
    },
    PasswordView:{
        width:'80%',
        flexDirection:'row',
        borderBottomColor:'#7b8ea8',
        justifyContent:'space-between',
        borderBottomWidth:1,
        paddingTop:'1.5rem',
        paddingBottom: '0.5rem',
        paddingLeft: '0.3rem',


    },
    Passwordinput:{
      color:'#7b8ea8',
      width:'65%',
      //top:'15%'
    },
    loginButton:{
      width:'80%',
      height:'15%',
      margin:'2rem',
      backgroundColor:'#3D85C6',
      justifyContent: 'center',

    },
    loginButtonText:{
      color:"#FFFFFF",
      fontSize:'1rem',
      textAlign: 'center',
      fontFamily:'raleway',
      fontWeight: 'bold',
    }
})

export default Login;