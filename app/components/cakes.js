
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react'
import { ActivityIndicator, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export class Cakes extends Component {

    constructor(props){
        super(props);
        this.state ={
        isLoading: true,
        dataSource: null,
    }
    }

    componentDidMount () {
        return fetch('https://yefepere.com/api/v1/cakes/all')
        .then ((response)  => response.json())
        .then ((responseJson)=> {
            
            this.setState({
                isLoading: false,
                dataSource: responseJson.payload,
            })
        })

        .catch((error) =>{
            console.log(error)
        });
    }
    render()
             {
                
const { navigation } = this.props;
                 
if (this.state.isLoading){
    return (
        <View>
            <ActivityIndicator />
        </View>
    )
} else {

    
        return (
        <View style={{
            padding: 15,
        }}>
            <FlatList showsVerticalScrollIndicator={false}
                  data ={this.state.dataSource}
                  keyExtractor={(item, key) => key}
                  renderItem={({item}) => (
                        <TouchableOpacity onPress={()=>navigation.navigate('ProductDetails')} style={{
                            flexDirection:'row',
                            justifyContent: 'space-between',
                        }}>   
                            <View style={{
                                marginRight: 30,
                                width: 100,
                                height: 100,
                            }}>
                                <Text style={{
                                    width: 100,
                                    height: 80,
                                    backgroundColor: "#999",
                                    alignSelf: "center",
                                    borderRadius: 10,
                                    textAlign: 'center',
                                }}>Product Image</Text>
                            </View>
                            <View style={{
                                width: "100%",
                                height:50,
                            }}>
                            <Text style={{
                                fontSize: 16,
                                fontWeight: 'bold',
                                textTransform: 'capitalize'
                            }}>{item.title}</Text>
                            <Text>{item.details}</Text>
                            <Text style={{
                                color: '#ff8000',
                                fontSize: 16,
                                fontWeight: 'bold'
                            }}>{item.price}</Text>
                            </View>
                        </TouchableOpacity>   
                  )}
                  />

        </View>
        
        )

    return (
        
        <View style={{
            padding: 20, 
            width: "100%"
        }}>
        {payload}
        </View>
        
    )
    }
}

}

//export default Cakes;
export default function(props) {
    const navigation = useNavigation();
  
    return <Cakes {...props} navigation={navigation} />;
  }