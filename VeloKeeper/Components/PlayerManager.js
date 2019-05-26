import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, Alert} from 'react-native';

import PlayerCards from './PlayerCards'

export default class PlayerManager extends Component {
    render() {
        this.props.info.map((player) => console.log(player.name))
        return (
            <View>
                {this.props.info.map(
                    (information) => {
                        return(
                            //Below is a testing compoenent that needs to be changed and adjusted.
                            <PlayerCards key={information.id} name={information.name} bike={information.bikeNumber} timeValue={information.time} /> 
                        );
                    }
                )}
                
            </View>    
        )
    }
}

const playerCardsStyle = StyleSheet.create({
    container: {
        textAlign:'left',
        borderWidth:3,
        borderRadius:25,
        borderColor:'#fdb722',
        padding:15,
        margin:15,
        backgroundColor:'rgba(52,52,52,0.8)',
        // alignItems:'center',
        // justifyContent:'center',
    }
});