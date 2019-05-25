/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground, Image, Button, ScrollView, StatusBar, TextInput, Alert} from 'react-native';

//Importing my Components below,
import HeaderPage from './Components/HeaderPage.js'//THe header page.
import PlayerCards from './Components/PlayerCards.js'//Player cards
import PlayerManager from './Components/PlayerManager.js' // way to manage the cyclist's

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// class CardHandler extends Component {
//   render() {
    
//     return (
//       <View>
//         <PlayerCards data={this.props.userData} />
//       </View>
//     );
//   }
// }

export default class App extends Component{
  //The following will be testing the passing of state as a prop to the PlayerCard,
  constructor(props) {
    super(props);
    this.state = {
      nameBuffer: ' ',
      bikeBuffer: ' ',
      timeBuffer: ' ',
      playerArray: [
      {
        id:1,
        name:'Paul', 
        bikeNumber:'13', 
        time:'13.00'
      },
      {
        id:2,
        name:'Chris froome', 
        bikeNumber:'13', 
        time:'13.00'
      },
      {
        id:3,
        name:'Sara', 
        bikeNumber:'13', 
        time:'13.00'
      }
      ]
    }
  }

  render() {
    showData = () => {
      var tempArray = this.state.playerArray;
      tempArray.push({
        id: 5,
        name:this.state.nameBuffer,
        bikeNumber:this.state.bikeBuffer,
        time:this.state.timeBuffer
      });
      this.setState({
        nameBuffer: ' ',
        bikeBuffer: ' ',
        timeBuffer: ' '
      });
      console.log(tempArray);
    }
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
                <Text style={{paddingLeft:15, color:'white'}}>Name</Text>
                <Text style={{color:'white'}}>Bike Number</Text>
                <Text style={{paddingLeft:15, color:'white'}}>Prediction</Text> 
              </View>
              <View style={inputAreaStyle.inputs}>
                <TextInput 
                  placeholderTextColor='white' 
                  style={{color:'white', borderWidth:2, borderColor:'grey', borderRadius:75}}
                  placeholder="Enter name"
                  onChangeText={(text) => this.setState({nameBuffer:text})} 
                  clearButtonMode='always'
                />
                <TextInput 
                  placeholderTextColor='white' 
                  style={{color:'white', borderWidth:2, borderColor:'grey', borderRadius:75}}
                  placeholder="Enter Bike #"
                  onChangeText={(text) => this.setState({bikeBuffer:text})}  
                />
                <TextInput 
                  placeholderTextColor='white' 
                  style={{color:'white', borderWidth:2, borderColor:'grey', borderRadius:75}}
                  placeholder="Enter Time"
                  onChangeText={(text) => this.setState({timeBuffer:text})}  
                />
              </View>
              {/*The button below will submit the adding of a cyclist to the race, and will be added to the array.*/}
              <Button color='#990000' title="Submit"  onPress={showData}/> 
            </View>
            
          <ScrollView>
            <PlayerManager info={this.state.playerArray}/>
            {/* <CardHandler userData={this.state.playerArray}/> */}
      
          </ScrollView>

        </ImageBackground>
      </View>
    );
  }
}


const inputAreaStyle = StyleSheet.create({
  container: {
    paddingBottom:8,
    borderBottomWidth:2,
    borderBottomColor:'#fdb722',
    // flexDirection:'row',
    backgroundColor:'#161514',
    // alignItems:'center',
    // justifyContent:'space-between'
  },
  inputs: {
    color:'white',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  }, 
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
