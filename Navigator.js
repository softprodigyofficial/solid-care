import React from 'react';
import {  AsyncStorage,Dimensions,StyleSheet,Text,TouchableOpacity, Image, View,Alert} from 'react-native';
import {createStackNavigator,createSwitchNavigator} from 'react-navigation';
import Login from './Screens/Login'


const AuthStack=createStackNavigator({
Login:{screen:Login},
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