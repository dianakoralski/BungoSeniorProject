import { NavigationContainer } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import {Text, View, Button, FlatList, StyleSheet, Image} from 'react-native';
import {Card, FAB} from 'react-native-paper';
import Taskbar from './Taskbar';

function ManageListings(props) {

   // const [data1, setData]= useState([])
/*
    useEffect(() => {
        fetch('http://192.168.1.118:5000/users',
        {method: 'GET'})
        //.then(resp => resp.json)
        .then(article => {setData(article)})
    }, [])
*/

    const navigation = useNavigation();
    const data = [
        {id: 1, title: 'First Title', body: 'First Body'},
        {id: 2, title: 'Second Title', body: 'Second Body'},
        {id: 3, title: 'Third Title', body: 'Third Body'}
    ]

    const renderData = (item) =>{
        return(
          
            <Card style = {styles.cardStyle}>
                <Text style = {{fontSize: 20}}>{item.title}</Text>
                <Text>{item.body}</Text>
            </Card>
          
        )
    }

  return (
    <View style ={{flex:1}}>
      <View style={styles.textBox}>
        <Image source={require('./bungotext.png')} style={styles.logo} />
    </View>

    <Taskbar></Taskbar>
      <View>
        <Text>Welcome back {props.route.params.email} !</Text> 
        {/*change to name, not email */}

        <FlatList
          data ={data}
          renderItem = {({item}) => {
              return renderData(item)
          }}
          keyExtractor = {item => `${item.id}`}
          numColumns={2}
        />
      </View>

      <FAB
        style = {styles.fab}
        small = {false}
        icon = "plus"
        theme={{colors:{accent:"green"}}}
        // onPress ={() => console.log("Pressed")}
        onPress = {() => navigation.navigate('AccountSettings')}
      />
    </View>
  )

}

const styles = StyleSheet.create({
    cardStyle: {
      marginTop: 10,
      marginLeft: 10,
      paddingTop: 10,
      width: '45%',
      height: '90%',
      flexDirection: 'row'
    },
    fab:{
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0

    },
    textBox: {
      marginTop: 20,
      width: '100%',
      height: '10%',
      backgroundColor: '#191970',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      height: 75,
      width: 220,
      alignItems: 'center',
      justifyContent: 'center'
    }
  });

export default ManageListings
