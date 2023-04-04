

import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';

function Home(props) {

    const [name, setName] = useState("DK is my name")
  return (
    <View>
      <Text style = {{color: 'white'}}>Hey Diana I am in the App.js file</Text>
      <Text style = {{color: 'white'}}>{name}</Text>
      <Button title = "Click" onPress={() => setName("This is changed")}/>
    </View>
  )
}

export default Home
