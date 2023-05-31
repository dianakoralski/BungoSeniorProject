import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Button, FlatList, StyleSheet, Image } from 'react-native';
import { Card, FAB } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Taskbar from './Taskbar';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ShowingButton from './ShowingButton';
import State from './State';
import axios from 'axios';

function Home(props) {
  console.log(State.getInstance().CurrentUser)
  const navigation = useNavigation();
  const [errorMessage, setErrorMessage] = useState("")

  const [data, setData] = useState(null);
  console.log("Data is " + JSON.stringify(data));
  if (data == null)
  {
    console.log("Data is null");
    try {
        axios.get('http://127.0.0.1:5000/properties', {})
            .then((response)=>{
                //console.log("Response: "+ JSON.stringify(response.data.properties));
                setData(response.data.properties);
            });
    }
    catch (error) {
        console.log(JSON.stringify(error));
        setErrorMessage("Get user properties failed");
        setData([]);
    }
  }

  const renderData = (item) => {
    return (
      <Card style={styles.cardStyle}>
        <Text style={{ fontSize: 20 }}>{item.title}</Text>
        <Text>{item.body}</Text>
      </Card>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.textBox}>
        <Image source={require('./bungotext.png')} style={styles.logo} />
      </View>

      <View style={{ flex: 1 }}>
        {props.route.params?.email?.length > 0 && <Text style = {{fontSize: 30, textAlign: 'center'} }>Welcome back {State.getInstance().CurrentUser.email}!</Text>}
        {/* change to name, not email */}
        {/* <ShowingButton address="123 Bond St." mlsNumber="43" goTo={FirstScreen} /> */}

        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ShowingButton
              address={item.address}
              mlsNumber={item.mlsNumber}
              image = {item.images?.find(x => true)}
              goTo='PropertyDetails'
            />
          )}
          keyExtractor={(item) => `${item.id}`}
        />
      </View>

      <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <Taskbar />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          position: 'absolute',
          top: '7%',
          right: '4%'
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate('AccountSettings')}>
          <Icon name="gear" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
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
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 70
  },
  textBox: {
    marginTop: 20,
    width: '100%',
    height: '10%',
    backgroundColor: '#191970',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    height: 75,
    width: 220,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Home;
