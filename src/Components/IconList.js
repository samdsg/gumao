import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {View, Text} from 'native-base'
import PropTypes from 'prop-types';
import { percentage, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Variables';

const IconList = ({name}) => {
  const Fonts = percentage(SCREEN_WIDTH, 50);
  return (
    <View
      style={{
        backgroundColor: '#EF544A',
        width: 50,
        height: 50,
        borderRadius: 30,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
      }}>
      <Icon
        name={name}
        style={{
          color: '#fff',
          fontSize: Fonts / 18,
          fontWeight: '500',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      />
    </View>
  );
};

IconList.propTypes = {};

export default IconList;
