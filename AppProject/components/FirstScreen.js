import React, {useState, useEffect} from 'react';
import {Text, View, Button, FlatList, StyleSheet, Image} from 'react-native';
import {Card, FAB} from 'react-native-paper';

function FirstScreen(props) {

    const data = [
        {id: 1, title: 'First Title', body: 'First Body'},
        {id: 2, title: 'Second Title', body: 'Second Body'},
        {id: 3, title: 'Third Title', body: 'Third Body'}
    ]

  return (
    <View style ={{flex:1}}>
      <Image source={require('./bungotext.png')} style={{width: 300, height: 100, marginTop: 100, marginLeft:30}}/>

      <FAB
        style = {styles.fab}
        small = {false}
        label ="Login"
        theme={{colors:{accent:"green"}}}
        onPress ={() => console.log("Pressed")}>
      </FAB>
      <FAB
        style = {styles.fab2}
        small = {false}
        label ="Create Account"
        theme={{colors:{accent:"green"}}}
        onPress ={() => console.log("Pressed")}>
      </FAB>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#123',
    alignItems: 'center',
    justifyContent: 'center',
  },
    Bungo: {
      margin: 10,
      padding: 10,
    },
    fab:{
        position: 'absolute',
        width: 200,
        margin: 16,
        alignSelf: 'center',
        bottom: 300
    },
    fab2:{
      position: 'absolute',
      width: 200,
      marginLeft: 88,
      bottom: 250
  }
  });

export default FirstScreen
