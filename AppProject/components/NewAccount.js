import React, {useState} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { TextInput, Button, FAB } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';
import BackButton from './BackButton.js';
import {launchImageLibrary} from 'react-native-image-picker'




function NewAccount() {

  const navigation = useNavigation();

  const [image, setImage] = useState(null);

  const handleSelectImage = () => {
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 300,
        maxWidth: 300,
      },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          setImage({ uri: response.uri });
        }
      },
    );
  };
  
    const [name, setName] =useState("")
    const [email, setEmail] =useState("")
    const [password, setPassword] =useState("")
    const [breLicense, setBreLicense] =useState("")

  return (
    <View style ={{flex:1, backgroundColor: "#191970"}}>
      <View style={{ flex:1, alignItems: 'left', margin: 5, borderRadius: 0}}>
      <BackButton onPress={() => navigation.goBack()} />
      <Image source={require('./bungotext.png')} style={{marginTop: -25, width: 150, height: 50, marginLeft: 105}}/>
      <Text style ={{marginLeft: 80, fontSize: 30, color: 'white', fontWeight: 'bold'}}>Getting Started</Text>

      <View>
      {image ? (
        <Image source={image} style={{ width: 200, height: 200 }} />
      ) : (
        <Text>No image selected</Text>
      )}
      <Button fontSize={45} title="Select image" onPress={handleSelectImage} />
    </View>


      <Button 
    style={styles.roundButton1}
    title="Choose Photo" 
    icon= "plus"
    mode='contained'
    onPress={console.log("PP")}>
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
      value={email}
      mode = 'outlined'
      theme = {{roundness:20}}
      onChangeText={text =>setEmail(text)}
      />

    <Text style = {styles.txtStyle}>Password:</Text>
    <TextInput style = {styles.inputStyle}
      label= "Type Here"
      value={password}
      mode = 'outlined'
      theme = {{roundness:20}}
      onChangeText={text =>setPassword(text)}
      />

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
    onPress={() => console.log("Create pressed")}>
      CREATE MY ACCOUNT
    </Button>
    </View>
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
