import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {Navigation} from 'react-native-navigation';
import SplashScreen from './SplashScreen';

Navigation.registerComponent('SplashScreen', () => gestureHandlerRootHOC(SplashScreen));

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'SplashScreen',
            },
          },
        ],
      },
    },
  });
});
