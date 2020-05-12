import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {SplashBottomHeight} from '../../Variables';
import {TapGestureHandler} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

const FooterIcons = ({gestureHandler}) => {
  return (
    <View
      style={{
        height: SplashBottomHeight,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          backgroundColor: '#3F455A',
          padding: 7,
          borderRadius: 10,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          marginRight: 25,
        }}>
        <Icon
          name="th-large"
          color="#fff"
          style={{
            fontSize: 18,
            marginRight: 15,
            textAlign: 'center',
          }}
        />
        <Text
          style={{
            fontSize: 18,
            color: '#fff',
            fontWeight: '900',
            fontFamily: 'Poppins-Regular',
            textAlign: 'center',
          }}>
          Explore
        </Text>
      </View>

      <TapGestureHandler {...gestureHandler}>
        <Animated.View>
          <Animated.Text>
            <Icon
              name="search"
              style={{
                fontSize: 30,
                color: '#fff',
                fontWeight: '900',
                textAlign: 'center',
              }}
            />
          </Animated.Text>
        </Animated.View>
      </TapGestureHandler>
    </View>
  );
};

FooterIcons.propTypes = {};

export default FooterIcons;
