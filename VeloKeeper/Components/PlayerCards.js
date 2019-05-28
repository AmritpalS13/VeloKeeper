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

            //The state variables below will deal with runtime actions.
            isRunning:false,//toggle for if they're racing or not.
            finishedRace: false,
            startTime: 0,
            finishTime: 0,
            score: 0,
        }
    }

    //This method below will deal with  the state of each cyclist's race time and start!
    buttonAction = () => {
        if(this.state.isRunning) {
            //If the user is done the race, this block of code will execute.
            let finish = new Date().toLocaleTimeString();
            finish = finish.split(':');
            finish = finish.join('');
            finish = parseInt(finish);
            this.setState({finishTime:finish});
            console.log(this.state.finishTime);
         }else if(!(this.state.isRunning)) {
            let start = new Date().toLocaleTimeString();
            start = start.split(':');
            start = start.join('');
            start = parseInt(start);
            this.setState({startTime:start});
            console.log(this.state.startTime);
         }
        this.setState({isRunning:!(this.state.isRunning)});
    }
    //THe method below returns a special type of button depending on the state of the race.
    renderButtonMode() {
        if(!(this.state.isRunning)) {
            return  <Button color='#990000' title="start" onPress={this.buttonAction} />
        } else {
            return  <Button color='#fdb722' title="finish" onPress={this.buttonAction} />
        }
    }
    render() {
        
        return (
            <View>
                <View style={playerCardsStyle.container}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{color:'white', textAlign:'left', fontSize:20}}>{this.props.name}</Text>
                        <Text style={{color:'white'}}>TestFin: {this.state.finishTime}</Text>
                    </View>
                    <Text style={{color:'white',fontSize:20}}>N/A</Text>
                    <Text style={{color:'white'}}>Bike Number : {this.props.bike}</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{color:'white', paddingBottom:10}}>Prediction :{this.props.timeValue} </Text>
                        <Text style={{color:'white', paddingBottom:10}}>Start time: {this.state.startTime}</Text>
                    </View>
                    {/*Rendering the buton*/}
                    {this.renderButtonMode()}
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
    }
});
