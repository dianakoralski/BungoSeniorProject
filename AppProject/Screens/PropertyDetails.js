import React, {useState} from 'react'
import {ScrollView, View, Text, StyleSheet, Image, FlatList } from 'react-native'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';
import BackButton from '../components/BackButton.js';

function PropertyDetails(props) {
    propertyData = props.route.params;
    const navigation = useNavigation();
  

  return (
    <View style ={{flex:1}}>
      <ScrollView>
        <View style={{ flex:1, alignItems: 'left', margin: 5, borderRadius: 0}}>
          <BackButton 
            onPress={() => navigation.goBack()}
            color ='black'/>
          <Text style ={{marginLeft: 80, fontSize: 30, color: 'black', fontWeight: 'bold'}}>Property Details</Text>
          
          {/* Render photos of property */}
          <FlatList
              style={{alignSelf: 'center'}}
              data={propertyData.images}
              renderItem={({ item }) => <Image source={{ uri: 'data:image/jpeg;base64,' + item }} style={styles.image} />}
              keyExtractor={(item, index) => index.toString()}
              horizontal
            />
            {/* List property data */}
            <Text style= {styles.labelStyle}>Address:</Text>
            <Text style = {styles.txtStyle}>{propertyData.address}</Text>
            <Text style= {styles.labelStyle}>Description:</Text>
            <Text style = {styles.txtStyle}>{propertyData.description}</Text>
            <Text style= {styles.labelStyle}>Wage:</Text>
            <Text style = {styles.txtStyle}>{propertyData.wage}</Text>
            <Text style= {styles.labelStyle}>Date of Showing:</Text>
            <Text style = {styles.txtStyle}>{propertyData.date}</Text>
            <Text style= {styles.labelStyle}>Time of Showing:</Text>
            <Text style = {styles.txtStyle}>{propertyData.time}</Text>
            <Text style= {styles.labelStyle}>MLS #:</Text>
            <Text style = {styles.txtStyle}>{propertyData.mlsNumber}</Text>

          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Button
              style={{ marginTop: 50, marginRight: 10, backgroundColor: 'green' }}
              mode="contained"
              onPress={() => console.log('applied')}>
              Apply for showing
            </Button>
            <Button
              style={{ marginTop: 50 }}
              icon="phone"
              mode="contained"
              onPress={() => console.log('contacted')}>
              Contact Realtor
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles =StyleSheet.create({
    labelStyle: {
        width: 350,
        height: 30,
        fontWeight: 'bold',
        paddingTop: 10,
        marginLeft:10
    },
    txtStyle:{
      color: 'black',
      marginLeft: 10,
      marginLeft: 20
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
