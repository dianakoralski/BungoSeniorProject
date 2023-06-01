import React, {useState} from 'react'
import {ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { TextInput, Button, FAB } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';
import BackButton from './BackButton.js';
import PickPhotos from './PickPhotos.js';
import axios from 'axios';
import State from './State.js'

function NewListing(props) {

  const navigation = useNavigation();

    const [errorMessage, setErrorMessage] = useState("")
    const [description, setDescription] =useState("")
    const [address, setAddress] = useState("")
    const [mlsNumber, setMLSNumber] =useState("")
    const [date, setDate] =useState("")
    const [time, setTime] =useState("")
    const [wage, setWage] =useState("")
    const [selectedImages, setSelectedImages] = useState([]);
    function handleState(newValue) {
        setSelectedImages(newValue);
    }

    const handleSubmit = async (event) => {

      // Create a new property record and sends it to the backend
      try {
        const response = await axios.put('http://127.0.0.1:5000/properties',
         { user_id: State.getInstance().CurrentUser['_id'],
            address: address, description: description, mlsNumber: mlsNumber,
           date: date, images: selectedImages});
        // console.log(response.data);
        setErrorMessage("");
        props.navigation.navigate('ManageListings');
      }
      catch (error) {
        console.log(JSON.stringify(error));
        console.log(error.response?.status);
        console.log(error.response?.data);
        setErrorMessage(error.response?.data["error creating new property"])
      }
    }

  return (
    <View style ={{flex:1}}>
    <ScrollView>
      <View style={{ flex:1, alignItems: 'left', margin: 5, borderRadius: 0}}>
      <BackButton 
      onPress={() => navigation.goBack()}
      color ='black'/>
      <Text style ={{marginLeft: 80, fontSize: 30, color: 'black', fontWeight: 'bold'}}>Add New Listing</Text>

      <View style = {{flex: 1, alignSelf: 'center', marginTop: 10}}>
        <PickPhotos change={handleState}></PickPhotos>
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

<Text style = {styles.txtStyle}>Wage Offered:</Text>
    <TextInput style = {styles.inputStyle}
      value={wage}
      mode = 'outlined'
      onChangeText={text =>setWage(text)}
    />

<Text style = {styles.txtStyle}>MLS #:</Text>
      <TextInput style = {styles.inputStyle}
      small={true}
      value={mlsNumber}
      mode = 'outlined'
      onChangeText={text =>setMLSNumber(text)}
      />

      <Text style = {styles.txtStyle}>Date of Showing:</Text>
    <TextInput style = {styles.inputStyle}
      value={date}
      mode = 'outlined'
      onChangeText={text =>setDate(text)}
    />

<Text style = {styles.txtStyle}>Time of Showing:</Text>
    <TextInput style = {styles.inputStyle}
      value={time}
      mode = 'outlined'
      onChangeText={text =>setTime(text)}
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
