import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import BackButton from './BackButton.js';

function Login() {
  const navigation = useNavigation();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  return (
    <View style={{ flex: 1, backgroundColor: '#191970' }}>
      <View style={{ flex:1, alignItems: 'left', margin: 5, borderRadius: 0}}>
        <BackButton onPress={() => navigation.goBack()} />
        <Image source={require('./bungotext.png')} style={{ width: 300, height: 100, marginLeft:30, marginTop:10}} />
      </View>
      <Text style={{ fontSize: 18, color: 'white', marginLeft: 10, paddingTop: 40 }}>Email:</Text>
      <TextInput
        style={styles.inputStyle}
        label="Email"
        value={title}
        mode="outlined"
        theme={{ roundness: 20 }}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={{ fontSize: 18, color: 'white', marginLeft: 10, paddingTop: 10 }}>Password:</Text>
      <TextInput
        style={styles.inputStyle}
        label="Password"
        value={body}
        mode="outlined"
        theme={{ roundness: 20 }}
        onChangeText={(text) => setBody(text)}
      />

      <Button style={{ margin: 10, width: 200, position: 'relative', top: -10, left: -15 }} backgroundColor="transparent" mode="text" onPress={() => console.log('FORGOT PASSWORD')}>
        FORGOT PASSWORD
      </Button>

      <Button style={{ margin: 10 }} icon="login" mode="contained" onPress={() => console.log('Create pressed')}>
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
