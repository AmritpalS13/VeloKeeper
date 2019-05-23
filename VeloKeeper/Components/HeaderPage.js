import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';


/*The following is the header page, it's going to contain no inputs
    for the user. */

export default class HeaderPage extends Component {
    render() {
        return (
          <View style={headerStyle.container}>
            <Image source={require('./logo.png')} style={{width:300, height:150}} />
          </View>
        );
    }
}

const headerStyle = StyleSheet.create({
    container: {
        padding:5,
        alignItems:'center',
        backgroundColor:'#161514',
        borderBottomColor:'#fdb722',
        borderBottomWidth:2,
    },
})