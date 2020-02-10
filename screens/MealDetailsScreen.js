import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {MEALS} from '../data/data';
import CardItem from '../components/MealItem';

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

export const MealDetailsScreen = props => {
  const mealId = props.route.params?.mealId;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <View>
      <View>
        <ImageBackground
          style={{width: '100%', height: 200}}
          source={{uri: selectedMeal.imageUrl}}
        />
      </View>
      <View>
        <Text style={styles.title}>Ingredients</Text>
        {selectedMeal.ingredients.map(ingredient => (
          <ListItem key={ingredient}>{ingredient}</ListItem>
        ))}
      </View>
      <View>
        <Text style={styles.title}>Preparation</Text>
        {selectedMeal.steps.map(steps => (
          <ListItem key={steps}>{steps}</ListItem>
        ))}
      </View>
    </View>
  );
};
MealDetailsScreen.navigationOptions = props => {
  const mealTitle = props.route.params?.mealTitle;
  return {
    headerTitle: mealTitle,
  };
};

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: 200,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center',
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
});

export default MealDetailsScreen;
