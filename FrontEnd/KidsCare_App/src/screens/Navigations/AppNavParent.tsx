import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import ParentHome from '../ParentHome';
import Announcements from '../Announcements';
import VacDetails from '../VacDetails';
import BMI from '../BMI';
import { createStackNavigator } from '@react-navigation/stack';
import Footer from '../../components/Footer';
import Header from '../../components/Header';


const Stack = createStackNavigator();

const AppNavParent = (navigation: any) => {
  return (
    <NavigationContainer>

        <Stack.Navigator screenOptions={
            {
                headerShown: false,
            }
        }>

            <Stack.Screen name="ParentHome" component={ParentHome} />

            <Stack.Screen name="Announcements" component={Announcements} />

            <Stack.Screen name="VacDetails" component={VacDetails} />

            <Stack.Screen name="BMI" component={BMI} />

        </Stack.Navigator>
        
        <Footer navigation={navigation}/>
        
    </NavigationContainer>
  );
};

export default AppNavParent;

