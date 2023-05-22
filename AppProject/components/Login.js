import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import BackButton from './BackButton.js';
import LinkButton from './LinkButton.js';
import axios from 'axios';

function Login(props) {
  const navigation = useNavigation();

  const [errorMessage, setErrorMessage] = useState("")
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/login', {email: email, password: password});
      console.log(response.data);
      setErrorMessage("Success");
      user = response.data[0];
      props.navigation.navigate('Home', user);
    }
    catch (error) {
      console.log(error);
      setErrorMessage("Login failed")
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#191970' }}>
      <View style={{ flex:1, alignItems: 'left', margin: 5, borderRadius: 0}}>
        <BackButton onPress={() => navigation.goBack()} />
        <Image source={require('./bungotext.png')} style={{ width: 300, height: 100, marginLeft:30, marginTop:10}} />
      </View>
      <Text style = {styles.txtStyle}>{errorMessage}</Text>
      <Text style={{ fontSize: 18, color: 'white', marginLeft: 10, paddingTop: 40 }}>Email:</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="Email"
        value={email}
        mode="outlined"
        theme={{ roundness: 20 }}
        onChangeText={(text) => setEmail(text)}
      />
      <Text style={{ fontSize: 18, color: 'white', marginLeft: 10, paddingTop: 10 }}>Password:</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="Password"
        value={password}
        mode="outlined"
        theme={{ roundness: 20 }}
        onChangeText={(text) => setPassword(text)}
      />

      <Button style={{ margin: 10, width: 200, position: 'relative', top: -10, left: -15 }} backgroundColor="transparent" mode="text" onPress={() => console.log('FORGOT PASSWORD')}>
        FORGOT PASSWORD
      </Button>

      <Button style={{ margin: 10 }} 
        icon="login" 
        mode="contained" 
        onPress={() => handleSubmit()}>
        Log In
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    paddingBottom: 10,
    marginRight: 10,
    marginLeft: 10,
  },
});

export default Login;
