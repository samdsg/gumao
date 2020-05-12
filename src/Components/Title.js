import React, {useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Animated, {
  interpolate,
  useCode,
  cond,
  eq,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  TapGestureHandler,
  State,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {onGestureEvent} from 'react-native-redash';
import {
  SCREEN_WIDTH,
  percentage,
  SplashTopHeight,
  shadow,
} from '../../Variables';
import {EventEmitter} from '../Helpers/events';

const Title = ({animeoneAnime, gestureHandler}) => {
  const ViewWidth = percentage(SCREEN_WIDTH, 80);

  const topTitleAnime = interpolate(animeoneAnime, {
    inputRange: [0, 1],
    outputRange: [-SplashTopHeight, 0],
  });

  return (
    <Animated.View
      style={{
        height: SplashTopHeight,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        transform: [{translateY: topTitleAnime}],
      }}>
      <Text
        style={{
          fontSize: ViewWidth / 14,
          color: '#fff',
          fontFamily: 'Poppins-ExtraBold',
        }}>
        gumao.
      </Text>
      <TapGestureHandler {...gestureHandler}>
        <Animated.View
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
        </Animated.View>
      </TapGestureHandler>
    </Animated.View>
  );
};

Title.propTypes = {};

export default Title;
