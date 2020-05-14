import React, {useRef, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, BackHandler} from 'react-native';
import {Container, Content, Root} from 'native-base';
import {withSpringTransition} from 'react-native-redash';
import {connect} from 'react-redux';
import {Navigation} from 'react-native-navigation';
import Animated, {
  cond,
  eq,
  useCode,
  SpringUtils,
  set,
} from 'react-native-reanimated';
import {State} from 'react-native-gesture-handler';
import {onGestureEvent} from 'react-native-redash';

/* Components */
import Title from './src/Components/Title';
import TopPlayer from './src/Components/TopPlayer';
import FooterIcons from './src/Components/FooterIcons';
import ListScreen from './src/Components/ListScreen';

import {getTopPlayers} from './src/store/actions/playerAction';
console.ignoredYellowBox = [
  'Warning: Each',
  'Warning: Failed',
  "Warning: Can't perform",
];

const SplashScreen = ({getTopPlayers, componentId}) => {
  getTopPlayers();
  /* Image, Top */
  const animeone = useRef(new Animated.Value(0));
  const animeoneAnime = withSpringTransition(animeone.current, {
    ...SpringUtils.makeDefaultConfig(),
    overshootClamping: true,
    damping: new Animated.Value(40),
  });
  useCode(() => [cond(eq(animeone.current, 0), set(animeone.current, 1))]);

  const landingOpen = useRef(new Animated.Value(1));
  const landingAnimation = withSpringTransition(landingOpen.current, {
    ...SpringUtils.makeDefaultConfig(),
    overshootClamping: true,
    damping: new Animated.Value(10),
  });

  const listOpen = useRef(new Animated.Value(0));
  const listOpenAnimation = withSpringTransition(listOpen.current, {
    ...SpringUtils.makeDefaultConfig(),
    overshootClamping: true,
    damping: new Animated.Value(20),
  });

  const searchState = useRef(new Animated.Value(State.UNDETERMINED));
  const searchHandler = onGestureEvent({state: searchState.current});

  useCode(
    () => [
      cond(eq(searchState.current, State.END), [
        cond(eq(landingOpen.current, 1), [set(landingOpen.current, 0)]),
        cond(eq(listOpen.current, 0), [set(listOpen.current, 1)]),
      ]),
    ],
    [searchState.current],
  );

  const backBtnState = useRef(new Animated.Value(State.UNDETERMINED));
  const backBtnHandler = onGestureEvent({state: backBtnState.current});

  useCode(
    () => [
      cond(eq(backBtnState.current, State.END), [
        cond(eq(listOpen.current, 1), [
          set(listOpen.current, 0),
          set(landingOpen.current, 1),
          set(backBtnState.current, State.UNDETERMINED),
          set(searchState.current, State.UNDETERMINED),
        ]),
      ]),
    ],
    [backBtnState.current],
  );

  const handleBackPress = () => {
    Navigation.pop('details');

    BackHandler.exitApp();
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return function cleanup() {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  });
  return (
    <Root>
      <Container style={{...styles.container}}>
        <Content>
          <Animated.View
            style={{
              ...styles.container,
              opacity: landingAnimation,
            }}>
            <LinearGradient
              style={{
                ...styles.container,
                paddingHorizontal: 20,
                paddingVertical: 20,
              }}
              colors={['#202943', '#7C4864', '#F5718F', '#F8D8C9']}>
              <Title
                animeoneAnime={animeoneAnime}
                gestureHandler={{...searchHandler}}
              />
              <TopPlayer animeoneAnime={animeoneAnime} animeone={animeone} />
              <FooterIcons gestureHandler={{...searchHandler}} />
            </LinearGradient>
          </Animated.View>
        </Content>
        <ListScreen
          listOpenAnimation={listOpenAnimation}
          gestureHandler={{...backBtnHandler}}
          listOpen={listOpen}
        />
      </Container>
    </Root>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
});

SplashScreen.options = {
  topBar: {
    visible: false,
  },
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {getTopPlayers},
)(SplashScreen);
