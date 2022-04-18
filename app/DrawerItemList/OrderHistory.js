import React, {useLayoutEffect} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { Icon } from 'react-native-elements'

const OrderHistory = ({navigation}) => {
    useLayoutEffect(()=>{
        navigation.setOptions({
            title:"Order History",
            headerStyle: {backgroundColor: '#fff', elevation: 0,},
            headerTitleStyle: {color: '#000', fontSize: 20,},
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
                    flexDirection: 'row',
                    marginRight: 20,
                }}>
                   <TouchableOpacity>
                        <Icon style={{
                            marginRight:10, 
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
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Your Orders</Text>
        </View>
    )
}

export default OrderHistory

const styles = StyleSheet.create({})
