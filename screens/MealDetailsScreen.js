import React, {useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';

import Colors from '../UI/constants/Colors';
import FavButton from '../components/FavButton';

import {useSelector, useDispatch} from 'react-redux';
import {toggleFavorite} from '../store/actions/meals';

const ListItem = props => {
  return (
    <View style={styles.text}>
      <Text>{props.children}</Text>
    </View>
  );
};

export const MealDetailsScreen = props => {
  const availableMeals = useSelector(state => state.meals.meals);
  const mealId = props.route.params?.mealId;

  const selectedMeal = availableMeals.find(meal => meal.id === mealId);
  const dispatch = useDispatch();
  const currentMealIsFavorite = useSelector(state =>
    state.meals.favoriteMeals.some(meal => meal.id === mealId),
  );
  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  return (
    <ScrollView>
      <View styles={styles.gridItem}>
        <View style={styles.cardRow}>
          <View style={styles.cardShortDesc}>
            <Text style={styles.test2}>15 min</Text>
            <Text style={styles.test2}>complexity </Text>
            <Text style={styles.test2}>affordability</Text>
          </View>
        </View>
        <View>
          <ImageBackground
            style={styles.bgImage}
            source={{uri: selectedMeal.imageUrl}}>
            <View style={styles.favbt}>
              <FavButton
                name={currentMealIsFavorite ? 'heart' : 'heart-o'}
                size={30}
                color={Colors.secondaryColor}
                onPress={toggleFavoriteHandler}
              />
            </View>
          </ImageBackground>
        </View>
      </View>

      <View>
        <Text style={styles.title}>INGREDIENTS</Text>
        {selectedMeal.ingredients.map(ingredient => (
          <ListItem key={ingredient}>{ingredient}</ListItem>
        ))}
      </View>
      <View>
        <Text style={styles.title}>PREPARATION</Text>
        {selectedMeal.steps.map(steps => (
          <ListItem key={steps}>{steps}</ListItem>
        ))}
      </View>
    </ScrollView>
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
    textAlign: 'left',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'rgba(230, 230, 250, 0.8)',
    color: 'rgba(231,76,60,1)',
    borderTopColor: '#c8c7cc',
    borderBottomColor: '#c8c7cc',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  favbt: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  favbtfull: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingVertical: 20,
    paddingHorizontal: 20,
    color: Colors.defaultColor,
  },
  text: {
    fontFamily: 'open-sans',
    fontSize: 22,
    textAlign: 'left',
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: 'rgba(231,76,60,1)',
  },
  test2: {
    color: '#ffffff',
  },
  cardHeader: {
    height: '85%',
  },
  cardRow: {
    flexDirection: 'row',
  },
  cardShortDesc: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: Colors.accentColor,
    paddingHorizontal: 80,
  },
});

export default MealDetailsScreen;
