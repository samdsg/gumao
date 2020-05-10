import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';
import {SCREEN_WIDTH, percentage, SplashTopHeight, shadow} from '../../Variables';

const Title = props => {
  const ViewWidth = percentage(SCREEN_WIDTH, 80);
  return (
    <View
      style={{
        height: SplashTopHeight,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: ViewWidth / 14,
          color: '#fff',
          fontFamily: 'Poppins-ExtraBold',
        }}>
        gumao.
      </Text>
      <View
        style={{
          backgroundColor: '#F5718F',
          width: 50,
          height: 50,
          borderRadius: 50,
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon
          name="search"
          color="#fff"
          style={{
            fontSize: ViewWidth / 23,
            fontWeight: '200',
          }}
        />
      </View>
    </View>
  );
};

Title.propTypes = {};

export default Title;
