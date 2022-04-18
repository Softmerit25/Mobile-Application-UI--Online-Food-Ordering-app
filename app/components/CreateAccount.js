import  React, {useLayoutEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native'
import { WebView } from 'react-native-webview';

import { Icon } from 'react-native-elements';

export default function CreatAccount({navigation}) {
    useLayoutEffect(()=>{
        navigation.setOptions({
            title:"Create an Account",
            headerStyle: {backgroundColor: '#fff', },
            headerTitleStyle: {color: '#000', fontSize: 20,},
            headerTintColor: 'black',
            headerTitleAlign: 'center',
            headerLeft: ()=>(
                <View style={{
                    marginLeft: 20,
                }}>
                    <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                    <Icon name="keyboard-arrow-left" type="MaterialIcons" size={30} color="#ff8000" />
                    </TouchableOpacity>
                </View>
            )
        })

    }, [navigation])
  return (
    <WebView 
      style={styles.container}
      source={{ uri: 'https://accounts.google.com/signup/v2/webcreateaccount?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=SignUp' }}
    />
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})