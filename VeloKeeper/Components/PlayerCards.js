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
            
            //Testing stuff,
            testTimeStart:0,
            testTimeFinish:0,
            testScore:0,

            //The state variables below will deal with runtime actions.
            isRunning:false,//toggle for if they're racing or not.
            startTime: 0,
            finishTime: 0,
            score: 0,
        }
    }
    testScoreMethods() {
        let testUserScore = 0;
        let testStart = this.state.testTimeStart;
        let testFinish = this.state.testTimeFinish;
        testUserScore = testFinish - testStart;
        this.setState({testScore:testUserScore});
    }
    calculateScore() {
        let userScore = 0;
        let finish = Date.parse(this.state.finishTime);
        let start = Date.parse(this.state.startTime);
        userScore = finish - start;
        userScore = Math.floor(userScore/1000);
        this.setState({score:userScore});
        Alert.alert("Score has been logged");
    }
    //This method below will deal with  the state of each cyclist's race time and start!
    buttonAction = () => {
        if(this.state.isRunning) {
            //If the user is done the race, this block of code will execute.
            let time = new Date().toLocaleTimeString();
            let testTimeFin = new Date().toLocaleTimeString();
            // testTimeFin = Date.parse(testTimeFin);
            this.setState({testTimeFinish:testTimeFin});
            this.setState({finishTime:time});
            // this.calculateScore();
            // this.testScoreMethods(); 
         } else if(!(this.state.isRunning)) {
             let start = new Date().toLocaleTimeString();
             let testStart = new Date().toLocaleTimeString();
            //  testStart = Date.parse(testStart);
             this.setState({testTimeStart:testStart});
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
    render() {
        console.log(this.props);
        return (
            <View>
                <View style={playerCardsStyle.container}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{color:'white', textAlign:'left', fontSize:20}}>{this.props.name}</Text>
                        <Text style={{color:'white'}}>TestFin: {this.state.testTimeFinish}</Text> 
                    </View>
                    <Text style={{color:'white',fontSize:20}}>N/A</Text>
                    <Text style={{color:'white'}}>Bike Number : {this.props.bike}</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{color:'white', paddingBottom:10}}>Prediction :{this.props.timeValue} </Text> 
                        <Text style={{color:'white', paddingBottom:10}}>Start time: {this.state.testTimeStart}</Text>
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