import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SplashBottomHeight } from '../../Variables';

const FooterIcons = props => {
  return (
    <View
      style={{
        height: SplashBottomHeight,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        }}>
        <Icon
          name="th-large"
          color="#fff"
          style={{
            fontSize: 18,
            marginRight: 10,
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
      <Text>
        <Icon
          name="heart"
          style={{
            fontSize: 30,
            color: '#fff',
            fontWeight: '900',
            textAlign: 'center',
          }}
        />
      </Text>
      <Text>
        <Icon
          name="user"
          style={{
            fontSize: 30,
            color: '#fff',
            fontWeight: '900',
            textAlign: 'center',
          }}
        />
      </Text>
    </View>
  );
};

FooterIcons.propTypes = {};

export default FooterIcons;
