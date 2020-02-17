import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {MainScreen} from '../screens/MainScreen';
import {MealDetailsScreen} from '../screens/MealDetailsScreen';
import {CategoryScreen} from '../screens/CategoryScreen';
import {FavouritesScreen} from '../screens/FavouritesScreen';
import Colors from '../UI/constants/Colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const MainStack = createStackNavigator();

function MainNavigator() {
  return (
    <MainStack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primaryColor,
        },
        headerTintColor: Colors.defaultColor,
        headerTitleStyle: {
          fontFamily: 'OpenSans-Bold',
          fontSize: 24,
          paddingHorizontal: 20,
        },
        headerTitleAlign: 'center',
      }}>
      <MainStack.Screen name="Main" component={MainScreen} />
      <MainStack.Screen
        name="Category"
        component={CategoryScreen}
        options={({route}) => ({title: route.params?.categoryTitle})}
      />
      <MainStack.Screen
        name="MealDetails"
        component={MealDetailsScreen}
        options={({route}) => ({title: route.params?.mealTitle})}
      />
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

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.defaultColor,
        activeBackgroundColor: Colors.primaryColor,
      }}>
      <Tab.Screen
        name="Home"
        component={MainNavigator}
        options={{
          tabBarIcon: () => (
            <FontAwesome5
              name="utensils"
              size={25}
              color={Colors.secondaryColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouritesNavigator}
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name="star" size={25} color={Colors.secondaryColor} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export const AppNavigation = function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};
