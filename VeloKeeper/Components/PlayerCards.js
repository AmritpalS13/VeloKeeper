import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, Alert} from 'react-native';


/*The following file is going to contain the PlayerCards component which deals with each player,
    this is also where the time calculations will occur. */
export default class PlayerCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userKey: this.props.key,
            userName: this.props.name,
            userBikeNumber: this.props.bike,
            userTimePrediction: this.props.timeValue,
            isRunning:true,
        }
    }
    buttonAction = () => {
        this.setState({isRunning:!(this.state.isRunning)});
    }
    renderButtonMode() {
        if(this.state.isRunning) {
            return  <Button color='#990000' title="start" onPress={this.buttonAction} />
        } else {
            return  <Button color='#fdb722' title="finish" onPress={this.buttonAction} />
        }
    }
    render() {
        console.log(this.props);
        return (
            <View>
                <View style={playerCardsStyle.container}>
                    <Text style={{color:'white', textAlign:'left'}}>Name : {this.props.name}</Text>
                    <Text style={{color:'white'}}>Bike Number : {this.props.bike}</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{color:'white', paddingBottom:10}}>Prediction :{this.props.timeValue} </Text> 
                        <Text style={{color:'white', paddingBottom:10}}>Actual:</Text>
                    </View>
                    {this.renderButtonMode()}
                    {/* <Button color='#990000' title="start" onPress={this.buttonAction} />   */}
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