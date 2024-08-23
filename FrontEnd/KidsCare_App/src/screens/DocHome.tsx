import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import {SearchBar} from 'react-native-elements';
import { useState } from 'react';

export default function DocHome() {

  return (
    <View style={{flex:1}}>
      <Image
        style={{
          width:"100%",
          position: 'absolute',
          height:763
        
        }}
        source={require('../assets/images/Second_Interface.jpg')}
        resizeMode="contain"
      />
        <View style={{position:'absolute',marginTop:43,marginLeft:56}}>
        <Image 
        style={{
          width:56,
          height:56
        }}source={require('../assets/ellipse-51.png')}/>
        <Text style={{
          fontSize:12,
          marginTop:13,
          fontWeight:'300'
        }}>MBBS, Ph.D (Japan)</Text>
         <Text style={{
           fontSize:12,
          marginTop:1,
          fontWeight:'300'
        }}>Post doctoral fellow</Text>
         <Text style={{
           fontSize:12,
          marginTop:1,
          fontWeight:'300'
        }}>(Japan & USA)</Text>
      </View>
     
     <View style={{marginTop:49,marginLeft:190,position:'absolute'}}>
        <Text style={{fontSize:19,fontWeight:'500'}}>
            Hello Doctor!
        </Text>
        <Text style={{fontSize:15,fontWeight:'500'}}>
            10 March,2024
        </Text>
     </View>
       
      <View style={{
        marginLeft:40,
        marginTop:196,
        width:260,
        height:43,
        backgroundColor:'#D9D9D9',
        borderRadius:30,
      }}>
        <TextInput placeholder='Search here...' style={{marginLeft:5,
          width:210,
          height:37,
          backgroundColor:'#D9D9D9',
          borderRadius:30,
          position:'absolute'
        }}></TextInput>
      </View>

<View style={{position:'absolute'}}>

     <View style={{marginLeft:23,marginTop:265,
      width:145,
      height:145,
      borderRadius:15,
      backgroundColor:'#E0F0FF',
     }}>
       <Image style={{
      marginLeft:30,
      marginTop:10
    }}source={require('../assets/image-21.png')}/>
    <View style={{marginTop:9,height:2,width:145,backgroundColor:'#179BE8'}}/>
    <Text style={{textAlign:'center',fontWeight:'500'}}>Name 01</Text>
    <Text style={{textAlign:'center',fontWeight:'500'}}>Index o1</Text>
     </View>

     <View style={{marginLeft:23,marginTop:10,
      width:145,
      height:145,
      borderRadius:15,
      backgroundColor:'#E0F0FF',
     }}>
    <Image style={{
      marginLeft:30,
      marginTop:10
    }}source={require('../assets/image-21.png')}/>
    <View style={{marginTop:9,height:2,width:145,backgroundColor:'#179BE8'}}/>
    <Text style={{textAlign:'center',fontWeight:'500'}}>Name 01</Text>
    <Text style={{textAlign:'center',fontWeight:'500'}}>Index o1</Text>
     </View>

     <View style={{marginLeft:23,marginTop:10,
      width:145,
      height:145,
      borderRadius:15,
      backgroundColor:'#E0F0FF',
     }}>
      <Image style={{
      marginLeft:30,
      marginTop:10
    }}source={require('../assets/image-21.png')}/>
    <View style={{marginTop:9,height:2,width:145,backgroundColor:'#179BE8'}}/>
    <Text style={{textAlign:'center',fontWeight:'500'}}>Name 01</Text>
    <Text style={{textAlign:'center',fontWeight:'500'}}>Index o1</Text>
     </View>

</View>

<View style={{position:'absolute'}}>
      <View style={{marginLeft:190,marginTop:265,
      width:145,
      height:145,
      borderRadius:15,
      backgroundColor:'#E0F0FF',
     }}>
       <Image style={{
      marginLeft:30,
      marginTop:10
    }}source={require('../assets/image-21.png')}/>
    <View style={{marginTop:9,height:2,width:145,backgroundColor:'#179BE8'}}/>
    <Text style={{textAlign:'center',fontWeight:'500'}}>Name 01</Text>
    <Text style={{textAlign:'center',fontWeight:'500'}}>Index o1</Text>
     </View>

     <View style={{marginLeft:190,marginTop:10,
      width:145,
      height:145,
      borderRadius:15,
      backgroundColor:'#E0F0FF',
     }}>
       <Image style={{
      marginLeft:30,
      marginTop:10
    }}source={require('../assets/image-21.png')}/>
    <View style={{marginTop:9,height:2,width:145,backgroundColor:'#179BE8'}}/>
    <Text style={{textAlign:'center',fontWeight:'500'}}>Name 01</Text>
    <Text style={{textAlign:'center',fontWeight:'500'}}>Index o1</Text>
     </View>

     <View style={{marginLeft:190,marginTop:10,
      width:145,
      height:145,
      borderRadius:15,
      backgroundColor:'#E0F0FF',
     }}>
      <Image style={{
      marginLeft:30,
      marginTop:10
    }}source={require('../assets/image-21.png')}/>
    <View style={{marginTop:9,height:2,width:145,backgroundColor:'#179BE8'}}/>
    <Text style={{textAlign:'center',fontWeight:'500'}}>Name 01</Text>
    <Text style={{textAlign:'center',fontWeight:'500'}}>Index o1</Text>
     </View>

</View>

    </View>
  )
}
