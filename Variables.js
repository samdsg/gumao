import {Dimensions} from 'react-native';

export const percentage = (num, p) => {
  return (num / 100) * p;
};

const {width, height} = Dimensions.get('window');

export const SCREEN_HEIGHT = height;
export const SCREEN_WIDTH = height;
export const SplashTopHeight = percentage(SCREEN_HEIGHT, 10);
export const SplashBottomHeight = percentage(SCREEN_HEIGHT, 10);
export const shadow = {
  shadowOffset: {width: 10, height: 10},
  shadowColor: 'black',
  shadowOpacity: 1,
  elevation: 3,
  backgroundColor: '#0000',
};
export const numberSize = percentage(SCREEN_HEIGHT, 16);
export const imgWidth = percentage(SCREEN_WIDTH, 80);
export const ImgContainerHeight = percentage(SCREEN_HEIGHT, 40);
export const Fonts = percentage(SCREEN_WIDTH, 10);

export const info = {
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
};
