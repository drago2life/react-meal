import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../UI/constants/Colors';

const FavButton = props => {
  return (
    // <View style={styles.favbt}>
    //   <Icon {...props} name={'star'} style={{...styles.favbt}} />
    // </View>
    <TouchableOpacity>
      <View style={{...styles.favbt}}>
        <Icon {...props} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  favbt: {
    width: 40,
    height: 40,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: Colors.defaultColor,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FavButton;
