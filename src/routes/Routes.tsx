
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Trends from '../pages/Trends';
import BottomTabs from './BottomTab';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={BottomTabs} />
        {/* <Stack.Screen name="Trends" component={Trends} /> */}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;


