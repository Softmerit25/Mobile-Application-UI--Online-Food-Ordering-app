import React from 'react'
import { TextInput,  Keyboard, StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Dimensions, Alert} from 'react-native'
import { Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

import { StatusBar } from 'expo-status-bar';

const {width, height}= Dimensions.get('screen');


const SignupScreen = ({navigation}) => {

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
            justifyContent: 'space-between',
            alignSelf: 'flex-end'
        }}>
    
            {/*login Text */}
        <TouchableOpacity onPress={()=> navigation.navigate('SigninScreen')}>
        <Text style={{color:'white', letterSpacing: 1, fontSize: 16,}}>Login</Text>
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
            }}>Sign Up</Text>
            <Text style={{
                fontSize: 16,
                color: 'white',
            }}
            >Kindly create an Account for easy shopping</Text>
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
                  backgroundColor:'#e6e6e6',
                  marginBottom: 15,
              }}
               placeholder='Full Name'
               autoCapitalize='none'
              />


              <TextInput style={{
                  fontSize:16,
                  paddingHorizontal: 15,
                  paddingVertical: 20,
                  borderRadius: 30,
                  backgroundColor:'#e6e6e6'
              }}
               placeholder='Email'
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
               placeholder='Password'
               autoCapitalize='none'
               secureTextEntry
              />

            <TextInput style={{
                  fontSize:16,
                  paddingHorizontal: 15,
                  paddingVertical: 20,
                  borderRadius: 80/2,
                  backgroundColor:'#e6e6e6',
                  marginTop: 15,
                  
              }}
               placeholder='Confirm Password'
               autoCapitalize='none'
               secureTextEntry
              />
          </View>
           

           <View style={{
               marginTop: 20,
               alignItems: 'center',
               justifyContent: 'center',
               backgroundColor: '#ff8000',
               paddingHorizontal: 10,
               paddingVertical: 20,
               borderRadius: 30,
           }}>
               <Text style={{color: 'white', fontSize: 20, fontWeight:'bold', letterSpacing:1,}}>Sign Up</Text>
           </View>
        

        <Text style={{
          marginTop: 10,
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

export default SignupScreen;


const styles = StyleSheet.create({})
