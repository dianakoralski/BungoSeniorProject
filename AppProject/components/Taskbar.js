import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Taskbar = ({ activeItem, onItemClick }) => {
    const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.item,
          activeItem === 'Home' && styles.activeItem, // Apply different styles for the active item
        ]}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.itemText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.item,
          activeItem === 'About' && styles.activeItem, // Apply different styles for the active item
        ]}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.itemText}>About</Text>
      </TouchableOpacity>

      {/* Add more taskbar items as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#BEBEBE',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  activeItem: {
    backgroundColor: '#123',
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Taskbar;
