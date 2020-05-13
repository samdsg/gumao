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
import {codeToEmoji} from '../Helpers/misc';
const Fonts = percentage(SCREEN_WIDTH, 50);

const Number = ({data}) => {
  const {platformInfo, userInfo, metadata, segments} = data;
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
          width: 100,
          height: 40,
          marginTop: 7,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={{...styles.info}}>{platformInfo.platformSlug}</Text>
        <Text style={{...styles.info}}> {userInfo.countryCode}</Text>
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
          {metadata.activeLegend}
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
          {platformInfo.platformUserId}
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
          Stats
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
        <View style={{...styles.statCover}}>
          <Text style={{...styles.statTitle}}>Apex Level</Text>
          <Badge danger style={{...styles.flexBadge}}>
            <Text style={{...styles.count}}>
              {segments[0].stats.level.displayValue}
            </Text>

            <Text style={{...styles.percentile}}>
              {segments[0].stats.level.percentile}%
            </Text>
          </Badge>
        </View>

        <View style={{...styles.statCover}}>
          <Text style={{...styles.statTitle}}>Season 2 Wins</Text>
          <Badge danger style={{...styles.flexBadge}}>
            <Text style={{...styles.count}}>
              {segments[0].stats.season2Wins.displayValue}
            </Text>

            <Text style={{...styles.percentile}}>
              {segments[0].stats.season2Wins.percentile}%
            </Text>
          </Badge>
        </View>

        <View style={{...styles.statCover}}>
          <Text style={{...styles.statTitle}}> Damage Done </Text>
          <Badge danger style={{...styles.flexBadge}}>
            <Text style={{...styles.count}}>
              {segments[0].stats.damage.displayValue}
            </Text>
            <Text style={{...styles.percentile}}>
              {segments[0].stats.damage.percentile}%
            </Text>
          </Badge>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  statCover: {
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
  },
  badge: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statTitle: {
    fontSize: Fonts / 27,
  },
  percentile: {
    color: 'white',
    alignItems: 'center',
    fontSize: Fonts / 30,
    textAlign: 'center',
  },
  count: {
    color: 'white',
    alignItems: 'center',
    fontSize: Fonts / 25,
    marginRight: 3,
  },
  info: {
    backgroundColor: '#EF544A',
    borderRadius: 10,
    fontSize: numberSize / 7,
    color: '#fff',
    fontFamily: 'Poppins-ExtraBold',
    textAlign: 'center',
    padding: 5,
    marginRight: 3,
    paddingVertical: 2,
    paddingHorizontal: 5,
  },
});

export default Number;
