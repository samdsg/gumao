import React, {useState} from 'react';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {
  TouchableOpacity,
  TapGestureHandler,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {View, StyleSheet} from 'react-native';
import {Toast, Spinner, Text} from 'native-base';
import {FlatGrid} from 'react-native-super-grid';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {interpolate} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Navigation} from 'react-native-navigation';
import {
  percentage,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  SplashTopHeight,
} from '../../Variables';
import IconList from './IconList';
import Selector from './Selector';
import {EventEmitter} from '../Helpers/events';

const Fonts = percentage(SCREEN_WIDTH, 50);
const InputHeight = percentage(SCREEN_HEIGHT, 7);
const ListHeight = percentage(SCREEN_HEIGHT, 90);
const backHeight = percentage(SCREEN_HEIGHT, 10);

import {
  getTopPlayers,
  searchGamer,
  getGamer,
} from '../store/actions/playerAction';

const Player = require('../images/Player.png');
const Clasho = require('../images/clasho.png');
const AngryB = require('../images/angryb.png');

class ListScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
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
      ],
      gamertag: '',
      platform: '',
    };

    EventEmitter.subscribe('platform', platform => this.setState({platform}));
    EventEmitter.subscribe('submit', platform => this.onSubmit());
  }

  onSubmit = () => {
    const {gamertag, platform} = this.state;
    const {
      player: {mysearches, searching},
    } = this.props;

    // if (platform === '' || gamertag === '')
    //   return Toast.show({
    //     text: 'Select all field',
    //     buttonText: 'Okay',
    //     buttonTextStyle: {color: '#fff'},
    //     buttonStyle: {backgroundColor: '#ff4500'},
    //     position: 'top',
    //     duration: 3000,
    //   });

    let same = false;
    mysearches.forEach(({data}) => {
      const {platformInfo} = data;
      if (platformInfo.platformUserId === gamertag) same = true;
    });
    if (same) return;
    this.props.searchGamer({gamertag, platform}).then(() => {});
  };

  storePlayer = async value => {
    try {
      await AsyncStorage.setItem('@player', value);
    } catch (e) {
      // saving error
    }
  };

  setgamertag = gamertag => this.setState({gamertag});

  render() {
    const {gestureHandler, listOpenAnimation, player} = this.props;

    const leftX = interpolate(listOpenAnimation, {
      inputRange: [0, 1],
      outputRange: [-SCREEN_WIDTH, 0],
    });

    const {mysearches, searching} = player;

    return (
      <Animated.View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          ...StyleSheet.absoluteFill,
          opacity: listOpenAnimation,
          transform: [{translateX: leftX}],
        }}>
        <LinearGradient
          style={{
            flex: 1,
            paddingHorizontal: 10,
            paddingBottom: 20,
            position: 'relative',
          }}
          colors={['#202943', '#7C4864', '#F5718F', '#F8D8C9']}>
          <View
            style={{
              alignItems: 'center',
              height: SplashTopHeight,
              justifyContent: 'center',
              paddingHorizontal: 10,
            }}
            pointerEvents="auto">
            <TextInput
              placeholder="Enter gamer tag"
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
              onChangeText={tag => this.setgamertag(tag)}
              onSubmitEditing={this.onSubmit}
            />
          </View>

          <Selector />
          <View
            style={{
              height: ListHeight,
            }}>
            {mysearches.length < 1 ? (
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 30,
                    color: '#fff',
                    fontFamily: 'Poppins-Bold',
                  }}>
                  Enter gamertag
                </Text>
              </View>
            ) : (
              this.storePlayer(JSON.stringify(mysearches)) && (
                <FlatGrid
                  itemDimension={300}
                  items={mysearches}
                  style={styles.gridView}
                  spacing={20}
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}
                  renderItem={({item, index}) => (
                    <TouchableWithoutFeedback
                      onPress={() => {
                        Navigation.push('details', {
                          component: {
                            name: 'Details',
                            passProps: {
                              item,
                            },
                          },
                        });
                      }}>
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
                            source={{
                              uri: item.data.segments[1].metadata.imageUrl,
                            }}
                            resizeMode="contain"
                            style={{
                              width: 250,
                              height: 200,
                              transform: [{translateY: -5, translateX: -27}],
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
                              <IconList
                                name={item.data.platformInfo.platformSlug}
                              />
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
                    </TouchableWithoutFeedback>
                  )}
                />
              )
            )}
          </View>

          <TapGestureHandler {...gestureHandler}>
            <Animated.View
              style={{
                height: 100,
                width: 200,
                justifyContent: 'center',
                paddingLeft: 30,
                position: 'absolute',
                bottom: 0,
                transform: [
                  {
                    translateX: backHeight * 1.85,
                  },
                ],
              }}>
              <Icon
                name="long-arrow-alt-left"
                style={{
                  fontSize: Fonts / 7,
                }}
              />
            </Animated.View>
          </TapGestureHandler>
        </LinearGradient>
      </Animated.View>
    );
  }
}

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

const mapStateToProps = state => ({
  player: state.player,
});

export default connect(
  mapStateToProps,
  {getTopPlayers, searchGamer, getGamer},
)(ListScreen);
