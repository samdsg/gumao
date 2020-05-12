import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, BackHandler} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Navigation} from 'react-native-navigation';

import {imgWidth, ImgContainerHeight, Fonts} from '../../Variables';
import Number from './Number';

class Details extends PureComponent {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  navigationButtonPressed({buttonId}) {
    switch (buttonId) {
      case 'backPress': {
        this.handleBackPress();
        break;
      }
    }
  }

  handleBackPress = () => {
    //Custom logic
    Navigation.setRoot({
      root: {
        component: {
          name: 'Home',
          options: {
            animations: {
              push: {
                waitForRender: true,
              },
            },
          },
        },
      },
    });
    //Stop the default navigation
    return true;
  };

  render() {
    return (
      <LinearGradient
        style={{
          flex: 1,
        }}
        colors={['#fff', '#ffffff', '#fff', '#f9e4da']}>
        <View
          style={{
            alignItems: 'center',
            ...StyleSheet.absoluteFill,
            bottom: null,
            height: ImgContainerHeight,
          }}>
          <Animated.Image
            source={require('../images/angryb.png')}
            style={{
              height: 300,
              width: imgWidth,
            }}
            resizeMode="contain"
          />
          {/* <View
          style={{
            height: 100,
            width: 200,
            ...StyleSheet.absoluteFill,
            justifyContent: 'center',
            paddingLeft: 30,
          }}>
          <Icon
            name="long-arrow-alt-left"
            style={{
              fontSize: Fonts / 1.2,
            }}
          />
        </View> */}
        </View>
        <Number />
      </LinearGradient>
    );
  }
}

Details.options = {
  topBar: {
    visible: false,
  },
};

export default Details;
