import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LinkButton = ({text, color, goTo, fontSize}) => {
    const navigation = useNavigation();

    return (
        <Pressable
            style= {[styles.container_Tertiary]}
            onPress ={() => navigation.navigate(goTo)}>
                <Text style ={[styles.text, styles.text_Tertiary,{ color: color, fontSize: fontSize}]}>{text}</Text>
            </Pressable>
    )
}

const styles= StyleSheet.create({
    container_Tertiary:{
        width:200
        
    },
      text_Tertiary:{
        fontWeight: 'bold',
        alignContent:'center'
      }
})

export default LinkButton;