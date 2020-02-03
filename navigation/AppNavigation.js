import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {MainScreen} from '../screens/MainScreen';
import {MealDetailsScreen} from '../screens/MealDetailsScreen';
import {CategoryScreen} from '../screens/CategoryScreen';
import {FavouritesScreen} from '../screens/FavouritesScreen';
import Colors from '../UI/constants/Colors';

const DefaultStackNavOption = {
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: Colors.primayColor,
  },

  headerTintColor: Colors.defaultColor,
  headerTitleStyle: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 32,
  },
};

const MainNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Category: CategoryScreen,
    MealDetails: {
      screen: MealDetailsScreen,
    },
  },

  {
    initialRouteName: 'Main',
    defaultNavigationOptions: DefaultStackNavOption,
  },
);
const FavouritesNavigator = createStackNavigator(
  {
    Favourite: FavouritesScreen,
    MealDetails: MealDetailsScreen,
  },
  {
    defaultNavigationOptions: DefaultStackNavOption,
  },
);
const BottomNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: MainNavigator,
      navigationOptions: {
        tabBarLabel: 'MEAL',

        // tabBarIcon: info => (
        //   <Ionicons name="ios-albums" size={25} color={info.tintColor} />
        // ),
      },
    },
    Favourite: {
      screen: FavouritesNavigator,
      navigationOptions: {
        tabBarLabel: 'Favourite',
        // tabBarIcon: info => (
        //   <Ionicons name="ios-star" size={25} color={info.tintColor} />
        // ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#ffffff',
      activeBackgroundColor: '#304ffe',
      inactiveTintColor: '#ffffff',
      inactiveBackgroundColor: Colors.secondaryColor,
    },
  },
);
const DrawerNavigator = createDrawerNavigator({
  PostTabs: {
    screen: BottomNavigator,
  },
  About: {
    screen: MealDetailsScreen,
  },
  Create: CategoryScreen,
});
export const AppNavigation = createAppContainer(DrawerNavigator);
