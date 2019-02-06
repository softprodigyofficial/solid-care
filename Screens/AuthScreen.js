import React,{Component} from 'react';
import {  AsyncStorage,Dimensions,StatusBar,StyleSheet,ImageBackground,KeyboardAvoidingView,Text,TouchableOpacity, Image, View,Alert} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { TextInput, ScrollView } from 'react-native-gesture-handler';


let {height, width} = Dimensions.get('window');

class AuthScreen extends React.Component{

render(){
return(

<View style={{flex:1}}> 
<StatusBar barStyle="light-content" />

    <View style={{flex:7,}}>
     <Image source={require('../Images/home-image.png')} style={{ right:'2%', width:'115%',height:'100%',resizeMode:'stretch'}}/> 
     <Image source={require('../Images/home-icon.png')} style={styles.icon}/> 
    </View>
    <View style={{flex:1,}}>
    </View>

    <View style={{flex:4,}}>
    <Text style={styles.text1}>Pilates</Text>
    <Text style={styles.text2}>[intensified]</Text>
    <Text style={styles.text3}>Turns out those Pilates classes weren't a fad. [solidcor] is unlike any workout you've ever done before.
        It's time for you to start seeing results.you're worth it.
    </Text>
    </View>
    <View style={{flex:4}}></View>
    <View style={{flex:3}}>
    <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly',marginRight:'10%'}}>
        <TouchableOpacity style={{backgroundColor:'#3D85C6',width:'35%',height:'35%',justifyContent:'center',borderRadius:2}}>
            <Text style={styles.signupText}>sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')} style={{right:'18%',backgroundColor:'#FFFFFF',borderColor:'#3D85C6',borderWidth:2,borderRadius:2,justifyContent:'center',width:'35%',height:'35%'}}>
            <Text style={styles.loginText}>log in</Text>
        </TouchableOpacity>
    </View>
    </View>
 </View>

    );
    }
}

const styles=EStyleSheet.create({
   text1:{
      fontSize:'2.3rem',
      fontWeight: 'bold',
      fontFamily: 'raleway',
      marginLeft: '2rem',
      top: '0.5rem',
   },
   text2:{
    fontSize:'2.5rem',
    //fontWeight: 'bold',
    fontFamily: 'Blue Liquid Bold',
    marginLeft: '2rem',
   },
   text3:{
    fontSize:'0.9rem',
    //fontWeight: 'bold',
    fontFamily: 'raleway',
    marginHorizontal: '1.9rem',
    color:'#6E6E6E'
   },
   signupText:{
    fontWeight: 'bold',
    fontFamily: 'raleway',
    color:'#FFFFFF',
    fontSize:'1rem',
    textAlign:'center'
   },
   loginText:{
    fontWeight: 'bold',
    fontFamily: 'raleway',
    color:'#3D85C6',
    fontSize:'1rem',
    textAlign:'center'
   },
   icon:{
    width:'12%',
    height:'12%',
    marginLeft:'2rem',
    marginTop:'2.5rem',
    resizeMode:'contain',
    position:'absolute'
   }
   
})

export default AuthScreen;