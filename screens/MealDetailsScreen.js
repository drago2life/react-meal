import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {MainScreen} from './MainScreen';

export const MealDetailsScreen = props => {
  return (
    <View style={styles.center}>
      <Text>AboutScreen</Text>
    </View>
  );
};
MealDetailsScreen.navigationOptions = {
  headerTitle: 'Meal Details',
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
