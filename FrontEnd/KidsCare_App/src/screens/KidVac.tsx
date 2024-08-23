import { View, Text , Image, TextInput,TouchableOpacity,  StyleSheet, Alert} from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useState } from 'react';

export default function KidVac() {
  const [givenVaccines, setGivenVaccines] = useState('');
  const [toBeGivenVaccines, setToBeGivenVaccines] = useState('');

  const handleEditVaccines = () => {
    
    Alert.alert('Edit Vaccines', 'Implement the logic to edit vaccines.');
  };
  const handleSaveVaccines = () => {
 
    Alert.alert('Save Vaccines', 'Vaccines have been saved.');
  };

  return (
    <KeyboardAwareScrollView>
    <View>
      <Image
        style={{
          width:"100%",
          position: 'absolute',
          height:763
        }}
        source={require('../assests/img/back.png')}
        resizeMode="contain"
      />
      <View style={{position:'absolute',marginTop:43,marginLeft:56}}>
        <Image 
        style={{
          width:56,
          height:56
        }}source={require('../assests/img/ellipse-52.png')}/>
        <Text style={{
          fontSize:16,
          marginTop:19,
          fontWeight:'600'
        }}>Child name</Text>
         <Text style={{
          marginTop:1,
          fontWeight:'600'
        }}>10 March,2024</Text>
      </View>
    
      <View style={{
        position:'absolute',
        marginLeft:75,
        marginTop:205
      }}>
        <Text style={{
            fontWeight:'600',
            fontSize:15
        }}>Vaccination Schedule Chart</Text>
      </View>

      <View style={{
        marginLeft:50,
        marginTop:260,
        position:'absolute'
      }}>
        <Text style={styles.text}>Vaccines given</Text>
        <TouchableOpacity onPress={handleEditVaccines}>
        <Image style={{
            position:'absolute',
            marginLeft:210,
            height:40,
            marginTop:-35
        }}source={require('../assets/img/image-17.png')}
        resizeMode='contain'/>
        </TouchableOpacity>
      </View>

   
      <View style={{
        marginLeft:50,
        marginTop:316
      }}>
        <TextInput style={{
            backgroundColor:'#D9D9D9',
            height:145,
            width:246,
            borderRadius:10,
        }}multiline={true}> 
        </TextInput>
        <TouchableOpacity style={{marginLeft:195,marginTop:-22,}} onPress={handleSaveVaccines}>
          <Text style={styles.button}>Save</Text>
        </TouchableOpacity>
      </View>

      <View style={{
        marginLeft:50,
        marginTop:497,
        position:'absolute'
      }}>
        <Text style={styles.text
        }>vaccines to be given</Text>
        <TouchableOpacity onPress={handleEditVaccines}>
        <Image style={{
            position:'absolute',
            marginLeft:210,
            height:40,
            marginTop:-35
        }}source={require('../assets/img/image-17.png')}
        resizeMode='contain'/>
        </TouchableOpacity>
      </View>

      <View style={{
        marginLeft:50,
        marginTop:90
      }}>
        <TextInput style={{
            backgroundColor:'#D9D9D9',
            height:145,
            width:246,
            borderRadius:10,
        }}multiline={true}> 
        </TextInput>
        <TouchableOpacity style={{marginLeft:195,marginTop:-22,}} onPress={handleSaveVaccines}>
          <Text style={styles.button}>Save</Text>
        </TouchableOpacity>
      </View>
      <View style={{
        marginTop:49,
         width:"100%",
         height:20,
         backgroundColor:'#179BE8'
      }}>
      </View>
    </View>
    </KeyboardAwareScrollView>

  )
}

const styles = StyleSheet.create({
    text: {
      backgroundColor: '#E0F0FF',
      padding: 10,
      borderRadius: 10,
      width:190,
      height:40,
      textAlign: 'center',
      fontWeight: 'bold',
    },

     button: {
      backgroundColor:'#179BE8',
      paddingTop:1,
      borderRadius:10,
      width:50,
      height:21,
      fontWeight:'700',
      textAlign:'center'
     }
  });

