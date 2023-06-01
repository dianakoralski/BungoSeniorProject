import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, FlatList, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Taskbar from '../components/Taskbar';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ShowingButton from '../components/ShowingButton';
import State from '../components/State';
import axios from 'axios';

// Navigated from Login, NewAccount, TaskBar, BackButton
function Home(props) {

  const navigation = useNavigation();
  const [errorMessage, setErrorMessage] = useState("")
  const [data, setData] = useState(null);
  const [refreshing, setRefreshing] = useState(true);


  // Refresh data set when properties are added and removed
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  if (refreshing)
  {
    try {
        axios.get('http://127.0.0.1:5000/properties', {})
            .then((response)=>{
                setData(response.data.properties);
                setRefreshing(false);
            });
    }
    catch (error) {
        console.log(JSON.stringify(error));
        setErrorMessage("Get user properties failed");
        setData([]);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.textBox}>
        <Image source={require('./bungotext.png')} style={styles.logo} />
      </View>

      <View style={{ flex: 1 }}>
        {props.route.params?.name?.length > 0 && <Text style = {{fontSize: 30, textAlign: 'center'} }>Welcome back {State.getInstance().CurrentUser.name}!</Text>}
       
       {/* Display properties from database in list*/}
        <FlatList
          refreshing = {refreshing}
          onRefresh={onRefresh}
          data={data}
          renderItem={({ item }) => (
            <ShowingButton propertyData={item}/>
          )}
           keyExtractor={(item) => `${item._id}`}
        />
      </View>

      <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <Taskbar/>
      </View>
      
      {/* Display settings button */}
      <View style={styles.gearStyle}>
        <TouchableOpacity onPress={() => navigation.navigate('AccountSettings')}>
          <Icon name="gear" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  },
  gearStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    position: 'absolute',
    top: '7%',
    right: '4%'
  }
});

export default Home;
