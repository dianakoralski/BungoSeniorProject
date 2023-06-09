import React, {useState} from 'react'
import {ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { TextInput, Button, FAB } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';
import BackButton from '../components/BackButton.js';
import PasswordChecker from '../components/PasswordChecker.js'
import CheckBox from '../components/CheckBox.js';
import RoundButton from '../components/RoundButton.js';
import State from '../components/State.js';
import axios from 'axios';

function NewAccount(props) {

  const navigation = useNavigation();

    const [listJob, setListJob] = useState(false);
    const [findJob, setFindJob] = useState(false);

    const [errorMessage, setErrorMessage] = useState("")
    const [name, setName] =useState("")
    const [email, setEmail] =useState("")
    const [password, setPassword] = useState('')
    const [license, setLicense] =useState("")
    const [jurisdiction, setJurisdiction] = useState("")

  //Create a new user after validation with realtor API and DB requirements

    const handleSubmit = async (event) => {
      // Using external API to validate the license exists and matches the name
      // API documentation: https://www.arello.com/Developers.cfm
      // Currently using limited database from free test account
      // ----------------Sample users:----------------------------------
      // First   MI Last       Lic.#     City       Juris. Type   Status
      // ---------------------------------------------------------------
      // JOHN    Q  DOE        000012345 Montgomery AL     T      A
      // WILLIAM R  JONES      0099487   Anchorage  AK     BROKER ACTIVE
      // MARY    V  RICHARDSON 0089487   Juneau     AK     BROKER ACTIVE
      try {
        const response = await axios.post('https://www.arello.com/lvws/v2/',
         {searchMode:'test', username: 'lvws_test', password: 'lvws_test', 
          jurisdiction: jurisdiction, licenseNumber: license},
         {
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
         });
        setErrorMessage("Success");
        results = response.data["results"];
        
        //check if license is found
       if (results.length != 1)
       {
        setErrorMessage("License not found");
        return;
       }
       user = results[0];
       //check if the input name matches the license record from database
       if (name.toLowerCase().includes(user["firstName"].toLowerCase()) &&
        name.toLowerCase().includes(user["lastName"].toLowerCase()))
       {
        console.log("Name and license valid!");
       }
       else
       {
        setErrorMessage("Name does not match license");
        return;
       }
      }
      catch (error) {
        console.log(error);
        setErrorMessage("License verification failed")
      }

      // Create a new user record and sends it to the backend
      try {
        const response = await axios.put('http://127.0.0.1:5000/users',
         { name: name, email: email, password: password,
           jursidiction: jurisdiction,
           license: license});
        setErrorMessage("");
        user = response.data
        State.getInstance().CurrentUser = user;
        props.navigation.navigate('Home', {});
      }
      catch (error) {
        setErrorMessage(error.response?.data["error creating new user"])
      }
    }

  return (
    <ScrollView>
    <View style ={{flex:1, backgroundColor: "#191970"}}>
      <View style={{ flex:1, alignItems: 'left', margin: 5, borderRadius: 0}}>
      <BackButton onPress={() => navigation.goBack()} />
      <Image source={require('./bungotext.png')} style={{marginTop: -25, width: 150, height: 50, marginLeft: 105}}/>
      <Text style ={{marginLeft: 80, fontSize: 30, color: 'white', fontWeight: 'bold'}}>Getting Started</Text>

      <View style = {{alignSelf: 'center', marginTop: 10}}>
        <RoundButton></RoundButton>
        <Text style = {{color: 'white', left: 8}}>Profile Photo</Text>
      </View>

      <Text style = {styles.errorTxt}>{errorMessage}</Text>
      <Text style = {styles.txtStyle}>Full Name:</Text>
      <TextInput style = {styles.inputStyle}
      placeholder= "Type Here"
      small={true}
      value={name}
      mode = 'outlined'
      theme = {{roundness:20}}
      onChangeText={text =>setName(text)}
      />

    <Text style = {styles.txtStyle}>Email:</Text>
    <TextInput style = {styles.inputStyle}
      placeholder= "Type Here"
      value={email}
      mode = 'outlined'
      theme = {{roundness:20}}
      onChangeText={text =>setEmail(text)}
      />
    
      <PasswordChecker setPasswordCallback = {setPassword}/>

      <Text style = {styles.txtStyle}>Jurisdiction State:</Text>
    <TextInput style = {styles.inputStyle}
      placeholder= "Type Here"
      value={jurisdiction}
      mode = 'outlined'
      theme = {{roundness:20}}
      onChangeText={text =>setJurisdiction(text)}
    />

    <Text style = {styles.txtStyle}>License Number:</Text>
    <TextInput style = {styles.inputStyle}
      placeholder= "Type Here"
      value={license}
      mode = 'outlined'
      theme = {{roundness:20}}
      onChangeText={text =>setLicense(text)}
    />
  <Text style = {styles.txtStyle}>I am looking to:</Text>

  <CheckBox
    onPress={() => setListJob(!listJob)}
    title="Find realtors to do showings for me"
    isChecked={listJob}
  />
  <CheckBox
    onPress={() => setFindJob(!findJob)}
    title="Do showings for other realtors"
    isChecked={findJob}
  />

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
    errorTxt:{
      color: 'red',
      marginLeft: 10,
      paddingTop:10
    },
    });
  

export default NewAccount
