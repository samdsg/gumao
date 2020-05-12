import React, {useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Animated, {
  interpolate,
  useCode,
  cond,
  eq,
  set,
  SpringUtils,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';
import {percentage, SCREEN_HEIGHT, numberSize} from '../../Variables';
import {
  withTimingTransition,
  withSpring,
  withSpringTransition,
  delay,
} from 'react-native-redash';

const TopPlayer = ({animeoneAnime, animeone}) => {
  const topTrans = useRef(new Animated.Value(0));
  const topTrans1 = useRef(new Animated.Value(0));

  const MiddleHeight = percentage(SCREEN_HEIGHT, 70);
  const boxesHeight = percentage(SCREEN_HEIGHT, 45);

  const scaleLogo = interpolate(animeoneAnime, {
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const sty1Anime = withSpringTransition(topTrans.current, {
    ...SpringUtils.makeDefaultConfig(),
    overshootClamping: true,
    damping: new Animated.Value(20),
  });
  const sty2Anime = withSpringTransition(topTrans1.current, {
    ...SpringUtils.makeDefaultConfig(),
    overshootClamping: true,
    damping: new Animated.Value(20),
  });

  const sTY2 = interpolate(sty1Anime, {
    inputRange: [0, 1],
    outputRange: [120, 140],
  });

  const sTY3 = interpolate(sty2Anime, {
    inputRange: [0, 1],
    outputRange: [130, 160],
  });

  useCode(() => [
    cond(eq(topTrans.current, 0), [delay(set(topTrans.current, 1), 300)]),
    cond(eq(topTrans1.current, 0), [delay(set(topTrans1.current, 1), 400)]),
  ]);

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
        <Animated.View
          style={{
            translateY: -10,
            justifyContent: 'center',
            alignItems: 'center',
            transform: [{scale: scaleLogo}],
          }}>
          <Animated.Image
            style={{
              width: 300,
              height: 300,
              resizeMode: 'contain',
            }}
            source={require('../images/angryb.png')}
          />
        </Animated.View>
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
      <Animated.View
        style={{
          position: 'absolute',
          width: '92%',
          height: boxesHeight,
          backgroundColor: '#FDE2E3',
          borderRadius: 30,
          zIndex: 2,
          transform: [{translateY: sTY2}],
        }}
      />
      <Animated.View
        style={{
          position: 'absolute',
          width: '82%',
          height: boxesHeight,
          backgroundColor: '#FBD6D5',
          borderRadius: 30,
          transform: [{translateY: sTY3}],
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({});

TopPlayer.propTypes = {};

export default TopPlayer;
