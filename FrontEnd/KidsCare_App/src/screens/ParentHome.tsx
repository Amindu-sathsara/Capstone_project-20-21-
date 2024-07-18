import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import { NavigationContainer } from '@react-navigation/native'
import Footer from '../components/Footer'

const ParentHome: React.FC<{ navigation: any }> = ({navigation}) => {
  return (
    <View style={sty.container}>

      <Image style={{
        width: '100%' ,
        height: '100%' , 
        position: 'absolute'
        }} 
        source={
          require('../../assests/img/back.png')
        }
        resizeMode='cover'/>

        <ParentTop/>

//date should be updated
      <View style={sty.buttonContainer}>

        <TouchableOpacity style={sty.button} activeOpacity={0.5} onPress={() => navigation.navigate('')}>
          <Image style= {sty.iconImg} source={require('../../assests/img/profile.png')}/>
          <Text style={{fontSize: 11, color: '#000'}}>Profiles</Text>
        </TouchableOpacity>

        <TouchableOpacity style={sty.button} activeOpacity={0.5} onPress={() => navigation.navigate('Announcements')}>
          <Image style= {sty.iconImg} source={require('../../assests/img/announce.png')}/>
          <Text style={{fontSize: 10, color: '#000'}}>Announcements</Text>
        </TouchableOpacity>

        <TouchableOpacity style={sty.button} activeOpacity={0.5} onPress={() => navigation.navigate('VacDetails')}>
          <Image style= {sty.iconImg} source={require('../../assests/img/vaccine.png')}/>
          <Text style={{fontSize: 11, color: '#000'}}>Vaccine Details</Text>
        </TouchableOpacity>

        <TouchableOpacity style={sty.button} activeOpacity={0.5} onPress={() => navigation.navigate('BMI')}>
          <Image style= {sty.iconImg} source={require('../../assests/img/bmi.png')}/>
          <Text style={{fontSize: 11, color: '#000'}}>BMI Calculator</Text>
        </TouchableOpacity>

      </View>

      <Footer navigation={navigation}/>

    </View>
  )
}

export default ParentHome

export function ParentTop() {
  return(
    <View>
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

const sty = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 30,
    marginTop: 20
  },

  button: {
    width: 120,
    margin: 10,
    padding: 20,
    backgroundColor: '#9DFFB3',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#179BE8' ,
    marginTop: 30
  },

  iconImg: {
    height: 50,
    width: 50
  }

});


