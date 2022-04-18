import React,{ useLayoutEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { Card } from 'react-native-elements'

import { Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'

const AboutUs = ({navigation}) => {
    useLayoutEffect(()=>{
        navigation.setOptions({
            title:"Who We Are",
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
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex: 1,}}>
             <Card>
                <Text style={{fontSize: 16, marginBottom: 10, lineHeight: 25,}}>Yefepere is Nigeria’s largest on-demand online cake shop, with services reaching every local government area and packages delivered within 5-6 hours from the time of order.</Text>
                <Text style={{fontSize: 16, marginBottom: 10, lineHeight: 25,}}>Established in 2019 after trying to solve the problem of getting same day cake delivery outside Lagos. Bakeries at that time will require you to pre-order 2-3 days before time, not to mention the cost of delivery to locations outside Lagos.</Text>
                <Text style={{fontSize: 16, marginBottom: 10, lineHeight: 25,}}>Yefepere initially launched its services in Lagos, Abuja and Port-Harcourt. Upon receiving many satisfactory messages and reviews from customers, “checkout our wall of fame” the company decided to launch its nation-wide on-demand cake shop in April 2020 amidst the lock down in the two major cities, Lagos & Abuja - as a result of the global pandemic.</Text>
                <Text style={{fontSize: 16, marginBottom: 10,lineHeight: 25, }}>Yefepere makes the entire process of ordering cakes and gift items a cinch. Customers can order via phone calls, WhatsApp and through our website. So far WhatsApp has been the most constructive as customers are updated real-time on their package, from our bakeries to the point of exchange, from the process of selection to making payments - customers can pay with their everyday method with no sign ups required.</Text>
                <Text style={{fontSize: 16, marginBottom: 10, lineHeight: 25,}}>We’re very famous for planning and executing surprise packages. We cherish those moments where we see people cry, exhilarated, overwhelmed with joy over gift items from loved ones they never saw coming.</Text>
                <Text style={{fontSize: 16, marginBottom: 10, lineHeight: 25,}}>It’s now our mission to put smiles on the faces of hundreds daily. To us success is achieved when we’ve been able to deliver packages to every home in Nigeria.
                    Yefepere considers every delivery an opportunity to make people happy, as such cannot fail. From the moment we receive and confirm an order, it must be delivered.</Text>

            </Card>

        </View>
        </ScrollView>
    )
}

export default AboutUs

const styles = StyleSheet.create({})
