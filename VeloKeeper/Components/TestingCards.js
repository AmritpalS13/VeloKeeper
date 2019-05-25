import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, Alert} from 'react-native';



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
export default class TestingCards extends Component {
    buttonAction = () => {
        Alert.alert(this.state.value);
    }
    render() {
        console.log(this.props);
        return (
            <View>
                {/* {this.props.data.map(
                    (userInformation) => {
                        return(
                            <View style={playerCardsStyle.container}>
                                <Text style={{color:'white', textAlign:'left'}}>Name : </Text>
                                <Text style={{color:'white'}}>Bike Number : </Text>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <Text style={{color:'white', paddingBottom:10}}>Prediction : </Text> 
                                    <Text style={{color:'white', paddingBottom:10}}>Actual:</Text>
                                </View>
                                <Button color='#990000' title="start" onPress={this.buttonAction} />  
                            </View>
                        );
                    }
                )} */}
                                 <View style={playerCardsStyle.container}>
                                <Text style={{color:'white', textAlign:'left'}}>Name : {this.props.name}</Text>
                                <Text style={{color:'white'}}>Bike Number : {this.props.bike}</Text>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <Text style={{color:'white', paddingBottom:10}}>Prediction :{this.props.timeValue} </Text> 
                                    <Text style={{color:'white', paddingBottom:10}}>Actual:</Text>
                                </View>
                                <Button color='#990000' title="start" onPress={this.buttonAction} />  
                            </View>
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