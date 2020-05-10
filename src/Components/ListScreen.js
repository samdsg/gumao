import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TextInput, StyleSheet, ScrollView} from 'react-native';
import {Container, Content, Icon, Picker, Form} from 'native-base';
import {FlatGrid} from 'react-native-super-grid';
import Svg, {ClipPath, Defs, Rect, Circle} from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import Animated from 'react-native-reanimated';
// import Icon from 'react-native-vector-icons/FontAwesome5';

/* svg */

import {
  percentage,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  SplashTopHeight,
} from '../../Variables';
import IconList from './IconList';
import Selector from './Selector';
const Player = require('../images/Player.png');
const Clasho = require('../images/clasho.png');
const AngryB = require('../images/angryb.png');

const ListScreen = props => {
  const Fonts = percentage(SCREEN_WIDTH, 50);
  const InputHeight = percentage(SCREEN_HEIGHT, 7);
  const ListHeight = percentage(SCREEN_HEIGHT, 80);
  const Aheight = percentage(SCREEN_HEIGHT, 50);
  const [selected, setSelected] = useState(undefined);

  const onValueChange = value => {
    setSelected(value);
  };

  const items = [
    {name: 'TURQUOISE', code: '#1abc9c', image: Player},
    {name: 'EMERALD', code: '#2ecc71', image: Clasho},
    {name: 'PETER RIVER', code: '#3498db', image: AngryB},
    {name: 'TURQUOISE', code: '#1abc9c', image: Player},
    {name: 'EMERALD', code: '#2ecc71', image: Clasho},
    {name: 'PETER RIVER', code: '#3498db', image: AngryB},
    {name: 'TURQUOISE', code: '#1abc9c', image: Player},
    {name: 'EMERALD', code: '#2ecc71', image: Clasho},
    {name: 'PETER RIVER', code: '#3498db', image: AngryB},
    {name: 'TURQUOISE', code: '#1abc9c', image: Player},
    {name: 'EMERALD', code: '#2ecc71', image: Clasho},
    {name: 'PETER RIVER', code: '#3498db', image: AngryB},
  ];

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 10,
        paddingBottom: 20,
      }}>
      <View
        style={{
          alignItems: 'center',
          height: SplashTopHeight,
          justifyContent: 'center',
          paddingHorizontal: 10,
        }}
        pointerEvents="none">
        <TextInput
          placeholder="Enter a player name"
          placeholderTextColor="white"
          style={{
            fontSize: Fonts / 18,
            fontFamily: 'Poppins-Regular',
            width: SCREEN_WIDTH / 2.5,
            height: InputHeight,
            borderWidth: 1,
            borderColor: 'white',
            borderRadius: 10,
            paddingVertical: 5,
            paddingHorizontal: 20,
            color: '#fff',
          }}
        />
      </View>

      <Selector />
      <View
        style={{
          height: ListHeight,
        }}>
        <FlatGrid
          itemDimension={300}
          items={items}
          style={styles.gridView}
          spacing={20}
          renderItem={({item, index}) => (
            <View
              style={{
                width: '100%',
                height: 200,
                marginBottom: 10,
              }}>
              <View
                style={{
                  ...StyleSheet.absoluteFill,
                  zIndex: 3,
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  width: 220,
                  height: 200,
                }}>
                <Animated.Image
                  source={item.image}
                  resizeMode="contain"
                  style={{
                    width: 250,
                    height: 230,
                    transform: [{translateY: 10, translateX: -27}],
                  }}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  ...StyleSheet.absoluteFill,
                }}>
                <LinearGradient
                  colors={['#F9AEB2', '#F8D8C9']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={{
                    width: '98%',
                    flex: 1,
                    backgroundColor: '#fff',
                    ...StyleSheet.absoluteFill,
                    right: null,
                    zIndex: 1,
                    borderRadius: 20,
                    paddingTop: 10,
                    paddingRight: 30,
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    flexDirection: 'row',
                  }}>
                  <View>
                    <IconList name="bolt" />
                    <IconList name="heart" />
                    <IconList name="skull-crossbones" />
                  </View>
                </LinearGradient>
                <View
                  style={{
                    width: '100%',
                    flex: 1,
                    backgroundColor: '#F29758',
                    ...StyleSheet.absoluteFill,
                    right: null,
                    zIndex: 0,
                    borderRadius: 20,
                  }}
                />
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

ListScreen.propTypes = {};

const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});

export default ListScreen;
