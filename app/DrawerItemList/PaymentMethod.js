import React, {useLayoutEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'

import { Icon } from 'react-native-elements'

const PaymentMethod = ({navigation}) => {
    useLayoutEffect(()=>{
        navigation.setOptions({
            title:"Payment Method",
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
        <View style={{flex: 1, padding: 20, }}>
            <Text style={{
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 20,
                textTransform: 'uppercase'
            }}>Payment &amp; Delivery</Text>
            <Text style={{
                fontSize: 16,
                fontWeight: '300',
                textAlign: 'center',
                lineHeight: 25,
            }}>Our payment process is flexible and easy. Customers can pay online for cakes, gifts delivery and other services via bank transfers or with debit or credit cards. Once payment is received, your cake will be delivered within the speculated period of 5-6 hours. Yefepere is your one-stop online shop for cakes and gifts delivery nation-wide. Surprise someone today.</Text>
        <View style={{flex: 2, backgroundColor: '#fff', padding: 10,}}>
            <Text style={{
                marginTop: 20,
                textAlign: 'center',
                textTransform: 'uppercase',
                fontWeight: 'bold'
            }}>Kindly, Upload  your Proof of Payment</Text>
        </View>
        </View>
    )
}

export default PaymentMethod

const styles = StyleSheet.create({})
