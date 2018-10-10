import React from 'react';
import{ StyleSheet,View,TextInput,TouchableOpacity,Text,StatusBar } from 'react-native';

export class LoginForm extends React.Component{
    render(){
        return(           
                <View style={styles.container}>
                    <StatusBar
                            backgroundColor="red"
                            barStyle="light-content"
                        />
                    <TextInput style={styles.input} placeholder="Username or email"
                        placeholderTextColor="rgb(255,255,255,0.7)" 
                        returnKeyType="next" 
                        onSubmitEditing={()=>this.passwordInput.focus}
                        keyboardType="email-address"
                        autoCapitalize="none" 
                        autoCorrect={true}>
                    </TextInput>
                    <TextInput style={styles.input} placeholder="Password"
                        placeholderTextColor="rgb(255,255,255,0.7)" 
                        returnKeyType="go" 
                        secureTextEntry ref={(input)=> this.passwordInput = input}>
                    </TextInput>
                    
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View>            
        );
    }
}

const styles = StyleSheet.create({
       container:{
           padding:20
       },
      input:{
            height:40,
            backGroundColor:'rgb(255,255,255,0.2)',
            marginBottom:15,
            color:'#ffffff',
            paddingHorizontal:10
      },
      buttonContainer:{
            backgroundColor:'#7bed9f',
            paddingVertical:15
      },
      buttonText:{
            textAlign:'center',
            color:'#ffffff',
            fontWeight:'700'
      }
});