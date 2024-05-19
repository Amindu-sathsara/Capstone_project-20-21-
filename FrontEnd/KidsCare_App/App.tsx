/* eslint-disable prettier/prettier */
import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, View} from 'react-native';
import EntryPage from './src/components/EntryPage';




function App(): React.JSX.Element {
  return (
   <View style = {sty.container}>
   <EntryPage/>
   </View>
  );
}
const sty = StyleSheet.create({
  container:{
    flex:1,
  },
});

export default App;
