import React,{Component} from 'react';
import {  AsyncStorage,Dimensions,StatusBar,StyleSheet,ImageBackground,KeyboardAvoidingView,Text,TouchableOpacity, Image, View,Alert} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
 //import Share from 'react-native-share';



let {height, width} = Dimensions.get('window');
const imageWidth='30%'
class Home extends React.Component{


 onShare(){
  // alert("hi")
  const shareOptions = {
    title: 'Share via',
    message: 'some message',
    url: 'some share url',
  }
  Share.open(shareOptions)
    .then((res) => { console.log(res) })
    .catch((err) => { err && console.log(err); });
  };

render(){
return(

<View style={{flex:1}}> 
<StatusBar barStyle="light-content" />

    <View style={{flex:5,}}>
     <Image source={require('../Images/welcome-image.png')} style={{  right:'2%',width:'105%',height:'105%',resizeMode:'stretch'}}/> 
    <TouchableOpacity style={styles.icon} onPress={()=>this.props.navigation.toggleDrawer()}>
      <Image source={require('../Images/drawer.png')} style={{width:'30%',height:'30%',resizeMode:'contain'}}/> 
    </TouchableOpacity>
    <TouchableOpacity style={styles.icon2} onPress={()=>this.props.navigation.toggleDrawer()}>
      <Image source={require('../Images/home-icon.png')} style={{width:'30%',height:'30%',resizeMode:'contain'}}/> 
    </TouchableOpacity>
     <Text style={styles.text1}>welcome,</Text>
     <Text style={styles.text2}>katie!</Text>
    </View>
    {/* <View style={{flex:1,}}>
    </View> */}

    <View style={{flex:2,}}>
        <Text style={styles.text3}>your next class </Text>
    </View>
    <View style={{flex:4,flexDirection:'row',justifyContent:'space-evenly'}}>
               <View style={{flex:1}}>
               <View style={styles.imageView}>
               <Image source={require('../Images/user-default.png')} style={{width:'100%',height:'100%',resizeMode:'contain'}}/> 

               </View >
               
               <TouchableOpacity style={{width:'50%',height:'50%'}} onPress={()=>this.onShare()}> 
               <Image source={require('../Images/icon-share.png')} style={styles.shareIcon} />
               </TouchableOpacity>
               </View>
               <View style={styles.textView}>
                   <Text style={styles.text4}>thursday, january 24</Text>
                   <Text style={styles.text5}>06:30pm-07:20pm </Text>
                   <Text style={[styles.text4,{marginTop:EStyleSheet.value('0.3rem')}]}>Full Body</Text>
                   <Text style={styles.text5}>with jeffery garrison</Text>
                   <Text style={[styles.text6,{marginTop:EStyleSheet.value("1rem")}]}>1706 columbia Rd NW,</Text>
                   <Text style={styles.text6}>Washington,DC 20009</Text>
                   <Text style={styles.text6}>202-800-1088</Text>
               </View>
    </View>

    <View style={{flex:2,borderTopWidth:0.5,borderColor:'#3D85C6'}}>
        <Image source={require('../Images/blue-back.png')} style={{height:'100%',width:'100%',resizeMode:'stretch',}} />
        <View>
              <View>
                  <Text></Text>
                  <Text></Text>
                  <Text></Text>
              </View>
              <View>
                  <Text></Text>
                  <Text></Text>
                  <Text></Text>
              </View>
        </View>
    {/* <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly',marginRight:'10%'}}>
 
    </View> */}
    </View>
 </View>

    );
    }
}

const styles=EStyleSheet.create({
   text1:{
      fontSize:'2rem',
      fontWeight: 'bold',
      fontFamily: 'raleway',
      position:'absolute',
      color:'#FFFFFF',
      marginTop:height>810?'9rem':'7rem',
      marginLeft:'2rem',
      
   },
   text2:{
    fontSize:'2rem',
    fontWeight: 'bold',
    fontFamily: 'raleway',
    position:'absolute',
    color:'#FFFFFF',
    marginTop:height>810?'11rem':'9rem',
    marginLeft:'2rem'
   },
   text3:{
    fontSize:'2rem',
    fontWeight: 'bold',
    fontFamily: 'Blue Liquid Bold',
    position:'absolute',
    color:'#3D85C6',
    marginTop:'1rem',
    marginLeft:'1.8rem'
   },
   text4:{
    fontWeight:'bold',
    fontFamily:'raleway',
    fontSize:'0.8rem'
    
   },
   text5:{
    color:'gray',
    fontFamily:'raleway',
    marginVertical: '0.2rem',
    fontSize:'0.8rem'
   },
   text6:{
    color:'gray',
    fontFamily:'raleway',
    marginVertical: '0.1rem',
    fontSize:'0.7rem'
   },

   imageView:{
    width:'3rem',
    height:'3rem',
    borderRadius:'1.5rem',
    backgroundColor:'black',
    marginTop:'0.4rem',
    marginLeft:'2.7rem',
    shadowColor:'gray',
    shadowOffset: {width:2,height:2},
    shadowOpacity: 1,
    shadowRadius:2,

   },
   textView:{
     marginRight:'6rem',
     marginTop:'0.5rem'

   },
   shareIcon:{
    width:'35%',
    height:'35%',
    resizeMode:'contain',
    marginTop:'2rem',
    marginLeft:'3.5rem'
    

  },
   icon:{
    position:'absolute',
    height:'30%',
    width:'30%',
    marginLeft:'2rem',
    marginTop:'2.5rem',
    resizeMode:'contain',
    
   // position:'absolute'
   },
   icon2:{
    position:'absolute',
    height:'30%',
    width:'30%',
    marginLeft:'18rem',
    marginTop:'2.5rem',
    resizeMode:'contain',
   // position:'absolute'
   },

   
})

export default Home;