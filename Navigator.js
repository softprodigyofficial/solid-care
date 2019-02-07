import React from 'react';
import {  AsyncStorage,Dimensions,StyleSheet,Text,TouchableOpacity, Image, View,Alert} from 'react-native';
import {createStackNavigator,createSwitchNavigator,createBottomTabNavigator,DrawerActions,createDrawerNavigator} from 'react-navigation';
import Login from './Screens/Login'
import Home from './Screens/home'
import Drawer from './Screens/drawer'

import AuthScreen from './Screens/AuthScreen'
import Signup from './Screens/Signup'
import EStyleSheet from 'react-native-extended-stylesheet';




const AuthStack=createStackNavigator({
  AuthScreen:{screen:AuthScreen},
  Signup:{screen:Signup},
  //AuthScreen:{screen:AuthScreen},
  Login:{screen:Login},
},
{
  headerMode:'none'
}
);

 const Bottom=createBottomTabNavigator({
  Homepage:{screen:Home,navigationOptions:{
    tabBarLabel:'home'
  }},
  BookaClass:{screen:Signup,navigationOptions:{
    tabBarLabel:'book a class'
  }},
  Browse:{screen:Login,navigationOptions:{
    tabBarLabel:'   browse'
  }},
  freinds:{screen:Signup,navigationOptions:{
    tabBarLabel:'freinds',
  }},
},
{
 //tabBarPosition:'top',
 swipeEnabled:true,
 animationEnabled : true,
 tabBarOptions: {
   activeTintColor: 'white',
   inactiveTintColor: '#7A8691',
   labelStyle: {
     fontSize: EStyleSheet.value('0.8rem'),
     fontWeight: 'bold',
     marginBottom:EStyleSheet.value('1rem'),
     fontFamily:'raleway'
   },
   indicatorStyle:{
     backgroundColor: '#FFFFFF',
   },
   style: {
   backgroundColor: 'black',
   height:EStyleSheet.value('3.5rem')
   },
 }
},
);

 const DrawerStack = createDrawerNavigator(
  {
    Drawer:  Bottom,
  },
  {
    contentComponent: (props) => (
      <View>
        <Drawer />

      </View>
    ),

  }
  // {
  //   drawerPosition:'left',
  //   drawerOpenRoute:'DrawerOpen',
  //   drawerToggleRoute:'DrawerToggle',
  // }
 )

const AppStack=createStackNavigator({
   // Bottom:{screen:Bottom},
    DrawerStack:{screen:DrawerStack}
  },{
    headerMode:'none'
  }
);
const Navigator=createSwitchNavigator({
  AuthStack:{screen:AuthStack},
   AppStack:{screen:AppStack},
  // AuthStack:{screen:AuthStack}
},
)
export default Navigator;