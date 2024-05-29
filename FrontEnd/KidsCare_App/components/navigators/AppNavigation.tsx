import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import EntryPage from '../EntryPage';
import ChangePW from '../ChangePW';
import ForgotPW from '../ForgotPW';
import LoginPage from '../LoginPage';


const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
  <Stack.Navigator screenOptions={{headerShown:false}}>

       <Stack.Screen name="Entry" component={EntryPage} />
       <Stack.Screen name="Login" component={LoginPage} />
       <Stack.Screen name="ChangeP" component={ChangePW} />
       <Stack.Screen name="ForgotP" component={ForgotPW} />

  </Stack.Navigator>
  );
}

export default AppNavigation