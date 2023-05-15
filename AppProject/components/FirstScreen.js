import React, {useState, useEffect} from 'react';
import {Text, View, Button, FlatList, StyleSheet, Image, Appearance} from 'react-native';
import {Card, FAB} from 'react-native-paper';

function FirstScreen(props) {

  const renderLabel = () => (
    <Text style={{ color: 'orange', fontSize: 18 }}>Click me!</Text>
  );

    const data = [
        {id: 1, title: 'First Title', body: 'First Body'},
        {id: 2, title: 'Second Title', body: 'Second Body'},
        {id: 3, title: 'Third Title', body: 'Third Body'}
    ]

  return (
    <View style ={{flex:1, backgroundColor: "#191970"}}>
      <Image source={require('./bungotext.png')} style={{width: 300, height: 100, marginTop: 100, marginLeft:30}}/>
      <Text style={{width: 300, height: 100, marginTop: 10, marginLeft:30, color: "white", textAlign: "center", fontSize: 20}}>
        Leading Real Estate Forward, One Open House at a Time
      </Text>
      <FAB
        style = {styles.fab}
        small = {false}
        label ="Login"
        labelStyle={{ fontSize: 60 }}
        theme={{colors:{accent:"green"}, roundness: 20}}
        onPress ={() => props.navigation.navigate('Login')}>
      </FAB>
      
      <FAB
        color ='orange'
        backgroundColor = 'transparent'
        style = {styles.fab2}
        small = {false}
        label ="Get Started"
        onPress ={() => props.navigation.navigate('Create Account')}>
      </FAB>
      <Text style={{color: 'white', bottom: -240, marginLeft: 10, fontWeight: 'bold', fontSize: 20}}>Don't have an account?</Text>
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
    fab:{
      marginTop: 10,
      width: 200,
      marginLeft: 88,
    },
    fab2:{
      flex: 1,
      position: 'absolute',
      width: 160,
      marginLeft: 88,

      right: 0,
      bottom: 10,
      backgroundColor: 'transparent', //make transparent later
      //includeFontPadding: false
  }

  
  });

export default FirstScreen
