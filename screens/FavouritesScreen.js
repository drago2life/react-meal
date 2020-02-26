import React from 'react';
import MealList from '../components/MealList';
import {useSelector} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';
// const favMeals = availableMeals.filter(meal => meal.isfavourite === true);
export const FavouritesScreen = props => {
  const favMeals = useSelector(state => state.meals.favoriteMeals);

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <Text>No favorite meals found. Start adding some!</Text>
      </View>
    );
  }

  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavouritesScreen.navigationOptions = props => {
  const mealTitle = props.route.params?.mealTitle;
  return {
    headerTitle: mealTitle,
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavouritesScreen;
