import React from 'react'
import { StyleSheet, onPress, Text, View, Image, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native'
import * as Animatable from 'react-native-animatable';
import {Icon } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';


const {width, height}= Dimensions.get('screen');

const SplashScreen = ({navigation}) => {
    return (
        <View style={{
          flex: 1,
          width: width,
          backgroundColor: '#333',
        }}>
          <View 
           style={{
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center'

          }}>
         <Animatable.Image 
         animation='bounce'
         source={require('../images/yefeperelogo.png')} 
         resideMode="strech" style={{width:300, height: 70, }} />

          </View>

          <Animatable.View animation='fadeInUpBig' style={{
            flex: 1,
            backgroundColor: '#fff',
            paddingHorizontal: 20,
            paddingVertical: 15,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}>
          <Text style={{
            fontSize: 30,
            fontWeight: 'bold',
          }}>Extend love from a distance, anytime.</Text>
          <Text style={{
            fontSize: 16,
            fontWeight: '300',
            letterSpacing: 1,
          }}>Send birthday cakes to Family &amp; Friends anywhere in Nigeria.</Text>
          
          <TouchableOpacity  onPress={()=>navigation.navigate('SigninScreen')} style={{
            alignItems: 'flex-end',
            marginTop: 50,
          }}>
           <View style={{
             alignItems: 'center',
             justifyContent: 'center',
             width: '50%',
             height: 50,
             backgroundColor: '#ff8000',
             borderRadius: 10,
             flexDirection: 'row'
            }}>
             <Text style={{
               fontSize: 20,
               color: '#fff',
             }}>Get Started</Text>
             <Icon name="navigate-next" type="MaterialIcon"
             size={25} color="#fff" />
          </View>     
          </TouchableOpacity>
          </Animatable.View>
         <StatusBar style='light' />
        </View>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({})
