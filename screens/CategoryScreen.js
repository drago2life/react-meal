import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import MealItem from '../components/MealItem';

export const CategoryScreen = props => {
  const availableMeals = useSelector(state => state.meals.meals);
  const renderMealItem = itemData => {
    return (
      <MealItem
        image={itemData.item.imageUrl}
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelect={() => {
          props.navigation.navigate('MealDetails', {
            mealId: itemData.item.id,
            mealTitle: itemData.item.title,
            mealImage: itemData.item.imageUrl,
          });
        }}
      />
    );
  };
  const catId = props.route.params?.categoryId;
  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0,
  );
  return (
    <FlatList
      renderItem={renderMealItem}
      data={displayedMeals}
      // keyExtractor={(item, index) => item.id}
      keyExtractor={itemData => itemData.id.toString()}
    />
  );
};

CategoryScreen.navigationOptions = props => {
  const catTitle = props.route.params?.categoryTitle;

  return {
    headerTitle: catTitle,
  };
};

export default CategoryScreen;
