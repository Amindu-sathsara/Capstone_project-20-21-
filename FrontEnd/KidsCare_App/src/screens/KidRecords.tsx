import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

export default function KidRecords() {
    return (
      <View>
         <Image
          style={{
            width:"100%",
            position: 'absolute',
            justifyContent:'center',
            height:763
          }}
          source={require('../assests/img/back.jpg')}
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
          marginLeft:50,
          marginTop:219,
          position:'absolute'
        }}>
          <Text style={styles.button}>Records</Text>
          <TouchableOpacity>
          <Image style={{
             position:'absolute',
              marginLeft:210,
              height:35,
              marginTop:-36
          }}source={require('../assests/img/image-17.png')}
          resizeMode='contain'/>
          </TouchableOpacity>
        </View>
        
        <View style={{
          marginLeft:50,
          marginTop:310
        }}>
          <TextInput style={{
              backgroundColor:'#D9D9D9',
              height:390,
              width:246,
              borderRadius:10
          }}> 
          </TextInput>
        </View>
  
      </View>
    )
  }
  const styles = StyleSheet.create({
      button: {
        backgroundColor: '#E0F0FF',
        padding: 10,
        borderRadius: 10,
        width:170,
        height: 40,
        textAlign: 'center',
        fontWeight: 'bold',
      }
    });
  