import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export const FavouritesScreen = props => {
  return (
    <View style={styles.center}>
      <Text>FavouritesScreen</Text>
      <Button
        title="Go to Meal"
        onPress={() => {
          props.navigation.navigate({routeName: 'MealDetails'});
        }}
      />
    </View>
  );
};
FavouritesScreen.navigationOptions = {
  headerTitle: 'My Favourites',
};
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
