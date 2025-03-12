import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import FeedScreen from '../pages/FeedScreen';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="FeedScreen">

        <Stack.Screen name="FeedScreen" component={FeedScreen} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;


