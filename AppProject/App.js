import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import Login from './components/Login';
import FirstScreen from './components/FirstScreen';
import NewAccount from './components/NewAccount';
import ManageListings from './components/ManageListings';
import NewListing from './components/NewListing';
import PropertyDetails from './components/PropertyDetails';
import Contants from 'expo-constants';
import AccountSettings from './components/AccountSettings';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 

const Stack = createStackNavigator() 

class App extends Component {
  constructor () {
    super();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Stack.Navigator screenOptions = {{headerShown: false}}> 
          <Stack.Screen name="First" component={FirstScreen}/>
          <Stack.Screen name="Home" options={{title: 'Welcome'}} component={Home}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Create Account" component={NewAccount}/>
          <Stack.Screen name="AccountSettings" component={AccountSettings}/>
          <Stack.Screen name="ManageListings" component={ManageListings}/>
          <Stack.Screen name="NewListing" component={NewListing}/>
          <Stack.Screen name="PropertyDetails" component={PropertyDetails}/>
        </Stack.Navigator>
      </View>
    );
  }
}

export default() => {
  return(
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#123',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Contants.statusBarHeight
  },
});
