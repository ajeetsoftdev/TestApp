import {Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ICONS from '../assets/images/_index';
import Home from '../pages/Home';
import Trends from '../pages/Trends';



const Tab = createBottomTabNavigator();

const BottomTabs = () => {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({



        tabBarIcon: ({ focused }) => {
            let iconSource;
  
            if (route.name === 'Home') {
              iconSource = focused
                ? ICONS.home // Active home icon
                : ICONS.home // Inactive home icon
            } 
            else if(route.name === 'Trends'){
              iconSource = focused
              ? ICONS.trends 
              : ICONS.trends 
            }
          
  
            // Return the custom image for the tab
            return (
              <Image
                source={iconSource}
                style={{marginTop:5, width: 25, height: 25, tintColor :focused?'#fff':'gray'}} // Adjust icon size as necessary
                resizeMode="contain"
              />
            );
          },


        tabBarStyle: { backgroundColor: '#181818' },  // Background color for tab bar
        tabBarActiveTintColor: '#fff',  // Text/icon color when active
        tabBarInactiveTintColor: 'gray',  // Text/icon color when inactive
        // tabBarActiveBackgroundColor: '#6200ea', // Background color of the active tab
        // tabBarInactiveBackgroundColor: '#f8f9fa', // Background color of inactive tabs
        headerShown:false,

      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Trends" component={Trends} />
    </Tab.Navigator>
  );
};

export default BottomTabs
