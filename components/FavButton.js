import React from 'react';
import {Button} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



const FavButton = props => {
  return <Button {...props} IconComponent={FontAwesome5} iconSize={23} />;
};

export default FavButton;
