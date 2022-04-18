import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import SigninScreen from './app/screens/SigninScreen';
import SplashScreen from './app/screens/SplashScreen';
import ShopScreen from './app/screens/ShopScreen';
import CreateAccount from './app/components/CreateAccount'


//importing Stack Navigator 
import { NavigationContainer } from '@react-navigation/native';

import DrawerNavigator from './app/navigations/DrawerNavigation';

export default function App() {
  return (
    
    <NavigationContainer>
  
     <DrawerNavigator />
     <StatusBar style='dark' />
  </NavigationContainer> 
        
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
