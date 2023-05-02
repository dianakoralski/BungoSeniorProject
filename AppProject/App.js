import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import Login from './components/Login';
import FirstScreen from './components/FirstScreen';
import NewAccount from './components/NewAccount';
import Contants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 

const Stack = createStackNavigator() 

function App() {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator
        screenOptions = {{headerShown: true}}> 
      <Stack.Screen name="First" component={FirstScreen}/>
        <Stack.Screen name="Home" options={{title: 'Welcome'}} component={Home}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Create Account" component={NewAccount}/>
      </Stack.Navigator>
    </View>
  );
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
