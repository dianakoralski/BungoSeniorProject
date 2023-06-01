import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Modal, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Taskbar = ({ activeItem, onItemClick, onRefresh }) => {
  const navigation = useNavigation();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleDropdownPress = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleMenuItemPress = (item) => {
    // Handle the press of a dropdown menu item here
    console.log('Dropdown menu item pressed:', item);
    // You can close the dropdown modal here or perform any other action
    setIsDropdownVisible(false);
  };

  const dropdownData = [
    { id: '1', title: 'Option 1' },
    { id: '2', title: 'Option 2' },
    { id: '3', title: 'Option 3' },
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.item,
          activeItem === 'Home' && styles.activeItem, // Apply different styles for the active item
        ]}
        onPress={() => navigation.navigate('ManageListings')}
      >
        <Text style={styles.itemText}>Manage Listings</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.item,
          activeItem === 'About' && styles.activeItem, // Apply different styles for the active item
        ]}
        onPress={() => navigation.navigate('Home', {email: ''})         
        }
      >
        <Text style={styles.itemText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.dropdownButton} onPress={handleDropdownPress}>
        <Text style={styles.dropdownButtonText}>Menu</Text>
      </TouchableOpacity>

      <Modal visible={isDropdownVisible} animationType="fade" transparent>
        <TouchableOpacity
          style={styles.dropdownBackground}
          onPress={handleDropdownPress}
          activeOpacity={1}
        >
          <FlatList
            style = {{marginTop: 100}}
            data={dropdownData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => handleMenuItemPress(item)}
              >
                <Text style={styles.dropdownItemText}>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#BEBEBE',
    justifyContent: 'space-between',
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
  dropdownButton: {
    paddingHorizontal: 10,
  },
  dropdownButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  dropdownBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  dropdownItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    marginRight: 10 //change
  },
  dropdownItemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Taskbar
