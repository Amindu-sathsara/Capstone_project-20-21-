import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'

function LoginButton(p: any){

  const stack = p.stack;

  function gotoLogin() {
    stack.navigate('Login')
  }

    return (
      <View>
        <TouchableOpacity activeOpacity={0.6} onPress={gotoLogin}>
          <View style={{ 
            backgroundColor:'#0796FA', 
            borderRadius: 30, 
            height: 50, 
            marginHorizontal: 40,
            justifyContent: 'center',
            alignItems: 'center' ,
            marginTop: 20 }}>
    
            <Text style={{
              fontSize: 30,
              fontWeight: 600,
              color: 'white'
            }}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

const FrontPage = (props: any) => {

  const stack = props.navigation;

  return (
    <View style={sty.container}>

      <Image style={{
        width: '100%' ,
        height: '100%' , 
        position: 'absolute'
      }} 
      source={
        require('../../assests/img/fpg.jpg')
      }
      resizeMode='cover'/>

      <Image style={{
        width: 550 ,
        height: 300,
        position: 'relative' 
      }}
      source={
        require('../../assests/img/Logonew.png')
      }/>

      <Text style={{
        fontSize: 50,
        color: 'white',
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 100
      }}>Welcome to KidsCare</Text>

      <LoginButton stack={stack}/>

    </View>
  )
}

export default FrontPage

const sty = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
      }
});


