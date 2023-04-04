import React, { Component } from 'react'
import {Text, View, Button } from 'react-native';

export class HomeClass extends Component {
    state = {
        name: "Diana Koralski"
    }
  render() {
    return (
      <View>
        <Text style = {{fontSize: 20, color: 'red'}}>Hello from class</Text>
        <Text style ={{color: 'purple'}}>{this.state.name}</Text>
        <Button title = "Click me" onPress={() => this.setState({name: "This is Changed"})}/>
      </View>
    )
  }
}

export default HomeClass
