import React from 'react'
import SplashScreen from '../screens/SplashScreen'
import ShopScreen from '../screens/ShopScreen'
import CreateAccount from '../components/CreateAccount'
import SigninScreen from '../screens/SigninScreen'
import SignupScreen from '../screens/SignupScreen'
import ProductDetails from '../screens/ProductDetails'
import WelcomeScreen from '../screens/WelcomeScreen'

import { Icon } from 'react-native-elements';

import { createStackNavigator } from '@react-navigation/stack'


const Stack = createStackNavigator();

const MainStackNavigator = (()=>{
    return (
        <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}}/>
        <Stack.Screen name="SignupScreen" component={SignupScreen} options={{headerShown: false}} />
        <Stack.Screen name="SigninScreen" component={SigninScreen} options={{headerShown: false}}/>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="ShopScreen" component={ShopScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
         </Stack.Navigator>
    )
    
})

export default MainStackNavigator;
