import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {CATEGORIES} from '../data/data';

export const CategoryScreen = ({navigation}) => {
  const catId = navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return (
    <View style={styles.center}>
      {/*<Text>{selectedCategory.title}</Text>*/}
      <Text>{selectedCategory.id}</Text>
      <Text>{selectedCategory.title}</Text>
      <Text>HomeScreen</Text>
      <Button
        title="Go to Meal"
        onPress={() => {
          navigation.navigate({routeName: 'MealDetails'});
        }}
      />
    </View>
  );
};
CategoryScreen.navigationOptions = ({navigation}) => {
  const catId = navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {headerTitle: navigation.getParam(catId)};
};


const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryScreen;
