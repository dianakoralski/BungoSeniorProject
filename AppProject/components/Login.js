import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import BackButton from './BackButton.js';

function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/users', {email: email, password: password});
      console.log(response.data);
      setErrorMessage("");
      props.navigation.navigate('Home');
    }
    catch (error) {
      console.log(error.response.status);
      console.log(error.response.data);
      setErrorMessage(error.response.data["error"])
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#191970' }}>
      <View style={{ flex:1, alignItems: 'left', margin: 5, borderRadius: 0}}>
        <BackButton onPress={() => navigation.goBack()} />
        <Image source={require('./bungotext.png')} style={{ width: 300, height: 100, marginLeft:30, marginTop:10}} />
      </View>
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
