import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function EntryPage(props: any) {

  const stack = props.navigation;
  function gotoLogin(){
     stack.navigate('Login')
  }

  return (
    <View style={{flex: 1}}>
      <Image
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}
        source={require('../assets/images/Firstpage.jpg')}
        resizeMode="contain"
      />
      <View
        style={{flex: 1, alignItems: 'center', marginLeft: 241, marginTop: 80}}>
        <Image
          style={{
            height: 200,
            width: 769,
            position: 'relative',
          }}
          source={require('../assets/images/Logonew1.png')}
        />
      </View>
      <View
        style={{marginTop: 53, marginLeft: 53, flex: 1, position: 'relative'}}>
        <Text style={{fontSize: 45, fontWeight: '900', fontFamily: 'serif',color:'white'}}>
          Welcome to
        </Text>
        <View style={{marginLeft: 30}}>
          <Text style={{fontSize: 45, fontWeight: '900', fontFamily: 'serif',color:'white'}}>
            KidsCare
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 80,
          flex: 1,
        }}>
        <TouchableOpacity style={styles.button} 
        onPress={gotoLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(16, 170, 237, 1)',
    padding: 10,
    borderRadius: 23,
    width: 296,
    height: 54,
    marginLeft: 34,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    fontFamily: '',
  },
});

