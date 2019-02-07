import React,{Component} from 'react';
import {  AsyncStorage,TextInput, ScrollView,Dimensions,StatusBar,StyleSheet,ImageBackground,KeyboardAvoidingView,Text,TouchableOpacity, Image, View,Alert} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {DrawerActions} from 'react-navigation'

let {height, width} = Dimensions.get('window');

class Home extends React.Component{



render(){
return(
<View style={{ flex:1,backgroundColor:'blue'}}>
<TouchableOpacity style={{flex:2}} onPress={()=>this.props.navigation.dispatch(DrawerActions.openDrawer())}>
            <Image source={require('../Images/drawer.png')} style={styles.crossIcon}/>
            </TouchableOpacity>

</View>
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
       marginLeft: '0.1rem',
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

export default Home;