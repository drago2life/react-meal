import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export const MainScreen = props => {
  return (
    <View style={styles.center}>
      <Text>MainScreen</Text>
      <Button
        title="Go to Category"
        onPress={() => {
          props.navigation.navigate({routeName: 'Category'});
        }}
      />
    </View>
  );
};
MainScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
};
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
