import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React from 'react';
  
  
  export default function LoginPage(props: any) {
   
    const stack = props.navigation;

    function gotoFP(){
      stack.navigate('ForgotP')
    }

    function gotoCP(){
      stack.navigate('ChangeP')
    }

    return (
      <View style={{ flex: 1}}>
        <Image
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
          source={require('../assets/images/APP Interface.jpg')}
          resizeMode="contain"
        />
        <View
          style={{
            backgroundColor: 'rgba(217, 217, 217, 1)',
            width: 300,
            borderRadius: 15,
            borderColor: 'rgba(16, 170, 237, 1)',
            borderWidth: 2,
            marginLeft: 30,
            marginTop: 250,
          }}>
          <TextInput
            style={{
              fontSize: 19,
              fontWeight: '700',
              color: 'black',
              height:45,
              marginLeft:5
            }}
            placeholder="Username :"
            placeholderTextColor={'black'}
          />
        </View>
  
        <View
          style={{
            backgroundColor: 'rgba(217, 217, 217, 1)',
            width: 300,
            borderRadius: 15,
            borderColor: 'rgba(16, 170, 237, 1)',
            borderWidth: 2,
            marginLeft: 30,
            marginTop: 31,
          }}>
          <TextInput
            style={{
              fontSize: 19,
              fontWeight: '700',
              color: 'black',
              height:45,
              marginLeft:5
            }}
            placeholder="Password :"
            placeholderTextColor={'black'}
          />
        </View>
        <View
          style={{
            marginTop: 40,
          }}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 25,
          }}>
          <TouchableOpacity style={styles.button} 
          onPress={gotoFP}>
            <Text style={styles.buttonText}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 25,
          }}>
          <TouchableOpacity style={styles.button} 
          onPress={gotoCP}>
            <Text style={styles.buttonText}>Change Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    button: {
      backgroundColor: 'rgba(16, 170, 237, 1)',
      padding: 10,
      borderRadius: 30,
      width: 250,
      height: 45,
      marginLeft: 54,
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 19,
    },
  });
  