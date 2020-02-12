import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {MEALS} from '../data/data';
import CardItem from '../components/MealItem';
import Colors from '../UI/constants/Colors';

const ListItem = props => {
  return (
    <View style={styles.text}>
      <Text>{props.children}</Text>
    </View>
  );
};

export const MealDetailsScreen = props => {
  const mealId = props.route.params?.mealId;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <View>
      <View style={{...styles.cardShortDesc, ...styles.cardRow}}>
        <Text style={styles.test2}>15 min</Text>
        <Text style={styles.test2}>complexity </Text>
        <Text style={styles.test2}>affordability</Text>
      </View>
      <View>
        <ImageBackground
          style={styles.bgImage}
          source={{uri: selectedMeal.imageUrl}}
        />
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
  text: {
    fontFamily: 'open-sans',
    fontSize: 22,
    textAlign: 'left',
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: 'rgba(231,76,60,1)',
    borderBottomColor: '#c8c7cc',
    borderStyle: 'solid',
    borderBottomWidth: 1,
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 80,
    height: '5%',
    backgroundColor: Colors.primayColor,
  },
});

export default MealDetailsScreen;
