import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
export const CardItem = props => {
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
        <View>
          <View style={{...styles.cardRow, ...styles.cardHeader}}>
            <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
              <View style={styles.cardTitleContainer}>
                <Text style={styles.cardTitle} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{...styles.cardRow, ...styles.cardShortDesc}}>
            <Text>{props.duration}min</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 200,
    elevation: 5,
    backgroundColor: '#f5f5f5',
    margin: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardHeader: {
    height: '85%',
  },
  cardRow: {
    flexDirection: 'row',
  },
  cardTitleContainer: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 50,
  },
  cardTitle: {
    color: 'white',
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 5,
  },

  cardShortDesc: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: '15%',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
});

export default CardItem;
