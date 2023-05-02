import React, {useState} from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { TextInput, Button, FAB } from 'react-native-paper'
import Contants from 'expo-constants';

function NewAccount() {

    const [name, setName] =useState("")
    const [email, setEmail] =useState("")
    const [password, setPassword] =useState("")
    const [breLicense, setBreLicense] =useState("")

  return (
    <View style ={{flex:1, backgroundColor: "#191970"}}>
      <Image source={require('./bungotext.png')} style={{marginTop: Contants.statusBarHeight, width: 150, height: 50, marginLeft: 105}}/>
      <Text style ={{marginLeft: 80, fontSize: 30, color: 'white', fontWeight: 'bold'}}>Getting Started</Text>
    

      <Button 
    style={styles.roundButton1}
    icon= "plus"
    mode='contained'
    onPress={() => console.log("Add PP")}>
    </Button>

      <Text style = {styles.txtStyle}>First and Last Name:</Text>
      <TextInput style = {styles.inputStyle}
      label= "Type Here"
      small={true}
      value={name}
      mode = 'outlined'
      theme = {{roundness:20}}
      onChangeText={text =>setName(text)}
      />

    <Text style = {styles.txtStyle}>Email:</Text>
    <TextInput style = {styles.inputStyle}
      label= "Type Here"
      value={name}
      mode = 'outlined'
      theme = {{roundness:20}}
      onChangeText={text =>setEmail(text)}
      />

    <Text style = {styles.txtStyle}>Password:</Text>
    <TextInput style = {styles.inputStyle}
      label= "Type Here"
      value={name}
      mode = 'outlined'
      theme = {{roundness:20}}
      onChangeText={text =>setPassword(text)}
      />

    <Text style = {styles.txtStyle}>BRE License:</Text>
    <TextInput style = {styles.inputStyle}
      label= "Type Here"
      value={name}
      mode = 'outlined'
      theme = {{roundness:20}}
      onChangeText={text =>setBreLicense(text)}
    />
  <Text style = {styles.txtStyle}>I am looking to:</Text>
  <Text style = {styles.txtStyle}>placeholder</Text>
  <Text style = {styles.txtStyle}>placeholder</Text>


    <Button 
    style= {{margin: 10}}
    mode='contained'
    onPress={() => console.log("Create pressed")}>
      CREATE MY ACCOUNT
    </Button>
    </View>
  )
}

const styles =StyleSheet.create({
    inputStyle: {
        width: 350,
        height: 30,
        paddingBottom: 10,
        marginLeft:10
    },
    txtStyle:{
      color: 'white',
      marginLeft: 10,
      paddingTop:10
    },
    roundButton1: {
      paddingLeft: 15,
      fontSize: 30,
      width: 100,
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
      backgroundColor: 'orange',
      marginLeft: 130,
      marginTop:10
    },
})

export default NewAccount
