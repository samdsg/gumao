import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';
import {percentage, SCREEN_HEIGHT, numberSize} from '../../Variables';

const TopPlayer = props => {
  const MiddleHeight = percentage(SCREEN_HEIGHT, 70);
  const boxesHeight = percentage(SCREEN_HEIGHT, 45);
  return (
    <View
      style={{
        height: MiddleHeight,
        alignItems: 'center',
        overflow: 'hidden',
        paddingVertical: 5,
      }}>
      <View
        style={{
          width: '100%',
          zIndex: 4,
        }}>
        <View
          style={{
            translateY: -10,
            justifyContent: 'center',
            alignItems: 'center', 
          }}>
          <Animated.Image
            style={{
              width: 300,
              height: 300,
              resizeMode: 'contain',
            }}
            source={require('../images/angryb.png')}
          />
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: boxesHeight,
          backgroundColor: '#FEFEFE',
          translateY: 120,
          overflow: 'hidden',
          borderRadius: 30,
          zIndex: 3,
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            overflow: 'hidden',
            justifyContent: 'flex-end',
          }}>
          <View>
            <View
              style={{
                backgroundColor: '#EF544A',
                width: 60,
                height: 40,
                borderRadius: 10,
                padding: 10,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 7,
              }}>
              <Text
                style={{
                  fontSize: numberSize / 5,
                  color: '#fff',
                  fontFamily: 'Poppins-ExtraBold',
                }}>
                2.8
              </Text>
            </View>
            <Text
              style={{
                fontSize: numberSize / 5,
                color: '#777B89',
                fontFamily: 'Segoe UI',
                marginTop: 7,
                textTransform: 'uppercase',
                fontWeight: '700',
              }}>
              Angry Birds
            </Text>
            <Text
              style={{
                // fontSize: 45,
                fontSize: numberSize / 2.5,
                fontFamily: 'Segoe UI Bold',
                color: '#3F455A',
                marginTop: 7,
                textTransform: 'lowercase',
                fontWeight: '900',
              }}>
              Bird Red
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              paddingLeft: 30,
            }}>
            <Text style={{color: '#f2f4f6', fontSize: 30}}>#</Text>
            <Text
              style={{
                fontSize: numberSize,
                fontWeight: '900',
                color: '#F2F4F6',
              }}>
              3
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          width: '92%',
          height: boxesHeight,
          backgroundColor: '#FDE2E3',
          borderRadius: 30,
          translateY: 140,
          zIndex: 2,
        }}
      />
      <View
        style={{
          position: 'absolute',
          width: '82%',
          height: boxesHeight,
          backgroundColor: '#FBD6D5',
          borderRadius: 30,
          translateY: 160,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  
});

TopPlayer.propTypes = {};

export default TopPlayer;
