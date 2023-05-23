import React, { useState } from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { AntDesign } from '@expo/vector-icons';

const RoundButton = () => {
  const [image, setImage] = useState(null);

  const handlePress = () => {
    ImagePicker.showImagePicker(
      {
        title: 'Select Profile Photo',
        mediaType: 'photo',
        quality: 1,
        maxWidth: 500,
        maxHeight: 500,
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      },
      (response) => {
        if (!response.didCancel && !response.error) {
          setImage(response.uri);
        }
      }
    );
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.buttonContainer}>
      <View style={styles.button}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <AntDesign name="plus" size={32} color="white" />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default RoundButton;
