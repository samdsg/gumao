import React, {useRef, useState, useEffect} from 'react';
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
import {percentage, SCREEN_HEIGHT, numberSize, info} from '../../Variables';
import {
  withTimingTransition,
  withSpring,
  withSpringTransition,
  delay,
} from 'react-native-redash';
import AsyncStorage from '@react-native-community/async-storage';
const dImg = require('../images/angryb.png');

function TopPlayer({animeoneAnime}) {
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

  const [player, setPlayer] = useState([]);
  const playerData = async () => {
    const player = JSON.parse(await AsyncStorage.getItem('@player'));
    if (player) {
      if (player.length > 0) {
        setPlayer(...player);
      }
    }
  };

  useEffect(() => {
    playerData();
  }, []);

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
          {player.data ? (
            <Animated.Image
              style={{
                width: 300,
                height: 300,
                resizeMode: 'contain',
              }}
              source={{uri: player.data.segments[1].metadata.imageUrl}}
            />
          ) : (
            <Animated.Image
              style={{
                width: 300,
                height: 300,
                resizeMode: 'contain',
              }}
              source={dImg}
            />
          )}
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
          <View
            style={{
              paddingBottom: 15,
            }}>
            <View
              style={{
                width: 100,
                height: 40,
                marginTop: 7,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{...info}}>
                {player.data ? player.data.platformInfo.platformSlug : 'xbox'}
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
              {player.data ? player.data.metadata.activeLegend : 'Angry Birds'}
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
              {player.data
                ? player.data.platformInfo.platformUserId
                : 'Bird Red'}
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
                fontSize: numberSize / 4,
                fontWeight: '900',
                color: '#F2F4F6',
              }}>
              {player.data
                ? player.data.segments[0].stats.rankScore.rank
                : '1234'}
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
}
const styles = StyleSheet.create({});

TopPlayer.propTypes = {};

export default TopPlayer;
