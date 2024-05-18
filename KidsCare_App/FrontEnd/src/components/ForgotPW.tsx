/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function ForgotPW() {
  return (
    <View style={{flex: 1}}>
      <Image
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}
        source={require('../../assets/images/Appinterface.jpg')}
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
            fontSize: 16,
            fontWeight: '700',
            color: 'black',
          }}
          placeholder="Username:"
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
          marginTop: 20,
        }}>
        <TextInput
          style={{
            fontSize: 16,
            fontWeight: '700',
            color: 'black',
          }}
          placeholder="Password:"
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
          marginTop: 20,
        }}>
        <TextInput
          style={{
            fontSize: 16,
            fontWeight: '700',
            color: 'black',
          }}
          placeholder="Confirm Password:"
          placeholderTextColor={'black'}
        />
      </View>
      <View
        style={{
          marginTop: 56,
        }}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Update</Text>
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
        height: 49,
        marginLeft: 54,
      },
      buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
      },
});
