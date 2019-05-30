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
            this.setState({finishTime:finish});
            this.setState({finishedRace:true});
            
         }else if(!(this.state.isRunning)) {
            let start = new Date().toLocaleTimeString();
            this.setState({startTime:start});
            
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
    determineRace() {
        if(this.state.finishedRace) {
            var userStart = this.state.startTime;
            userStart = userStart.split(':');
            userStart = userStart.join('');
            userStart = parseInt(userStart);
            var userFinish = this.state.finishTime;
            userFinish = userFinish.split(':');
            userFinish = userFinish.join('');
            userFinish = parseInt(userFinish);
            var userScore = userFinish - userStart;
            console.log("Data from race ", userStart + ' ' + userFinish);
            console.log('Difereint in time = ', userFinish - userStart);
            // this.setState({score: userScore});
        } else {
            console.log('not done');
        }
    }

    render() {
        console.log(this.state.finishedRace);
        var userScore = 0;
        return (
            <View>
                <View style={playerCardsStyle.container}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{color:'white', textAlign:'left', fontSize:20}}>{this.props.name}</Text>
                        <Text style={{color:'white'}}>TestFin: {this.state.finishTime}</Text>
                    </View>
                    <Text style={{color:'white',fontSize:20}}>{this.state.score}</Text>
                    <Text style={{color:'white'}}>Bike Number : {this.props.bike}</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{color:'white', paddingBottom:10}}>Prediction :{this.props.timeValue} </Text>
                        <Text style={{color:'white', paddingBottom:10}}>Start time: {this.state.startTime}</Text>
                    </View>
                    {/*Rendering the buton*/}
                    {this.renderButtonMode()}
                    {this.determineRace()}
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
