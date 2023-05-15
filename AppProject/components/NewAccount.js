import React, {useState} from 'react'
import {ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { TextInput, Button, FAB } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';
import BackButton from './BackButton.js';
import PasswordChecker from './PasswordChecker.js'
import password from './PasswordChecker.js'
import axios from 'axios';

function NewAccount(props) {

  const navigation = useNavigation();

  const [image, setImage] = useState(null);

    const [name, setName] =useState("")
    const [email, setEmail] =useState("")
    const [password, setPassword] = useState('')
    const [breLicense, setBreLicense] =useState("")

    // const insertData = () => {
    //   fetch('http://127.0.0.1:5000/users',
    //       {method: 'PUT',
    //       headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify({name: name, email:email, password: password, breLicense:breLicense})
    //   .then(resp => resp.json())
    //   .then(data => {props.navigation.navigate('Home')})
    // })
    // .catch(console.log(error))
    // }

    const handleSubmit = async (event) => {
      
      const response = await axios.put('http://127.0.0.1:5000/users', { name: name, email: email, password: password, breLicense: breLicense});
      console.log(response.data);
    }

  return (
    <ScrollView>
    <View style ={{flex:1, backgroundColor: "#191970"}}>
      <View style={{ flex:1, alignItems: 'left', margin: 5, borderRadius: 0}}>
      <BackButton onPress={() => navigation.goBack()} />
      <Image source={require('./bungotext.png')} style={{marginTop: -25, width: 150, height: 50, marginLeft: 105}}/>
      <Text style ={{marginLeft: 80, fontSize: 30, color: 'white', fontWeight: 'bold'}}>Getting Started</Text>


      <Button 
    style={styles.roundButton1}
    title="Choose Photo" 
    icon= "plus"
    mode='contained'
    onPress={console.log("PP")}>
    </Button>

      <Text style = {styles.txtStyle}>Full Name:</Text>
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
      value={email}
      mode = 'outlined'
      theme = {{roundness:20}}
      onChangeText={text =>setEmail(text)}
      />
    
      <PasswordChecker setPasswordCallback = {setPassword}/>

    <Text style = {styles.txtStyle}>BRE License:</Text>
    <TextInput style = {styles.inputStyle}
      label= "Type Here"
      value={breLicense}
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
    onPress={() => handleSubmit()}>
      CREATE MY ACCOUNT
    </Button>
    </View>
    </View>
    </ScrollView>
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
      profilePhotoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      profilePhoto: {
        width: 150,
        height: 150,
        borderRadius: 75,
      },
    });
  

export default NewAccount
