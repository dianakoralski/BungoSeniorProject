import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BackButton = ({ onPress, color='white' }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Icon name="arrow-back" size={30} style={{color:color}} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    padding: 5,
    borderRadius: 5,
    marginRight: 10,
    marginTop:10
  },
});

export default BackButton;
