/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginPage } from '../LoginPage';
import ChangePW from '../ChangePW';
import ForgotPW from '../ForgotPW';
import EntryPage from '../EntryPage';



const Stack = createStackNavigator();

const AppNavigation = () => {
  return <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
             <Stack.Screen name="Entry" component={EntryPage} />
             <Stack.Screen name="Login" component={LoginPage} />
             <Stack.Screen name="ChangeP" component={ChangePW} />
             <Stack.Screen name="ForgotP" component={ForgotPW} />
        </Stack.Navigator>
  </NavigationContainer>;
};

export default AppNavigation;


