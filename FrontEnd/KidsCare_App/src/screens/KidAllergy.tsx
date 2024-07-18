import { View, Text , Image, TextInput, Button, TouchableOpacity,  StyleSheet} from 'react-native'
import React from 'react'

export default function KidAllergy() {
  return (
    <View>
      <Image
        style={{
          width:"100%",
          position: 'absolute',
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
        marginTop:210,
        position:'absolute'
      }}>
        <Text style={{fontSize:16,fontWeight:'500'
        }}>Allergies of the child</Text>
        <TouchableOpacity>
        <Image style={{
            position:'absolute',
            marginLeft:210,
            height:40,
            marginTop:-23
        }}source={require('../assests/img/image-17.png')}
        resizeMode='contain'/>
        </TouchableOpacity>
      </View>

      <View style={{
        marginLeft:50,
        marginTop:253
      }}>
        <TextInput style={{
            backgroundColor:'#D9D9D9',
            height:145,
            width:246,
            borderRadius:10
        }}> 
        </TextInput>
      </View>

      <View style={{
        marginLeft:50,
        marginTop:450,
        position:'absolute'
      }}>
        <Text style={{fontSize:16,fontWeight:'500',width:170
        }}>Congenital diseases of 
        the child</Text>
        <TouchableOpacity>
        <Image style={{
            position:'absolute',
            marginLeft:210,
            height:40,
            marginTop:-30
        }}source={require('../assests/img/image-17.png')}
        resizeMode='contain'/>
        </TouchableOpacity>
      </View>

      <View style={{
        marginLeft:50,
        marginTop:111
      }}>
        <TextInput style={{
            backgroundColor:'#D9D9D9',
            height:145,
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
      backgroundColor: 'rgba(16, 170, 237, 1)',
      padding: 10,
      borderRadius: 30,
      width:50,
      height: 45,
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 9,
    },
    });

