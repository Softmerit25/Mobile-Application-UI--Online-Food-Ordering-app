import React, {useLayoutEffect } from 'react'
import { StyleSheet, Text, View , TouchableOpacity, ScrollView, } from 'react-native'
import * as Linking from 'expo-linking';
import {Icon, Card }from 'react-native-elements'


const Support = ({navigation}) => {
    useLayoutEffect(()=>{
        navigation.setOptions({
            title:"Support",
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
        <ScrollView>
            <View style={{
                flex:1, 
                marginTop: 30,
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    alignSelf: 'center'
                }}>Frequently Asked Questions</Text>
                <View style={{
                    padding: 20,
                }}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 16,
                }}>Yefepere offers same-day cake delivery service to various locations in Nigeria. We are delighted to answer all your enquiries, send any further questions to <Text style={{fontWeight:'bold'}}>(234) 903-623-3714.</Text></Text>
                </View>
                <Card>
                <Card.Title style={{
                    backgroundColor:'#000',
                    padding: 5,
                }}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 16,
                    }}>How long does it take to deliver cakes or gift items?</Text>
                </Card.Title>

                <Card.Divider />
                    <Text style={{
                        fontSize: 14,
                    }}>Once orders are placed and payments have been confirmed, we deliver within 5 to 6 hours. Yefepere operates a nationwide delivery system to states in Nigeria including Lagos, Abuja, Port Harcourt etc</Text>
                </Card>

                <Card>
                <Card.Title style={{
                    backgroundColor:'#000',
                    padding: 5,
                }}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 16,
                    }}>How can I order cakes online?</Text>
                </Card.Title>

                <Card.Divider />
                    <Text style={{
                        fontSize: 14,
                    }}>You can place order directly from our app or visit <Text  onPress={()=> Linking.openURL('https://yefepere.com')} style={{color: '#ff8000', fontWeight:'bold'}}> yefepere.com</Text> or send a WhatsApp message to 0903 623 3714. Yefepere operates a nationwide delivery system to states in Nigeria including Lagos, Abuja, Port Harcourt etc</Text>
                </Card>

                <Card>
                <Card.Title style={{
                    backgroundColor:'#000',
                    padding: 5,
                }}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 16,
                    }}>How do I make payments online?</Text>
                </Card.Title>

                <Card.Divider />
                    <Text style={{
                        fontSize: 14,
                    }}>Payments can be made via debit or credit cards, and bank transfers once an order has been placed. You can make your payments before or after the cake has been delivered.</Text>
                </Card>


                <Card>
                <Card.Title style={{
                    backgroundColor:'#000',
                    padding: 5,
                }}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 16,
                    }}>Is cake delivery possible during weekends and holidays?</Text>
                </Card.Title>

                <Card.Divider />
                    <Text style={{
                        fontSize: 14,
                    }}>Yes, you can order cakes online and they will be delivered, even during the weekends and holidays.</Text>
                </Card>

                <Card>
                <Card.Title style={{
                    backgroundColor:'#000',
                    padding: 5,
                }}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 16,
                    }}>Can I place a cake order and get it delivered the same day across states in Nigeria?</Text>
                </Card.Title>

                <Card.Divider />
                    <Text style={{
                        fontSize: 14,
                    }}>Yes, we deliver cakes in and outside states in Nigeria. You can order via any of our platforms, and it will be delivered within 5-6 hours.</Text>
                </Card>

                

                <Card>
                <Card.Title style={{
                    backgroundColor:'#000',
                    padding: 5,
                }}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 16,
                    }}>Do you also deliver customized cakes for surprises?</Text>
                </Card.Title>

                <Card.Divider />
                    <Text style={{
                        fontSize: 14,
                    }}>Yefepere delivers customized cakes that our customers can use for surprises on special occasions like birthdays, proposals, anniversaries etc.</Text>
                </Card>



                <Card>
                <Card.Title style={{
                    backgroundColor:'#000',
                    padding: 5,
                }}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 16,
                    }}>How do I know if the cakes delivered are of good quality?</Text>
                </Card.Title>

                <Card.Divider />
                    <Text style={{
                        fontSize: 14,
                    }}>At Yefepere, we deliver freshly made beautiful and tasty cakes of different flavours, sizes and shapes. Feel free to check our reviews. A piece of cake will convince you.</Text>
                </Card>
            </View>
        </ScrollView>
    )
}

export default Support

const styles = StyleSheet.create({})
