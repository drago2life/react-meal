import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {CATEGORIES, MEALS} from '../data/data';
import MainScreen from './MainScreen';

export const CategoryScreen = ({navigation}) => {
  const renderMealItem = itemData => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          navigation.navigate('Category', {
            categoryId: itemData.item.id,
            categoryTitle: itemData.item.title,
            categoryColor: itemData.item.color,
          });
        }}>
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const catId = navigation.getParam('categoryId');
  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0,
  );
  return (
    <FlatList
      numColumns={2}
      renderItem={renderMealItem}
      data={displayedMeals}
      keyExtractor={(item, index) => item.id}
      // keyExtractor={itemData => itemData.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

CategoryScreen.navigationOptions = ({navigation}) => {
  const catTitle = navigation.getParam('categoryTitle');

  return {
    headerTitle: catTitle,
  };
};

export default CategoryScreen;
