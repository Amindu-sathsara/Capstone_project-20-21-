import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import FrontPage from '../FrontPage';
import LoginPage from '../LoginPage';
import ChangePage from '../ChangePage';
import ForgotPage from '../ForgotPage';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={
            {
                headerShown: false,
            }
        }>
            <Stack.Screen name="Front" component={FrontPage} />
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="ChangePw" component={ChangePage} />
            <Stack.Screen name="ForgotPw" component={ForgotPage} />
        </Stack.Navigator>

    </NavigationContainer>
  );
};

export default AppNavigation;

