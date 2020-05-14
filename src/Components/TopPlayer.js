import React, {useRef, useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Animated, {
  interpolate,
  useCode,
  cond,
  eq,
  set,
  SpringUtils,
} from 'react-native-reanimated';
import {
  percentage,
  SCREEN_HEIGHT,
  numberSize,
  info,
  SCREEN_WIDTH,
} from '../../Variables';
import {withSpringTransition, delay} from 'react-native-redash';
const dImg = require('../images/angryb.png');
import {playerData} from '../store/actions/playerAction';

function TopPlayer({animeoneAnime, playerData, myplayer}) {
  const topTrans = useRef(new Animated.Value(0));
  const topTrans1 = useRef(new Animated.Value(0));
  const imgWidth = percentage(SCREEN_WIDTH, 40);
  const imgHeight = percentage(SCREEN_HEIGHT, 55);

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
  useEffect(() => {
    playerData().then(() => {});
  }, [player]);

  const showImage = player =>
    player !== null ? (
      <Animated.Image
        style={{
          width: 300,
          height: 300,
          resizeMode: 'contain',
        }}
        source={{uri: player[0].data.segments[1].metadata.imageUrl}}
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
    );

  const showInfo = player => (
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
        flex: 1,
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            paddingBottom: 15,
            flex: 1,
            paddingHorizontal: 15,
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
              {player !== null
                ? player[0].data.platformInfo.platformSlug
                : 'xbox'}
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
            {player !== null
              ? player[0].data.metadata.activeLegend
              : 'Angry Birds'}
          </Text>
          <Text
            style={{
              fontSize: numberSize / 2.8,
              fontFamily: 'Segoe UI Bold',
              color: '#3F455A',
              marginTop: 7,
              textTransform: 'lowercase',
              fontWeight: '900',
            }}>
            {player !== null
              ? player[0].data.platformInfo.platformUserId
              : 'Bird Red'}
          </Text>
        </View>

        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingBottom: 20,
            paddingRight: 20,
          }}>
          <Text
            style={{
              fontSize: numberSize / 3,
              fontWeight: '900',
              color: '#F2F4F6',
            }}>
            #{player !== null
              ? player[0].data.segments[0].stats.rankScore.rank
              : '1234'}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View
      style={{
        height: MiddleHeight,
        alignItems: 'center',
        overflow: 'hidden',
        paddingVertical: 5,
        flex: 1,
      }}>
      <View
        style={{
          width: '100%',
          zIndex: 4,
          flex: 1,
        }}>
        <Animated.View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            transform: [{scale: scaleLogo}],
            position: 'absolute',

            transform: [
              {
                translateX: imgWidth / 7,
                translateY: imgHeight / 10,
              },
            ],
          }}>
          {showImage(myplayer.myplayer)}
        </Animated.View>
      </View>
      {showInfo(myplayer.myplayer)}
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
const mapStatToProps = state => ({
  myplayer: state.player,
});

export default connect(
  mapStatToProps,
  {playerData},
)(TopPlayer);
