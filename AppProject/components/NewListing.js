import React, {useState} from 'react'
import {ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { TextInput, Button, FAB } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';
import BackButton from './BackButton.js';
import PickPhotos from './PickPhotos.js';
import axios from 'axios';

function NewListing(props) {

  const navigation = useNavigation();

    const [errorMessage, setErrorMessage] = useState("")
    const [description, setDescription] =useState("")
    const [address, setAddress] = useState('')
    const [date, setDate] =useState("")

    // const handleSubmit = async (event) => {

    //   // Create a new user record and sends it to the backend
    //   try {
    //     const response = await axios.put('http://127.0.0.1:5000/users',
    //      { name: name, email: email, password: password,
    //        jursidiction: jurisdiction,
    //        license: license});
    //     console.log(response.data);
    //     setErrorMessage("");
    //     props.navigation.navigate('Home', {});
    //   }
    //   catch (error) {
    //     console.log(error.response?.status);
    //     console.log(error.response?.data);
    //     setErrorMessage(error.response?.data["error creating new user"])
    //   }
    // }

  return (
    <View style ={{flex:1}}>
    <ScrollView>
      <View style={{ flex:1, alignItems: 'left', margin: 5, borderRadius: 0}}>
      <BackButton onPress={() => navigation.goBack()} />
      <Text style ={{marginLeft: 80, fontSize: 30, color: 'black', fontWeight: 'bold'}}>Add New Listing</Text>

      <View style = {{flex: 1, alignSelf: 'center', marginTop: 10}}>
        <PickPhotos></PickPhotos>
      </View>

      <Text style = {styles.errorTxt}>{errorMessage}</Text>
      <Text style = {styles.txtStyle}>Address:</Text>
      <TextInput style = {styles.inputStyle}
      small={true}
      value={address}
      mode = 'outlined'
      onChangeText={text =>setAddress(text)}
      />

    <Text style = {styles.txtStyle}>Description:</Text>
    <TextInput style = {styles.inputStyle}
      value={description}
      mode = 'outlined'
      multiline
      onChangeText={text =>setDescription(text)}
      />

      <Text style = {styles.txtStyle}>Date:</Text>
    <TextInput style = {styles.inputStyle}
      value={date}
      mode = 'outlined'
      onChangeText={text =>setDate(text)}
    />

    <Button 
    style= {{margin: 10}}
    mode='contained'
    onPress={() => handleSubmit()}>
      CREATE NEW LISTING
    </Button>
    </View>
    </ScrollView>
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
      color: 'black',
      marginLeft: 10,
      paddingTop:10
    },
    errorTxt:{
      color: 'red',
      marginLeft: 10,
      paddingTop:10
    },
    });
  

export default NewListing
