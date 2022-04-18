import { StatusBar } from 'expo-status-bar';
import React, {useLayoutEffect} from 'react'
import { StyleSheet, ScrollView, TouchableOpacity, Text, View} from 'react-native'
import { Icon, Card } from 'react-native-elements';


//importing the cakes api
import Cakes from '../components/cakes';

const ShopScreen = ({navigation}) => {
    useLayoutEffect(()=>{
        navigation.setOptions({
            title:"CAKES",
            headerStyle: {backgroundColor: '#fff', elevation: 0,},
            headerTitleStyle: {color: '#888', fontSize: 20,},
            headerTintColor: 'black',
            headerTitleAlign: 'center',
            headerLeft: ()=>(
                <View style={{
                    marginLeft: 20,
                }}>
                    <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                    <Icon name="align-left" type="feather" size={30} color="#ff8000" />
                    </TouchableOpacity>
                </View>
            ),
            headerRight: ()=> (
                <View style={{
                    
                }}>

                    <TouchableOpacity>
                        <Icon style={{
                            marginRight:25, 
                            borderWidth: 1, 
                            padding: 10, 
                            borderRadius: 80/2, 
                            borderColor: "#ff8000", 
                            backgroundColor: "#333"
                            }}name="person" type="MaterialIcons" size={20} color="#ff8000" />
                    </TouchableOpacity>
                </View>
            )
        })

    }, [])

    return (
        
        
    <View style={{
        backgroundColor: '#fff'
    }}>
        <Text style={{
            alignSelf: 'center',
            fontSize: 14,
            marginTop: 30,
            letterSpacing: 2,
            color: '#000'
        }}>Shop by Category</Text>
        <Card>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
            }}>
            <TouchableOpacity>
                <Text>All</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Kids</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Adults</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Weddings</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Novelty</Text>
            </TouchableOpacity>
            </View>
            
        </Card>
        <View>
        
        </View>
    
        <Cakes />
    <StatusBar style='auto' />
    </View>
    
    
    )
}

export default ShopScreen

const styles = StyleSheet.create({})
