import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

function Login() {

    const [title, setTitle] =useState("")
    const [body, setBody] =useState("")
  return (
    <View>
      <TextInput style = {styles.inputStyle}
      label= "Email"
      value={title}
      mode = 'outlined'
      theme = {{roundness:20}}
      onChangeText={text =>setTitle(text)}
      />

    <TextInput style = {{margin: 10}}
        label= "Password"
        value={body}
        mode = 'outlined'
        multiline
        numberOfLines={100}
        theme = {{roundness:20}}
        onChangeText={text =>setBody(text)}
    />

    <Button 
    style= {{margin: 10}}
    icon= "login"
    mode='contained'
    onPress={() => console.log("Create pressed")}>
      Log In
    </Button>
    </View>
  )
}

const styles =StyleSheet.create({
    inputStyle: {
        padding: 10,
        marginTop: 50,
        marginRight: 10,
        marginLeft:10
    }
})

export default Login
