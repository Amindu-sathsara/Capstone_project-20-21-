import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>

      <Image style={{
        width: '100%' ,
        height: '100%' , 
        position: 'absolute'
        }} 
        source={
          require('../../assests/img/back.png')
        }
        resizeMode='cover'/>

<Image style={{
        width: 75 ,
        height: 75 , 
        borderRadius: 50,
        marginLeft: 50,
        marginTop: 10
        }} 
        source={
          require('../../assests/img/parent.jpg')
        }/>

      <Text style={{
        fontSize: 20,
        color: '#000',
        marginLeft: 50
        }}>Hello, parentName
      </Text>

      <Text style={{
        fontSize: 16,
        color: '#000',
        marginLeft: 50
        }}>10 March, 2023
      </Text>

    </View>
  )
}

export default Header

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
      },

})
