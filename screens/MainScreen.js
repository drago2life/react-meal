import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {CATEGORIES} from '../data/data';
import GridItem from '../components/GridItem';

export const MainScreen = props => {
  const renderGridItem = itemData => {
    return (
      <GridItem
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate('Category', {
            categoryId: itemData.item.id,
            categoryTitle: itemData.item.title,
          });
        }}
      />
    );
  };

  return (
    <FlatList
      numColumns={2}
      renderItem={renderGridItem}
      data={CATEGORIES}
      // keyExtractor={(item, index) => item.id}
      keyExtractor={itemData => itemData.id.toString()}
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
