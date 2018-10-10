import React from 'react';
import{ StyleSheet,View,Text,Image,KeyboardAvoidingView} from 'react-native';
import{ LoginForm } from '../Views/LoginForm.js';

export class Login extends React.Component{
    render(){
        return(
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <View style={styles.container}>
                    <View style={styles.logoContainer}>
                            <Image 
                                source={require('../../assets/P1.png')}
                                style={styles.logoimg}
                            />
                            <Text style={styles.title}>This is demo app.This is for demo purpose.</Text>                       
                    </View>
                    {/* <View> */}
                        <LoginForm/>
                    {/* </View> */}
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
       container:{
            flex:1,
            backgroundColor:'#ffffff',
            paddingTop:40
       },
       logoContainer:{
            alignItems:'center',
            flex:1, 
            justifyContent:'center'
       },
       logoimg:{
            width:100,
            height:100
       },
       title:{
           width:250,
           textAlign:'center',
           marginTop:5,
           color:'#ffffff'
       }
});