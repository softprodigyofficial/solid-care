import React,{Component} from 'react';
import {  AsyncStorage,TextInput, ScrollView,Dimensions,StatusBar,StyleSheet,ImageBackground,KeyboardAvoidingView,Text,TouchableOpacity, Image, View,Alert} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {withNavigation} from 'react-navigation'

let {height, width} = Dimensions.get('window');

class Drawer extends React.Component{



render(){
return(
<View style={{ flex:2}}>

        <View style={{flex:2}}>
              <TouchableOpacity style={styles.icon} onPress={()=>this.props.navigation.toggleDrawer()}>
                  <Image source={require('../Images/cross.png')} style={{width:'50%',height:'50%',resizeMode:'contain'}}/> 
              </TouchableOpacity></View>
        <View style={{flex:3,}}>
        <View style={{flex:2,marginHorizontal:EStyleSheet.value('2rem'),flexDirection:'row',borderBottomColor:'white',borderBottomWidth:1,justifyContent:'space-between'}}>
               <View>
                   <TextInput value="Katie Doe" style={{color:'white',fontFamily:'raleway',fontWeight:'bold',fontSize:EStyleSheet.value('1.5rem')}}/>
                   <Text style={{color:'#696A6A',fontFamily:'raleway',fontSize:EStyleSheet.value('0.8rem'),paddingBottom:EStyleSheet.value('2.5rem')}}>Member since January 4,2014</Text>
               </View>
               <TouchableOpacity style={{height:'45%',width:'15%',backgroundColor:'#7A8691',justifyContent:'center',borderRadius:2}}>
                   <Text style={{color:'white',fontFamily:'raleway',textAlign:'center',fontWeight:'bold'}}> edit</Text>
               </TouchableOpacity>
        </View>
        <View style={{flex:1}}></View>
        </View>
        <View style={{flex:5,backgroundColor:'orange'}}>

        </View>
        <View style={{flex:2,backgroundColor:'blue'}}></View>
        <View style={{flex:2,backgroundColor:'white'}}></View>



</View>
    );
    }
}

const styles=EStyleSheet.create({
 
    crossIcon:{
       width:'40%',
       height:'40%',
       resizeMode:'contain',
       marginTop: '2.5rem',
      // marginLeft: '0.1rem',
    },
    icon:{
        position:'absolute',
        height:'40%',
        width:'40%',
        marginLeft:'1rem',
        marginTop:'2.5rem',
        resizeMode:'contain',
       // position:'absolute'
       },
    
})

export default withNavigation(Drawer);