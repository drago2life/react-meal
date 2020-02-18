import React from 'react';
import {MEALS} from '../data/data';
import MealList from '../components/MealList';

export const FavouritesScreen = props => {
  const favMeals = MEALS.filter(meal => meal.isfavourite === true);
  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavouritesScreen.navigationOptions = props => {
  const mealTitle = props.route.params?.mealTitle;
  return {
    headerTitle: mealTitle,
  };
};

export default FavouritesScreen;
