import React,{Component} from 'react';
import {  AsyncStorage,Dimensions,StatusBar,StyleSheet,ImageBackground,KeyboardAvoidingView,Text,TouchableOpacity, Image, View,Alert} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { TextInput, ScrollView } from 'react-native-gesture-handler';

class Login extends React.Component{

render(){
return(
<KeyboardAvoidingView behavior={padding} enabled  style={{flexGrow:1,height:'100%'}} keyboardVerticalOffset={113} >
<ScrollView style={{flex:1,height:'100%'}} keyboardShouldPersistTaps='always'>
<StatusBar barStyle="light-content" />

<ImageBackground source={require('../Images/login-signup-background.png')} style={styles.backroundImage}> 
    <TouchableOpacity style={{flex:2}}>
      <Image source={require('../Images/cross.png')} style={styles.crossIcon}/>
    </TouchableOpacity>
  <View style={{flex:11}}>
      <View style={{flex:2}}></View>
       <View style={{flex:2}}>
        <Text style={styles.loginText}>log in</Text>
       </View>
       <View style={{flex:6,alignItems:'center',padding:10}}>
          <View style={styles.EmailView}>
              <TextInput style={styles.Emailinput} placeholder='email address' placeholderTextColor='#7b8ea8'/>
          </View>
          <View style={styles.PasswordView}>
              <TextInput style={styles.Passwordinput} placeholder='password' placeholderTextColor='#7b8ea8'/>
          </View>
       </View>
       <View style={{flex:3}}>

       </View>
  </View>
 <TouchableOpacity style={styles.BottomView}>
<Text style={styles.BottomText}>new to [solidcore]?</Text>
 </TouchableOpacity>
</ImageBackground>
</ScrollView>
</KeyboardAvoidingView>
    );
    }
}

const styles=EStyleSheet.create({
    backroundImage:{
       width:'100%',
       height:'100%'
    },
    crossIcon:{
       width:'25%',
       height:'25%',
       resizeMode:'contain',
       marginTop: '2rem',
    },
    BottomText:{
       color:'#7b8ea8',
       fontFamily: 'raleway'
    },
    BottomView:{
        flex:1,
        alignItems:'center',
        
    },
    loginText:{
        flex:1,
       color:'#FFFFFF',
       fontFamily: 'Blue Liquid Bold',
       fontSize:'1.7rem',
       textAlign:'center'
    },
    EmailView:{
      width:'80%',
      borderBottomColor:'#7b8ea8',
      borderBottomWidth:1,
      padding:'1rem'
    },
    Emailinput:{
      color:'#7b8ea8',
    },
    PasswordView:{
        width:'80%',
        borderBottomColor:'#7b8ea8',
        borderBottomWidth:1,
        padding:'1rem'
    },
    Passwordinput:{
      color:'#7b8ea8',
    }
})

export default Login;