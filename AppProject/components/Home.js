import React, {useState, useEffect} from 'react';
import {Text, View, Button, FlatList, StyleSheet, Image} from 'react-native';
import {Card, FAB} from 'react-native-paper';

function Home(props) {

   // const [data1, setData]= useState([])
/*
    useEffect(() => {
        fetch('http://192.168.1.118:5000/users',
        {method: 'GET'})
        //.then(resp => resp.json)
        .then(article => {setData(article)})
    }, [])
*/
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
      <Image source={require('./bungotext.png')} style={{width: 300, height: 100}}/>
      <FlatList
        data ={data}
        renderItem = {({item}) => {
            return renderData(item)
        }}
        keyExtractor = {item => `${item.id}`}
      />

      <FAB
        style = {styles.fab}
        small = {false}
        icon = "plus"
        theme={{colors:{accent:"green"}}}
        onPress ={() => console.log("Pressed")}
      />
    </View>
  )

}

const styles = StyleSheet.create({
    cardStyle: {
      margin: 10,
      padding: 10
    },
    fab:{
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0

    }
  });

export default Home
