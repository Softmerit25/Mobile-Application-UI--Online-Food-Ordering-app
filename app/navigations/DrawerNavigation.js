import React from 'react';

import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import MainStackNavigator from '../navigations/StackNavigation'
import { SafeAreaView, Text, View, Image} from 'react-native';
import { Icon } from 'react-native-elements'

import Support from '../DrawerItemList/Support';
import PaymentMethod from '../DrawerItemList/PaymentMethod';
import OrderHistory from '../DrawerItemList/OrderHistory';
import LogOut from '../DrawerItemList/LogOut';
import AboutUs from '../DrawerItemList/AboutUs';

const Drawer = createDrawerNavigator();


const DrawerNavigator = () => { 
    return (
        <Drawer.Navigator 
            initialRouteName="Home"
            drawerContent = {(props) =>{
                return (
                <SafeAreaView>
                    <View style={{justifyContent: 'center', alignItems: 'center',}}>
                       <Image source={ require('../images/yefeperelogo.png') }
                       style={{width: "95%", height: "30%", marginTop: 50}} />
                    </View>
                    <DrawerItemList {...props} />
                </SafeAreaView>
                
                )
            }}
            screenOptions={{
                drawerStyle: {
                  backgroundColor: '#333',
                
                },
                drawerLabelStyle:{
                    color: '#fff',
                },
                drawerItemStyle:{
                    backgroundColor: '#333',
                },
               
              }}
        >
            <Drawer.Screen name="Home" component={MainStackNavigator} 
                    options={{headerShown:false, drawerLabel: 'Shop By Category',
                    drawerIcon:()=> (
                    <Icon name="folder1"  type="antdesign" size={20}  color="#fff"/>
                )
            }} 
            />
            <Drawer.Screen name="AboutUs" component={AboutUs} 
                    options={{ drawerLabel: 'About Us',
                    drawerIcon:()=> (
                    <Icon name="profile"  type="antdesign" size={20}  color="#fff"/>
                )
            }} 
            />


           <Drawer.Screen name="PaymentMethod" component={PaymentMethod} 
                    options={{ drawerLabel: 'Upload Proof of Payment',
                    drawerIcon:()=> (
                        <Icon name="call-to-action"  type="MaterialIcons" size={20}  color="#fff"/>
                        )
                    }} 
            />

            <Drawer.Screen name="Order HIstory" component={OrderHistory} 
                    options={{ drawerLabel: 'Order History',
                    drawerIcon:()=> (
                        <Icon name="chrome-reader-mode"  type="MaterialIcons" size={20}  color="#fff"/>
                        )
                    }} 
            />


            <Drawer.Screen name="Support" component={Support} 
                    options={{ drawerLabel: 'Support',
                    drawerIcon:()=> (
                    <Icon name="support-agent"  type="MaterialIcons" size={20}  color="#fff"/>
                )
            }} 
            />


            <Drawer.Screen name="Logout" component={LogOut} 
                    options={{ headerShown: false, drawerLabel: 'Log Out',
                    drawerIcon:()=> (
                    <Icon name="input"  type="MaterialIcons" size={20}  color="#fff"/>
                )
            }} 
            />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;