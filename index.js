import React from 'react';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import SplashScreen from './SplashScreen';
import DetailsScreen from './src/Components/Details';

import store from './src/store';

Navigation.registerComponentWithRedux(
  'Details',
  () => gestureHandlerRootHOC(DetailsScreen),
  Provider,
  store,
);
Navigation.registerComponentWithRedux(
  'Home',
  () => gestureHandlerRootHOC(SplashScreen),
  Provider,
  store,
);

Navigation.events().registerAppLaunchedListener(async () => {
  await Navigation.setRoot({
    root: {
      stack: {
        id: 'HomeStack', // This is the id we're going to use when interacting with the stack
        children: [
          {
            component: {
              id: 'details',
              name: 'Details',
            },
          },
          {
            component: {
              id: 'home',
              name: 'Home',
            },
          },
        ],
      },
    },
  });
});

Navigation.setDefaultOptions({
  animations: {
    push: {
      waitForRender: true,
    },
  },
});
