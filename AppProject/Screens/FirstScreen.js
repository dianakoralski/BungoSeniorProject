import {Text, View, StyleSheet, Image} from 'react-native';
import {FAB} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import LinkButton from '../components/LinkButton.js';

function FirstScreen(props) {
  const navigation = useNavigation();

  return (
    <View style ={{flex:1, backgroundColor: "#191970"}}>
      <View style ={{flex:1, backgroundColor: "#191970"}}>
        <Image source={require('./bungotext.png')} style={{width: 300, height: 100, marginTop: 100, marginLeft:30}}/>
        <Text style={{width: 300, height: 100, marginTop: 10, marginLeft:30, color: "white", textAlign: "center", fontSize: 20}}>
          Leading Real Estate Forward, One Open House at a Time
        </Text>
      
        <FAB
          style = {styles.fab}
          small = {false}
          label ="Login"
          labelStyle={{ fontSize: 60 }}
          theme={{colors:{accent:"green"}, roundness: 20}}
          onPress ={() => navigation.navigate('Login')}>
        </FAB>
      </View >

      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}>Don't have an account?</Text>
        <Text>__</Text>
        < LinkButton
            style = {{right: 0}}
            text="Get Started"
            color ='orange'
            goTo='Create Account'
            fontSize={21}/>
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#123',
    alignItems: 'center',
    justifyContent: 'center',
  },
    fab:{
      marginTop: 10,
      width: 200,
      marginLeft: 88,
    },
    bottomContainer: {
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'flex-end', 
      position: 'absolute', 
      bottom: 0, 
      left: 0, 
      right: 0
    },
    bottomText:
    {color: 'white',
    left: 5, 
    bottom:0, 
    fontWeight: 'bold', 
    fontSize: 21, 
    width: 230}
    
  });

export default FirstScreen;
