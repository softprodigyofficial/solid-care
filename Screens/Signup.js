import React,{Component} from 'react';
import {  AsyncStorage,Dimensions,StatusBar,PickerIOS,TextInput,ScrollView,StyleSheet,ImageBackground,KeyboardAvoidingView,Text,TouchableOpacity, Image, View,Alert} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import SelectInput from 'react-native-select-input-ios';

//import {Dot} from'../Screens/Dot';


let {height, width} = Dimensions.get('window');


const Dot=(props)=>{
    let currentStyle=props.active?Styles.dotActive:Styles.dotInactive;
    return(
        <View style={[Styles.Dot,currentStyle]}>
        </View>
    )
    }
    const Styles=StyleSheet.create({
        Dot:{
            width:8,
            height:8,
            borderRadius:4,
        },
        dotActive:{
            backgroundColor:'#FFFFFF'
        },
        dotInactive:{
            backgroundColor:'gray'
        }
        
        })
class Signup extends React.Component{

constructor(props){
    super(props);
    this.state={
        status:0,
        password:'',
    }
}

next(){
    if(this.state.status==0){
        this.setState({status:1})
        //alert(height)
    }
    else if(this.state.status==1){
        this.setState({status:2})

    }
    else if(this.state.status==2){
        //this.setState({status:0})
    this.props.navigation.navigate("AppStack")
    }
}


render(){
    const options=[{value:0,label:'gender'},{value:1,label:'male'},{value:2,label:'female'}]
    const options2=[{value:0,label:'select a home studio'},{value:1,label:'studio1'},{value:2,label:'studio2'}]
    const year=[{value:0,label:'year'},{value:1,label:'2018'},{value:2,label:'2019'},{value:3,label:'2020'},{value:4,label:'2021'},{value:5,label:'2022'}]
    const month=[{value:0,label:'exp month'},{value:1,label:'jan'},{value:2,label:'feb'},{value:3,label:'march'},{value:4,label:'april'},{value:5,label:'may'},{value:6,label:'june'},{value:7,label:'july'},{value:8,label:'aug'},{value:9,label:'sep'},{value:10,label:'oct'},{value:11,label:'nov'},{value:12,label:'dec'}]
    const Textinputs1= 
<View style={{flex:11 }}>
        <View style={{flex:2,flexDirection:'row',marginHorizontal:'10%'}}>
            <View>
                <Text style={styles.loginText}>Sign up</Text>
            </View>
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly',marginLeft:'30%',marginTop:'10%'}}>
                <Dot active={true}/>
                <Dot/>
                <Dot/>
            </View>
        </View>

        <View style={{flex:7,alignItems:'center',paddingBottom:'30%'}}>
           <View style={styles.inputView}>
               <TextInput style={styles.input} placeholder='first name' placeholderTextColor='#7b8ea8'/>
           </View>
           <View style={styles.inputView}>
               <TextInput style={styles.input} placeholder='last name' placeholderTextColor='#7b8ea8'/>
           </View>
           <View style={styles.inputView}>
              <TextInput style={styles.input} placeholder='email address' placeholderTextColor='#7b8ea8'/>
           </View>
           <View style={styles.PasswordView}>
              <TextInput style={styles.Passwordinput} onChangeText={(text)=>{this.setState({password:text})}} secureTextEntry={true} placeholder='password' placeholderTextColor='#7b8ea8'/>
              <Image source={require('../Images/password.png')} style={{ width:'60%',height:'60%',resizeMode:'contain',top:'1%'}}/>
              {!this.state.password?<Text style={styles.char}>6+ characters </Text>:null}

           </View>
           <View style={styles.PasswordView}>
              <TextInput style={styles.Passwordinput} secureTextEntry={true} placeholder='confirm password' placeholderTextColor='#7b8ea8'/>
              
              <Image source={require('../Images/password.png')} style={{ width:'60%',height:'60%',resizeMode:'contain',top:'1%'}}/>
           </View>
           <View style={styles.halfView}> 
                <View style={styles.halfinput}>
                    <TextInput style={styles.input} placeholder='date of birth' placeholderTextColor='#7b8ea8'/>
                </View>
                <View style={styles.halfpicker}>
                    <SelectInput
                      value ={0}
                      
                      labelStyle={{color:'#7b8ea8'}}
                      options={options}
                      style={{}}
                    />
                <Image source={require('../Images/cross.png')} style={styles.icon}/>

                </View>
           </View>
           <TouchableOpacity style={[styles.loginButton,{}]} onPress={()=>this.next()}>
                <View style={{flex:1,flexDirection:'row',alignItems: 'center',justifyContent:'center'}}>
                   <Text style={styles.loginButtonText}>
                      next step 
                   </Text>
                   <Image source={require('../Images/right-arrow.png')} style={{width:'30%',height:'30%',resizeMode:'contain'}}/>
                </View>
           </TouchableOpacity>
        </View>

</View>
const Textinputs2= 
<View style={{flex:11 }}>
        <View style={{flex:2,flexDirection:'row',marginHorizontal:'10%'}}>
            <View>
                 <Text style={styles.loginText}>Sign up</Text>
            </View>
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly',marginLeft:'30%',marginTop:'10%'}}>
                <Dot />
                <Dot active={true}/>
                <Dot/>
            </View>
        </View>
    <View style={{flex:7,alignItems:'center'}}>
        <View style={styles.inputView}>
                   <SelectInput
                      value ={0}
                      
                      labelStyle={{color:'#7b8ea8'}}
                      options={options2}
                      style={{}}
                    />
        </View>
        <View style={styles.inputView}>
               <TextInput style={styles.input} placeholder='street address' placeholderTextColor='#7b8ea8'/>
        </View>
        <View style={styles.inputView}>
               <TextInput style={styles.input} placeholder='apartment' placeholderTextColor='#7b8ea8'/>
        </View>
        <View style={styles.inputView}>
               <TextInput style={styles.input} placeholder='zip code' placeholderTextColor='#7b8ea8'/>
        </View>
        <View style={styles.inputView}>
               <TextInput style={styles.input} placeholder='cell phone' placeholderTextColor='#7b8ea8'/>
        </View>
        <TouchableOpacity style={[styles.loginButton,{}]} onPress={()=>this.next()}>
                <View style={{flex:1,flexDirection:'row',alignItems: 'center',justifyContent:'center'}}>
                   <Text style={styles.loginButtonText}>
                      next step 
                   </Text>
                   <Image source={require('../Images/right-arrow.png')} style={{width:'30%',height:'30%',resizeMode:'contain'}}/>
                </View>
           </TouchableOpacity>

    </View>
    <View style={{flex:1,marginVertical:'10%'}}>

</View>
</View>
const Textinputs3= 
<View style={{flex:11 }}>
<View style={{flex:2,flexDirection:'row',marginHorizontal:'10%'}}>
  <View>
    <Text style={styles.loginText}>Sign up</Text>
  </View>
    <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly',marginLeft:'30%',marginTop:'10%'}}>
    <Dot/>
    <Dot/>
    <Dot active={true}/>
    </View>
</View>
    <View style={{flex:7,alignItems:'center'}}>
    <View style={styles.inputView}>
        <TextInput style={styles.input} placeholder='credit card number' placeholderTextColor='#7b8ea8'/>
    </View>
    <View style={styles.halfView}> 
           <View style={styles.halfpicker}>
                    <SelectInput
                      value ={0}
                      
                      labelStyle={{color:'#7b8ea8'}}
                      options={month}
                      style={{}}
                    />
                </View>
            <View style={styles.halfpicker}>
                    <SelectInput
                      value ={0}
                      
                      labelStyle={{color:'#7b8ea8'}}
                      options={year}
                      style={{}}
                    />
            </View>
    </View>
    <View style={styles.inputView}>
        <TextInput style={styles.input} placeholder='ccid' placeholderTextColor='#7b8ea8'/>
    </View>
    <TouchableOpacity style={styles.loginButton} onPress={()=>this.next()}>
    {/* <View style={{flex:1,flexDirection:'row',alignItems: 'center',justifyContent:'center'}}> */}
        <Text style={[styles.loginButtonText2]}>
            complete signup
        </Text>
     
      {/* <Image source={require('../Images/right-arrow.png')} style={{ width:'30%',height:'30%',resizeMode:'contain'}}/> */}
    {/* </View> */}
    </TouchableOpacity>

</View>
<View style={{flex:1,marginVertical:'10%'}}>

</View>
</View>
    
return(
<KeyboardAvoidingView behavior={"padding"} enabled  style={{flexGrow:1,height:height}} >
    <StatusBar barStyle="light-content" />
    
    <ScrollView style={{flex:1}} keyboardShouldPersistTaps={"always"}>

    <ImageBackground source={require('../Images/login-signup-background.png')} style={styles.backroundImage}> 
            
        <View style={{flex:1}}>
            <TouchableOpacity style={{flex:2}} onPress={()=>this.props.navigation.goBack()}>
            <Image source={require('../Images/cross.png')} style={styles.crossIcon}/>
            </TouchableOpacity>
           
              {this.state.status==0?Textinputs1:this.state.status==1?Textinputs2:Textinputs3}
               
            <View style={{bottom:10 }}>
                <View style={styles.BottomView}>
                  <Text style={styles.BottomText}>By creating an account you agree to our</Text>
                    <View style={{flexDirection:'row'}}> 
                    <Text style={styles.BottomText1}>Terms of Service</Text>
                    <Text style={styles.BottomText}>, </Text>
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
    icon:{
        left:'3.5rem',top:'1.5rem',position:'absolute',height:'100%',width:'100%',resizeMode:'contain'
    },
    backroundImage:{
       width:width,
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
      //  backgroundColor:'white'
    },
    loginText:{
        flex:1,
       color:'#FFFFFF',
       fontFamily: 'Blue Liquid Bold',
       fontSize:'2rem',
       //textAlign:'center'
    },
    inputView:{
      width:'80%',
      borderBottomColor:'#7b8ea8',
      borderBottomWidth:1,
      paddingTop:'1.5rem',
      paddingBottom: '0.5rem',
      paddingLeft: '0.3rem',
    },
    input:{
      color:'#7b8ea8',
      //fontSize:'0.8rem'
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
      height:'12%',
      margin:'2rem',
      backgroundColor:'#3D85C6',
      //flexDirection:'row',
      justifyContent:'center',
      borderRadius:2

    },
    loginButtonText:{
      color:"#FFFFFF",
      fontSize:'1rem',
     // alignItems: 'center',
      fontFamily:'raleway',
      fontWeight: 'bold',
     // marginTop:'5%',
      left:'50%'
    },
    loginButtonText2:{
        color:"#FFFFFF",
        fontSize:'1rem',
        textAlign: 'center',
        fontFamily:'raleway',
        fontWeight: 'bold',
       // marginTop:'5%',
        //left:'50%'
      },
      char:{
          fontSize:'0.7rem',
        position:'absolute',
        color:'#3C587C',
        top:'1.5rem',
        left:'9.5rem',
      },
    halfView:{
        //flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'80%',
    },
    halfinput:{
        width:'47%',
        borderBottomColor:'#7b8ea8',
        borderBottomWidth:1,
        paddingTop:'1.5rem',
        paddingBottom: '0.5rem',
        paddingLeft: '0.3rem',
    },
    halfpicker:{
        width:'47%',
        borderBottomColor:'#7b8ea8',
        borderBottomWidth:1,
        paddingTop:'1.5rem',
        paddingBottom: '0.5rem',
        paddingLeft: '0.3rem',
    }

})

export default Signup;