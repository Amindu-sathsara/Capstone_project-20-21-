import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import FrontPage from './src/screens/FrontPage';
import LoginPage from './src/screens/LoginPage';
import ForgotPage from './src/screens/ForgotPage';
import ChangePage from './src/screens/ChangePage';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/screens/Navigations/AppNavigation';
import 'react-native-gesture-handler';
import ParentHome from './src/screens/ParentHome';
import Announcements from './src/screens/Announcements';
import VacDetails from './src/screens/VacDetails';
import BMI from './src/screens/BMI';
import AppNavParent from './src/screens/Navigations/AppNavParent';
import KidProfile from './src/screens/KidVac';
import KidVac from './src/screens/KidVac';
import KidAllergy from './src/screens/KidAllergy';
//import files

function App(): JSX.Element {

  return (
    <View style={sty.container}>
     {/*<AppNavigation/>
    
      <FrontPage/>*/}
      {/*<LoginPage/>*/}
      {/*<ForgotPage/>*/}
      {/*<ChangePage/>
      <ParentHome/>
      <Announcements/>
      <VacDetails/>
      <BMI/>
      <AppNavParent/>*/}

        <KidAllergy/>

    </View>
  );
}

const sty = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});

export default App;
