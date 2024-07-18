import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Footer: React.FC<{ navigation: any }> = ({navigation}) => {

  return (
    <View style={sty.footer}>

      <TouchableOpacity onPress={() => navigation.navigate('ParentHome')}>
        <Image style= {sty.iconImg} source={require('../../assests/img/home.png')}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Image style= {sty.iconImg} source={require('../../assests/img/profile.png')}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Announcements')}>
        <Image style= {sty.iconImg} source={require('../../assests/img/announce.png')}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('VacDetails')}>
        <Image style= {sty.iconImg} source={require('../../assests/img/vaccine.png')}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('BMI')}>
        <Image style= {sty.iconImg} source={require('../../assests/img/bmi.png')}/>
      </TouchableOpacity>

    </View>
  )
};

const sty = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#179BE8',
        paddingVertical: 5,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },

    iconImg: {
      height: 40,
      width: 40
    }

})

export default Footer;
