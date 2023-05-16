import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';


const LinkButton = ({onPress, text}) => {
    return (
        <Pressable
            style= {[styles.container, styles.container_Tertiary]}
            onPress ={() => navigation.navigate('Login')}>
                <Text style ={[styles.text, styles.text_Tertiary]}>{text}</Text>
            </Pressable>
    )
}

const styles= StyleSheet.create({
    container_Tertiary:{
        position: 'absolute',
        bottom:26,
        right: 18},
    text_Tertiary:{
        fontWeight: 'bold',
        alignContent:'center',
        fontSize: 21,
        color:'orange'
    }
})

export default LinkButton;