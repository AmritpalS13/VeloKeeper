/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, Image, Button, ScrollView, StatusBar, TextInput} from 'react-native';

//Importing my Components below,
import HeaderPage from './Components/HeaderPage.js'//THe header page.
import PlayerCards from './Components/PlayerCards.js'//Player cards

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


class CardHandler extends Component {
  render() {
    return (
      <View>
        <PlayerCards />
      </View>
    );
  }
}

export default class App extends Component{
  render() {
    return (
      <View style={{flex:2,backgroundColor:'#737373'}}>
        <StatusBar backgroundColor='#990000' barStyle='light-content' />
        {/*So the ImageBackground, is going to be one that exist for the 
        entire app, so we must place every Component class between that tag.*/}
        <ImageBackground source={require('./Assets/cf.png')} style={{flex:1}}>
          {/*Below is going to be the header for the app.*/}
          <HeaderPage />
            {/*This will be a testing of the input section*/}
            <View style={inputAreaStyle.container}>
              <View style={inputAreaStyle.inputs}>
                <TextInput placeholderTextColor='white' style={{paddingLeft:15}}placeholder="Enter Name" />
                <TextInput placeholderTextColor='white' style={{paddingRight:1}}placeholder="Enter Bike #" />
                <TextInput placeholderTextColor='white' style={{paddingRight:15}}placeholder="Enter Time" />
              </View>
            <Button color='firebrick' title="Submit" /> 
            </View>
            {/* <Button title="Submit" />         */}
          <ScrollView>
            <CardHandler />
            <CardHandler />
            <CardHandler />
            <CardHandler />
            <CardHandler />
            <CardHandler />
            <CardHandler />
            <CardHandler />
          </ScrollView>

        </ImageBackground>
      </View>
    );
  }
}


const inputAreaStyle = StyleSheet.create({
  container: {
    paddingBottom:8,
    // flexDirection:'row',
    backgroundColor:'rgba(52,52,52,0.8)',
    // alignItems:'center',
    // justifyContent:'space-between'
  },
  inputs: {
    color:'white',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  } 
})
//This style sheet came with first build.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
