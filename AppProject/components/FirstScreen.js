import React, {useState, useEffect} from 'react';
import {Text, View, Button, FlatList, StyleSheet, Image, Appearance, Pressable} from 'react-native';
import {Card, FAB} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import LinkButton from './LinkButton.js';
import { Link } from '@react-navigation/native';

function FirstScreen(props) {
  const navigation = useNavigation();

  return (
    <View style ={{flex:1, backgroundColor: "#191970"}}>
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
        onPress ={() => navigation.navigate('Login')}>
      </FAB>
   
    </View >
    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', position: 'absolute', bottom: 0, left: 0, right: 0}}>
    <Text style={{color: 'white',left: 5, bottom:0, fontWeight: 'bold', fontSize: 21, width: 230}}>Don't have an account?</Text>
    <Text>__</Text>
    <LinkButton
        style = {{right: 0}}
        text="Get Started"
        color ='orange'
        goTo='Create Account'
        fontSize={21}/>
        </View>
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
  },
  container_Tertiary:{
    width:120,
    marginLeft: 250,
    marginTop: 250
},
  text_Tertiary:{
    fontWeight: 'bold',
    alignContent:'center',
    fontSize: 21,
    color:'orange'
  }

  
  });

export default FirstScreen;
