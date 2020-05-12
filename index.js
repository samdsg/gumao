import React from 'react';
import {Root} from 'native-base';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import SplashScreen from './SplashScreen';
import DetailsScreen from './src/Components/Details';
import {websiteUrl} from './src/Helpers/misc';
import IO from 'socket.io-client';

// const socket = IO(`${websiteUrl}`);
// socket.on('news', data => {
//   console.log(data);
//   socket.emit('my other event', {my: 'data'});
// });

import store from './src/store';

Navigation.registerComponentWithRedux(
  'Details',
  () => gestureHandlerRootHOC(DetailsScreen),
  Provider,
  store,
);
Navigation.registerComponentWithRedux(
  'Splash',
  () => gestureHandlerRootHOC(SplashScreen),
  Provider,
  store,
);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              id: 'splash',
              name: 'Splash',
            },
          },
        ],
      },
    },
  });
});
