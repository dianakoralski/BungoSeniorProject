import React, {useState} from 'react'
import {ScrollView, View, Text, StyleSheet, Image, FlatList } from 'react-native'
import { TextInput, Button, FAB } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';
import BackButton from './BackButton.js';
import PickPhotos from './PickPhotos.js';
import axios from 'axios';
import State from './State.js'

function PropertyDetails(props) {
    propertyData = props.route.params;
    console.log("PropertyDetails: "+JSON.stringify(propertyData));
  const navigation = useNavigation();
  const [description, setDescription] = useState("Property Description")
  

  return (
    <View style ={{flex:1}}>
    <ScrollView>
      <View style={{ flex:1, alignItems: 'left', margin: 5, borderRadius: 0}}>
        <BackButton 
          onPress={() => navigation.goBack()}
          color ='black'/>
        <Text style ={{marginLeft: 80, fontSize: 30, color: 'black', fontWeight: 'bold'}}>Property Details</Text>
        <Text style = {styles.txtStyle}>{propertyData.address}</Text>
        <Text style = {styles.txtStyle}>{propertyData.description}</Text>
        <FlatList
            data={propertyData.images}
            renderItem={({ item }) => <Image source={{ uri: 'data:image/jpeg;base64,' + item }} style={styles.image} />}
            keyExtractor={(item, index) => index.toString()}
            horizontal
      />
      </View>
    </ScrollView>
    </View>
  )
}

const styles =StyleSheet.create({
    inputStyle: {
        width: 350,
        height: 30,
        paddingBottom: 10,
        marginLeft:10
    },
    txtStyle:{
      color: 'black',
      marginLeft: 10,
      paddingTop:10
    },
    errorTxt:{
      color: 'red',
      marginLeft: 10,
      paddingTop:10
    },
    image: {
        width: 100,
        height: 100,
        marginHorizontal: 5,
      },
    });
  

export default PropertyDetails
