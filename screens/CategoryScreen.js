import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {MainScreen} from './MainScreen';

export const CategoryScreen = props => {
  return (
    <View style={styles.center}>
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
CategoryScreen.navigationOptions = {
  headerTitle: 'Meal Title',
};
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
