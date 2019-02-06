import React from 'react';
import {  AsyncStorage,Dimensions,StyleSheet,Text,TouchableOpacity, Image, View,Alert} from 'react-native';
import {createStackNavigator,createSwitchNavigator} from 'react-navigation';
import Login from './Screens/Login'
import AuthScreen from './Screens/AuthScreen'
import Signup from './Screens/Signup'




const AuthStack=createStackNavigator({
  AuthScreen:{screen:AuthScreen},
  Login:{screen:Login},
  Signup:{screen:Signup},
  
  
},
{
  headerMode:'none'
}
);

// const AppStack=createStackNavigator({

//   }
// );
const Navigator=createSwitchNavigator({
  // AppStack:{Screen:AppStack},
   AuthStack:{screen:AuthStack}
})
export default Navigator;