// import {Image } from 'react-native'
// import React from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { ICONS } from '../assets/_index';
// import Dashboard from '../pages/home/Dashboard';
// import CustomerList from '../pages/customer/CustomerList';
// import Cart from '../pages/product/Cart';
// import Category from '../pages/category/Category';


// const Tab = createBottomTabNavigator();

// const BottomTabs = () => {

//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({



//         tabBarIcon: ({ focused }) => {
//             let iconSource;
  
//             if (route.name === 'Home') {
//               iconSource = focused
//                 ? ICONS.homeActive // Active home icon
//                 : ICONS.home // Inactive home icon
//             } 

//             if (route.name === 'Category') {
//               iconSource = focused
//                 ? ICONS.cateActive // Active home icon
//                 : ICONS.cate // Inactive home icon
//             }

//             if (route.name === 'Cart') {
//               iconSource = focused
//                 ? ICONS.cartActive // Active home icon
//                 : ICONS.cart // Inactive home icon
//             }

//             else if(route.name === 'Account'){
//               iconSource = focused
//               ? ICONS.userActive 
//               : ICONS.user 
//             }
           
  
//             // Return the custom image for the tab
//             return (
//               <Image
//                 source={iconSource}
//                 style={{marginTop:5, width: 25, height: 25, tintColor :focused?'#fff':'#fff'}} // Adjust icon size as necessary
//                 resizeMode="contain"
//               />
//             );
//           },


//         tabBarStyle: { backgroundColor: '#31C5BA' },  // Background color for tab bar
//         tabBarActiveTintColor: '#fff',  // Text/icon color when active
//         tabBarInactiveTintColor: '#fff',  // Text/icon color when inactive
//         // tabBarActiveBackgroundColor: '#6200ea', // Background color of the active tab
//         // tabBarInactiveBackgroundColor: '#f8f9fa', // Background color of inactive tabs
//         // headerShown:false,

//       })}
//     >
//       <Tab.Screen name="Home" component={Dashboard} options={{headerShown:false}} />
//       <Tab.Screen name="Category" component={Category} options={{headerShown:false}}/>
//       <Tab.Screen name="Cart" component={Cart} options={{headerShown:false}}/>
//       <Tab.Screen name="Account" component={CustomerList} options={{headerShown:false}} />
//     </Tab.Navigator>
//   );
// };

// export default BottomTabs
