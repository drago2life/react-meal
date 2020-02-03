import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {MainScreen} from './MainScreen';
import {CATEGORIES} from '../data/data';
import Colors from '../UI/constants/Colors';

export const CategoryScreen = props => {
  const catId = props.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return (
    <View style={styles.center}>
      <Text>{selectedCategory.title}</Text>
      <Text>HomeScreen</Text>
      <Button
        title="Go to Meal"
        onPress={() => {
          props.navigation.navigate({routeName: 'MealDetails'});
        }}
      />
    </View>
  );
};
CategoryScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor: Colors.primaryColor,
    },
    headerTintColor: Colors.primaryColor,
  };
};
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryScreen;
