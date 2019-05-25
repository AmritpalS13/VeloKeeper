import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, Alert} from 'react-native';

import PlayerCards from './PlayerCards'
import TestingCards from './TestingCards'
/*The following is the header page, it's going to contain no inputs
    for the user. */

// export default class PlayerCards extends Component {
//     render() {
//         return (
//             <View style={playerCardsStyle.container}>
//                <Text style={{color:'white', textAlign:'left'}}>Name :</Text>
//                <Text style={{color:'white'}}>Bike Number </Text>
//                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
//                <Text style={{color:'white', paddingBottom:10}}>Prediction :</Text> 
//                <Text style={{color:'white', paddingBottom:10}}>Actual:</Text>
//                </View>
//                <Button color='#990000' title="start" />              
//             </View>
//         );
//     }
// }

export default class PlayerManager extends Component {
    render() {
        this.props.info.map((player) => console.log(player.name))
        return (
            <View>
                {this.props.info.map(
                    (information) => {
                        return(
                            <TestingCards key={information.id} name={information.name} bike={information.bikeNumber} timeValue={information.time} /> 
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