import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

function Create() {

    const [title, setTitle] =useState("")
    const [body, setBody] =useState("")
  return (
    <View>
      <TextInput style = {styles.inputStyle}
      label= "Title"
      value={title}
      mode = 'outlined'
      onChangeText={text =>setTitle(text)}
      />

    <TextInput style = {{margin: 10}}
        label= "Description"
        value={body}
        mode = 'outlined'
        multiline
        numberOfLines={100}
        onChangeText={text =>setBody(text)}
    />

    <Button 
    style= {{margin: 10}}
    icon= "pencil"
    mode='contained'
    onPress={() => console.log("Create pressed")}>Insert Article</Button>
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

export default Create
