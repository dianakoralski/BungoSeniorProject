import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';


const LinkButton = ({onPress, text, color}) => {
    return (
        <Pressable
            style= {[styles.container_Tertiary]}
            onPress ={() => navigation.navigate('Create Account')}>
                <Text style ={[styles.text, styles.text_Tertiary]}>Get Started</Text>
            </Pressable>
    )
}

const styles= StyleSheet.create({
    container_Tertiary:{
        width:120,
        marginLeft: 250,
        marginTop: 250
    },
      text_Tertiary:{
        fontWeight: 'bold',
        alignContent:'center',
        fontSize: 21,
        color:'orange'
      }
})

export default LinkButton;