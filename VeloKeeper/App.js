

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, Image, Button, ScrollView, StatusBar, TextInput, Alert} from 'react-native';

//Importing my Components below,
import HeaderPage from './Components/HeaderPage.js'//THe header page. This will load in the top part of the app.
import PlayerCards from './Components/PlayerCards.js'//Player cards this is the cards that contain the user infomatio 
import PlayerManager from './Components/PlayerManager.js' // way to manage the cyclist's playerCards, moer specifically the porps.


export default class App extends Component{
  //The following will be testing the passing of state as a prop to the PlayerCard,
  constructor(props) {
    super(props);
    this.state = {
      keyValue: 1,
      namePlaceHolder:'Enter Name',
      bikePlaceHolder:'Enter bike number',
      timePlaceHolder:'Enter time',
      inputsActive: false,
      nameBuffer: ' ',
      bikeBuffer: ' ',
      timeBuffer: ' ',
      playerArray: [

      ]
    }
  }
  displayInputSwitch = () => {
    this.setState({inputsActive:!(this.state.inputsActive)});
  }
  displayTextForInputs = () => {
    if(this.state.inputsActive) {
      return (
        <View style={inputAreaStyle.inputs}>
          <Text style={{paddingLeft:15, color:'white'}}>Name</Text>
          <Text style={{color:'white'}}>Bike Number</Text>
          <Text style={{paddingLeft:15, color:'white'}}>Prediction</Text> 
        </View>
      );
    }
  }
  displayInputsSection() {
    if(this.state.inputsActive) {
      return (
        <React.Fragment>
          <TextInput 
            placeholderTextColor='white' 
            style={{color:'white', borderWidth:2, borderColor:'grey', borderRadius:75}}
            placeholder={this.state.namePlaceHolder}
            onChangeText={(text) => this.setState({nameBuffer:text})} 
            clearButtonMode='always'
          />
          <TextInput 
            placeholderTextColor='white' 
            style={{color:'white', borderWidth:2, borderColor:'grey', borderRadius:75}}
            placeholder={this.state.bikePlaceHolder}
            onChangeText={(text) => this.setState({bikeBuffer:text})}  
          />
          <TextInput 
            placeholderTextColor='white' 
            style={{color:'white', borderWidth:2, borderColor:'grey', borderRadius:75}}
            placeholder={this.state.timePlaceHolder}
            onChangeText={(text) => this.setState({timeBuffer:text})}  
          />
        </React.Fragment>
      );
    } else {
      return (
        <View>
          <Text>Test</Text>
        </View>
      )
    }
  }
  /*I need to fix the hardcoded key pairs :(*/
  render() {
    showData = () => {
      var tempArray = this.state.playerArray;
      this.setState({keyValue:this.state.keyValue + 1});
      if(this.state.nameBuffer == ' ' || this.state.timeBuffer == ' ') {
        Alert.alert("Please Fill in the inputs!");
      } else {
        tempArray.push({
          id: this.state.keyValue,
          name:this.state.nameBuffer,
          bikeNumber:this.state.bikeBuffer,
          time:this.state.timeBuffer
        });
        this.setState({
          namePlaceHolder: 'Enter Name.',
          bikePlaceHolder: 'Enter bike number.',
          timePlaceHolder: 'Enter time.',
          nameBuffer: ' ',
          bikeBuffer: ' ',
          timeBuffer: ' '
        });
    }
    }
    return (
      <View style={{flex:2,backgroundColor:'#737373'}}>
        <StatusBar backgroundColor='#990000' barStyle='light-content' />
        {/*So the ImageBackground, is going to be one that exist for the 
        entire app, so we must place every Component class between that tag.*/}
        <ImageBackground source={require('./Assets/cf.png')} style={{flex:1}}>
          {/*Below is going to be the header for the app.*/}
          <HeaderPage />
            {/*This is going to be the input  section of the app, where the user can input new cyclist's*/}
            <View style={inputAreaStyle.container}>
              {this.displayTextForInputs()}
              <View style={inputAreaStyle.inputs}>
                  {this.displayInputsSection()}
              </View>
              {/*The button below will submit the adding of a cyclist to the race, and will be added to the array.*/}
              <Button color='rgba(52,52,52,0.8)' onPress={this.displayInputSwitch} title="Input Section" />
              <Button color='#990000' title="Submit"  onPress={showData}/> 
            </View>
          <ScrollView>
            <PlayerManager info={this.state.playerArray}/>
          </ScrollView>

        </ImageBackground>
      </View>
    );
  }
}

//Below is the  styling for the input section of the main interface, to input the cyclist's involved.
const inputAreaStyle = StyleSheet.create({
  container: {
    paddingBottom:8,
    borderBottomWidth:2,
    borderBottomColor:'#fdb722',
    backgroundColor:'#161514',
  },
  inputs: {
    color:'white',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  notShowing: {

  } 
})
