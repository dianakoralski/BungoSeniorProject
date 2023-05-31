import React, { useState } from 'react';
import { View, Button, Image, FlatList, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const PickPhotos = ({change}) => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageSelection = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      console.log('Permission denied');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      base64: true,
    });

    if (!result.canceled) {
      const selectedAssets = result.assets.map((asset) => asset.base64);
      newSelectedImages = [...selectedImages, ...selectedAssets];
      setSelectedImages(newSelectedImages);
      change(newSelectedImages);
    }
  };

  const renderSelectedImages = () => {
    return (
      <FlatList
        data={selectedImages}
        renderItem={({ item }) => <Image source={{ uri: 'data:image/jpeg;base64,' + item }} style={styles.image} />}
        keyExtractor={(item, index) => index.toString()}
        horizontal
      />
    );
  };

  return (
    <View>
      <Button title="Select Images" onPress={handleImageSelection} />
      {renderSelectedImages()}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 5,
  },
});

export default PickPhotos;
