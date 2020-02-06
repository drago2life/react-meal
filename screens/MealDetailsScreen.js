import React from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {MainScreen} from './MainScreen';
import MealItem from '../components/MealItem';
import {MEALS} from '../data/data';
import {Image} from 'react-native-reanimated';

export const MealDetailsScreen = props => {
  const mealId = props.navigation.getParam('mealId');

  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return (
    <View>
      <Text>{selectedMeal.title}</Text>
    </View>
  );
};
MealDetailsScreen.navigationOptions = props => {
  const mealTitle = props.navigation.getParam('mealTitle');
  return {
    headerTitle: mealTitle,
  };
};

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: 200,
  },
});

export default MealDetailsScreen;
