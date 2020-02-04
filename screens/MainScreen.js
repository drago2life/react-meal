import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {CATEGORIES} from '../data/data';

export const MainScreen = props => {
  const renderGridItem = itemData => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          // props.navigation.navigate({
          //   routeName: 'Category',
          //   params: {
          //     categoryId: itemData.item.id,
          props.navigation.navigate('Category', {
            categoryId: itemData.item.id,
          });
        }}>
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      numColumns={2}
      renderItem={renderGridItem}
      data={CATEGORIES}
      keyExtractor={(item, index) => item.id}
    />
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
  gridItem: {
    flex: 1,
    margin: 15,
    height: 100,
  },
});

export default MainScreen;
