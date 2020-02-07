import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SectionList,
  TouchableOpacity,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {MainScreen} from './MainScreen';
import MealItem from '../components/MealItem';
import {MEALS} from '../data/data';
import {Image, ScrollView} from 'react-native-reanimated';

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

export const MealDetailsScreen = props => {
  const mealId = props.navigation.getParam('mealId');

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <View>
      <ScrollView >
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
          <Text style={styles.title}>Preperation</Text>
          {selectedMeal.steps.map(steps => (
            <ListItem key={steps}>{steps}</ListItem>
          ))}
        </View>
      </ScrollView>
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
