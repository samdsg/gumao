import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet} from 'react-native';
import {Container, Content} from 'native-base';

/* Components */
import Title from './src/Components/Title';
import TopPlayer from './src/Components/TopPlayer';
import FooterIcons from './src/Components/FooterIcons';
import ListScreen from './src/Components/ListScreen';
import Details from './src/Components/Details';

const SplashScreen = props => {
  return (
    <Container style={{...styles.container}}>
      <Details />
      <LinearGradient
        style={{
          flex: 1,
          display: 'none',
        }}
        colors={['#202943', '#7C4864', '#F5718F', '#F8D8C9']}>
        <ListScreen />
      </LinearGradient>

      <LinearGradient
        colors={['#202943', '#7C4864', '#F5718F', '#F8D8C9']}
        style={{
          ...styles.container,
          paddingHorizontal: 20,
          paddingVertical: 20,
        }}>
        <Content>
          <Title />
          <TopPlayer />
          <FooterIcons />
        </Content>
      </LinearGradient>
    </Container>
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

export default SplashScreen;
