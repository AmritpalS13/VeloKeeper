import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, Alert} from 'react-native';

import PlayerCards from './PlayerCards'

export default class PlayerManager extends Component {
    render() {
        return (
            /*The code below will take each player object that was in App.js and pass each person as a prop to the PlyaerCards class component
                to generate each playercaed with each unique data for the cards! */
            <View>
                {this.props.info.map(
                    (information) => {
                        return(
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
    }
});