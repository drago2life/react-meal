import React from 'react';
import {MEALS} from '../data/data';
import MealList from '../components/MealList';
import {useSelector} from 'react-redux';

export const FavouritesScreen = props => {
  const favMeals = useSelector(state => state.meals.favoriteMeals);

  // const favMeals = availableMeals.filter(meal => meal.isfavourite === true);
  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavouritesScreen.navigationOptions = props => {
  const mealTitle = props.route.params?.mealTitle;
  return {
    headerTitle: mealTitle,
  };
};

export default FavouritesScreen;
