import React,{Component} from 'react';
import {  AsyncStorage,Dimensions,StatusBar,StyleSheet,ImageBackground,KeyboardAvoidingView,Text,TouchableOpacity, Image, View,Alert} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
//import {Dot} from'../Screens/Dot';


let {height, width} = Dimensions.get('window');

const Dot=(props)=>{
    let currentStyle=props.active?Styles.dotActive:Styles.dotInactive;
    return(
        <View style={[Styles.Dot,currentStyle]}></View>
    )
    }
    const Styles=StyleSheet.create({
        dot:{
            width:15,
            height:15,
            borderRadius:5,
        },
        dotActive:{
            backgroundColor:'#FC3768'
        },
        dotInactive:{
            backgroundColor:'#D2D2D4'
        }
        
        })
class Signup extends React.Component{

constructor(props){
    super(props);
    this.state={
        status:0
    }
}

render(){
    const abc= 
    <View style={{flex:11 }}>
    <View style={{flex:2}}>
        <Text style={styles.loginText}>Sign up</Text>
        <Dot/>
    </View>
        <View style={{flex:7,alignItems:'center'}}>
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
    <View style={{flex:1}}>

</View>
</View>
    
return(
<KeyboardAvoidingView behavior={"padding"} enabled  style={{flexGrow:1,height:height}} >
    <StatusBar barStyle="light-content" />
    <ScrollView >
    <ImageBackground source={require('../Images/login-signup-background.png')} style={styles.backroundImage}> 
        
            <View style={{flex:1}}>
            <TouchableOpacity style={{flex:2}} onPress={()=>this.props.navigation.goBack()}>
            <Image source={require('../Images/cross.png')} style={styles.crossIcon}/>
            </TouchableOpacity>
           
              {this.state.status==0?abc:abc}
               
            <View style={{flex:1}}>
                <View style={styles.BottomView}>
                  <Text style={styles.BottomText}>By creating an account you agree to our</Text>
                    <View style={{flexDirection:'row'}}> 
                    <Text style={styles.BottomText1}>Terms of Service</Text>
                    <Text style={styles.BottomText}>,</Text>
                    <Text style={styles.BottomText1}>Privacy Policy</Text>
                    <Text style={styles.BottomText}> and </Text>
                    <Text style={styles.BottomText1}>Membership Terms</Text>
                    </View>
                </View>
              </View>
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
       fontFamily: 'raleway',
       fontSize:'0.8rem'
    },
    BottomText1:{
        color:'#7b8ea8',
        fontFamily: 'raleway',
        textDecorationLine: 'underline',
        fontSize:'0.7rem'

     },
    BottomView:{
        
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

export default Signup;