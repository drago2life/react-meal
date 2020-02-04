import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {CATEGORIES} from '../data/data';

export const MainScreen = ({navigation}) => {
  const renderGridItem = itemData => {
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
