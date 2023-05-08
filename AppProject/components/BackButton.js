import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BackButton = ({ onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Icon name="arrow-back" size={30} style={styles.icon} />
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
  icon: {
    color: 'white',
  },
});

export default BackButton;
