import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {MainScreen} from '../screens/MainScreen';
import {MealDetailsScreen} from '../screens/MealDetailsScreen';
import {CategoryScreen} from '../screens/CategoryScreen';
import {FavouritesScreen} from '../screens/FavouritesScreen';
import Colors from '../UI/constants/Colors';
import {Ionicons, MaterialCommunityIcons} from 'react-native-vector-icons';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// const DefaultStackNavOption = {
//   headerTitleAlign: 'center',
//   headerStyle: {
//     backgroundColor: Colors.primayColor,
//   },
//
//   headerTintColor: Colors.defaultColor,
//   headerTitleStyle: {
//     fontFamily: 'OpenSans-Bold',
//     fontSize: 24,
//     paddingHorizontal: 20,
//   },
// };

const MainStack = createStackNavigator();

function MainNavigator() {
  return (
    <MainStack.Navigator
      initialRouteName="Main"
      // screenOptions={{DefaultStackNavOption}}
    >
      <MainStack.Screen name="Main" component={MainScreen} />

      <MainStack.Screen name="Category" component={CategoryScreen} />

      <MainStack.Screen name="MealDetails" component={MealDetailsScreen} />
    </MainStack.Navigator>
  );
}

const FacouritesStack = createStackNavigator();

function FavouritesNavigator() {
  return (
    <FacouritesStack.Navigator>
      <FacouritesStack.Screen name="Favourite" component={FavouritesScreen} />
      <FacouritesStack.Screen
        name="MealDetails"
        component={MealDetailsScreen}
      />
    </FacouritesStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={MainNavigator} />
        <Tab.Screen name="Favourite" component={FavouritesNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// const BottomNavigator = createBottomTabNavigator(
//   {
//     Home: {
//       screen: MainNavigator,
//     },
//     Favourite: {
//       screen: FavouritesNavigator,
//       navigationOptions: {
//         tabBarLabel: 'Favourite',
//         // tabBarIcon: info => (
//         //   <Ionicons name="ios-star" size={25} color={info.tintColor} />
//         // ),
//       },
//     },
//   },
//   {
// tabBarOptions: {
//   activeTintColor: '#ffffff',
//   activeBackgroundColor: '#304ffe',
//   inactiveTintColor: '#ffffff',
//   inactiveBackgroundColor: Colors.secondaryColor,
// },
//   },
// );
// const DrawerNavigator = createDrawerNavigator({
//   PostTabs: {
//     screen: BottomNavigator,
//   },
//   About: {
//     screen: MealDetailsScreen,
//   },
//   Create: CategoryScreen,
// });
export const AppNavigation = App;
