import React from 'react';
import { StyleSheet,Text,View } from 'react-native';
import { Header} from '../Sections/Header.js'

export class Home extends React.Component{
    render() {
        return (
                <View>
                    <Header message="Login User"/>
                    <Text > Hi Test app</Text>
                    <Text > I am new to react native</Text>
                    <Text > Can i do this?</Text>                                       
                </View>
        );
    }
}

