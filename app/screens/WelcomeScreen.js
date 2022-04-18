import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions,TouchableOpacity, Image, Alert } from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import { Icon } from 'react-native-elements';


//import * as Google from 'expo-auth-session/providers/google';
//import * as Google from 'expo-google-app-auth';

const {width, height} =Dimensions.get('screen');

const WelcomeScreen = ({navigation, route}) => {
    const {name, email, photoUrl } = route.params;


    /*const clearLogin=  async () =>{

       const clearLogin = async () => {
            try {
                if (type ==='success') {
                    await GoogleSignIn.signOutAsync();
                    navigation.navigate('SplashScreen');
                }else{
                    alert('Check your network!')
                }
            } catch (e){
                console.log(e);
            }
        };
*/


  return (
    <View style={{
        flex: 1,
        width: width,
        backgroundColor: '#333',
      }}>
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
            fontWeight: 'bold'
        }}>Hi Buddy!</Text>
      </View>
      
      <Animatable.View animation='fadeInUpBig' style={{
        flex: 2,
        backgroundColor: '#fff',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
      }}>
        <View style={{
            justifyContent:"flex-start",
            alignItems: "flex-start",
            marginTop: 20,
        }}>
        <Text style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 10,
        }}>Your Details:</Text>
          <Text style={{
              fontSize: 20,
              marginBottom: 10,
          }}>Full Name:  {name}</Text>
          <Text style={{
              fontSize: 20,
          }}>Email: {email}</Text>
          <Image source={{uri: photoUrl }} />
      </View>
   
      <TouchableOpacity onPress={()=>navigation.navigate('ShopScreen')}>
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 80,
            flexDirection: 'row',
            backgroundColor: '#ff8000',
            
        }}>
            <Icon color="#fff" name="add-shopping-cart" type="MaterialIcons"  size={25}/>
            <Text style={{
                fontSize: 16,
                fontWeight: 'normal',
                paddingHorizontal: 10,
                paddingVertical: 20,
                color: '#fff',
                textTransform: 'uppercase'
            }}>Order Cakes</Text>
            
        </View>
    </TouchableOpacity>


   {/* logOut button */}
    <TouchableOpacity onPress={()=>navigation.navigate('SplashScreen')}>
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 100,
            flexDirection: 'row',
            backgroundColor: '#000',
            
        }}>
            <Icon color="#fff" name="input" type="MaterialIcons"  size={25}/>
            <Text style={{
                fontSize: 16,
                fontWeight: 'normal',
                paddingHorizontal: 10,
                paddingVertical: 20,
                color: '#fff'
            }}>Sign Out</Text>
            
        </View>
    </TouchableOpacity>
      </Animatable.View>
<StatusBar style="light" />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
