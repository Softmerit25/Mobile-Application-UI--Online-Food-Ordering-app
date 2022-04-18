import React from 'react'
import { TextInput,  Keyboard, StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Dimensions, Alert} from 'react-native'
import { Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

//import * as Google from 'expo-auth-session/providers/google';
import * as Google from 'expo-google-app-auth';
import { StatusBar } from 'expo-status-bar';

const {width, height}= Dimensions.get('screen');


const SigninScreen = ({navigation}) => {

    const handleGoogleSignin = async () =>{
        const config ={
            androidClientId:'768015130946-7ag3os4g0lsitdp51ua3h8c8a1jaddil.apps.googleusercontent.com',
            iosClientId:'768015130946-gth1f56ff6a4o2nasa0s0fu6v806bt0l.apps.googleusercontent.com',
            scopes: ["profile", "email"],
            accessToken: '',
        };
       await Google
        .logInAsync(config)
        .then((result) =>{
            const {type, accessToken, user} = result;

            if (type === 'success') {
                const {email, name, photoUrl} = user;
                Alert.alert('login Successful');
                setTimeout(()=> navigation.navigate('WelcomeScreen', {email, name, photoUrl}), 1000)
            } else{
                alert('Permission Denied')
            }
        })
    }



    return (
       
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()} > 
        <View style={{
            flex: 1,
            width: width,
            backgroundColor: '#333',
          }}>
         <View style={{
            marginTop: 40,
            paddingHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Icon name="chevron-left" type="MaterialIcons"  size={25} color="white"/>
        </TouchableOpacity>


        <TouchableOpacity onPress={()=>navigation.navigate('SignupScreen')}>
        <Text style={{color:'white', letterSpacing: 1, fontSize:16,}}>Register</Text>
        </TouchableOpacity>
        </View>
            <View 
           style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-start',
            marginLeft: 20,
          }}>
        
            <Text style={{
                color: '#fff',
                fontSize: 30,
                fontWeight: 'bold',
                alignSelf: 'flex-start'
            }}>Sign In</Text>
            <Text style={{
                fontSize: 16,
                color: 'white',
            }}
            >Welcome to Yefepere</Text>
          </View>
          <Animatable.View animation='fadeInUpBig' style={{
            flex: 3,
            backgroundColor: '#fff',
            paddingHorizontal: 30,
            paddingVertical: 15,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}>
           
          <View >
              <TextInput style={{
                  fontSize:16,
                  paddingHorizontal: 15,
                  paddingVertical: 20,
                  borderRadius: 30,
                  backgroundColor:'#e6e6e6'
              }}
               placeholder='Enter Your Email'
               autoCapitalize='none'
              />

            <TextInput style={{
                  fontSize:16,
                  paddingHorizontal: 15,
                  paddingVertical: 20,
                  borderRadius: 80/2,
                  backgroundColor:'#e6e6e6',
                  marginTop: 15,
                  
              }}
               placeholder='Enter Your Password'
               autoCapitalize='none'
               secureTextEntry
              />
          </View>
           <View style={{
               alignItems:"flex-end",
               marginTop: 10,
           }}>
               <Text style={{fontSize: 16, opacity:0.5}}>Forgot Password?</Text>
           </View>

           <View style={{
               marginTop: 30,
               alignItems: 'center',
               justifyContent: 'center',
               backgroundColor: '#000',
               paddingHorizontal: 10,
               paddingVertical: 20,
               borderRadius: 30,
           }}>
               <Text style={{color: 'white', fontSize: 20, fontWeight:'bold', letterSpacing:1,}}>Sign In</Text>
           </View>
        <TouchableOpacity onPress={handleGoogleSignin}>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 30,
                flexDirection: 'row',
                backgroundColor: '#ff8000',
                borderRadius: 30,
                
            }}>
                <Icon color="#fff" name="google-" type="entypo"  size={25}/>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'normal',
                    paddingHorizontal: 10,
                    paddingVertical: 20,
                    color: '#fff'
                }}>Sign in with Google</Text>
                
            </View>
        </TouchableOpacity>

        <Text style={{
          marginTop: 20,
          fontSize: 14,
          fontWeight: '300',
          color: '#888',
          alignSelf: 'center'
        }}>By proceeding I accept the yefepere Services and confirm that I have read <Text style={{textDecorationLine:'underline', color: '#ff8000'}}>Privacy Policy</Text></Text>
          </Animatable.View>
        <StatusBar style='light' />
        </View>
        </TouchableWithoutFeedback>
       
    );
}

export default SigninScreen;


const styles = StyleSheet.create({})
