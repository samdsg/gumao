import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Badge} from 'native-base';
import Animated from 'react-native-reanimated';
import PropTypes from 'prop-types';
import {
  ImgContainerHeight,
  numberSize,
  percentage,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
} from '../../Variables';

const Number = props => {
  const Fonts = percentage(SCREEN_WIDTH, 50);
  const infoHeight = percentage(SCREEN_HEIGHT, 100);
  return (
    <View
      style={{
        ...StyleSheet.absoluteFill,
        bottom: null,
        translateY: ImgContainerHeight,
        paddingHorizontal: 50,
      }}>
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
      <View>
        <Text
          style={{
            fontSize: numberSize / 5,
            color: '#777B89',
            fontFamily: 'Segoe UI',
            marginTop: 2,
            textTransform: 'uppercase',
            fontWeight: '700',
          }}>
          Angry Birds
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: numberSize / 2.3,
            fontFamily: 'Segoe UI Bold',
            color: '#3F455A',
            marginTop: 2,
            textTransform: 'lowercase',
            fontWeight: '900',
          }}>
          Bird Red
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: numberSize / 4,
            fontFamily: 'Segoe UI Bold',
            color: '#3F455A',
            marginTop: 2,
            textTransform: 'lowercase',
            fontWeight: '900',
          }}>
          #3000
        </Text>
      </View>
      <Animated.ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          borderWidth: 1,
          borderRadius: 10,
          height: infoHeight / 3.8,
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            flex: 1,
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 10,
            paddingVertical: 5,
            marginTop: 10,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Text
            style={{
              fontSize: Fonts / 20,
            }}>
            Season 2 Wins
          </Text>
          <Badge success>
            <Text
              style={{
                color: 'white',
                alignItems: 'center',
                fontSize: Fonts / 20,
              }}>
              1866
            </Text>
          </Badge>
        </View>
        <View
          style={{
            flex: 1,
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 10,
            paddingVertical: 5,
            marginTop: 10,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Text
            style={{
              fontSize: Fonts / 20,
            }}>
            Apex Level
          </Text>
          <Badge success>
            <Text
              style={{
                color: 'white',
                alignItems: 'center',
                fontSize: Fonts / 20,
              }}>
              122
            </Text>
          </Badge>
        </View>
        <View
          style={{
            flex: 1,
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 10,
            paddingVertical: 5,
            marginTop: 10,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Text
            style={{
              fontSize: Fonts / 20,
            }}>
            Damage Done
          </Text>
          <Badge danger>
            <Text
              style={{
                color: 'white',
                alignItems: 'center',
                fontSize: Fonts / 20,
              }}>
              1866
            </Text>
          </Badge>
        </View>
        <View
          style={{
            flex: 1,
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 10,
            paddingVertical: 5,
            marginTop: 10,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Text
            style={{
              fontSize: Fonts / 20,
            }}>
            Season 2 Kills
          </Text>
          <Badge
            style={{
              backgroundColor: 'black',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                alignItems: 'center',
                fontSize: Fonts / 20,
              }}>
              1866
            </Text>
          </Badge>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

Number.propTypes = {};

export default Number;
