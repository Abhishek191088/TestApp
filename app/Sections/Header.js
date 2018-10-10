import React from 'react';
import { StyleSheet,Text,View} from 'react-native';

export class Header extends React.Component{
    constructor(prop){
        super(prop);
        this.state = {isLoggedIn:false};
    }

    toggleUser=()=>{
        this.setState(previousState=>{
            return{isLoggedIn:!previousState.isLoggedIn}
        });
    }

    render(){
        let display = this.state.isLoggedIn ? "Sample User" : this.props.message;
        return(
            <View style={styles.headStyle}>
                <Text 
                  style={styles.headerText} 
                  onPress={this.toggleUser}>{display}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerText:{
        textAlign:'right',
        color:'#ffffff',
        fontSize: 20
    },
    headStyle:{
        paddingTop:30, 
        paddingBottom:10,      
        padddingRight:20,
        backgroundColor: '#35605a'                
    }
});
