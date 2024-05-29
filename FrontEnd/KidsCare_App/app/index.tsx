import React from 'react'
import 'react-native-gesture-handler';
import {StyleSheet, View} from 'react-native';
import AppNavigation from '@/components/navigators/AppNavigation';

const index = () => {
  return (
    <View style = {sty.container}>
      <AppNavigation/>
     
    </View>
  )
}
const sty = StyleSheet.create({
    container:{
      flex:1,
    },
  });
export default index