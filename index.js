import React, {} from 'react';
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
  Navigation.setRoot({
    root: {
      component: {
        id: 'Home',
        name: 'Home',
      },
    },
  });
  // Navigation.setRoot({
  //   root: {
  //     bottomTabs: {
  //       id: 'BOTTOM_TABS_LAYOUT',
  //       children: [
  //         {
  //           stack: {
  //             id: 'HOME_TAB',
  //             children: [
  //               {
  //                 component: {
  //                   name: 'Home',
  //                 },
  //               },
  //             ],
  //           },
  //         },
  //         // {
  //         //   stack: {
  //         //     id: 'DETAIL_TAB',
  //         //     children: [
  //         //       {
  //         //         component: {
  //         //           name: 'Details',
  //         //         },
  //         //       },
  //         //     ],
  //         //   },
  //         // },
  //       ],
  //     },
  //   },
  // });
});

Navigation.setDefaultOptions({
  topBar: {
    drawBehind: true,
  },
  bottomTabs: {
    visible: false,
    drawBehind: true,
  },
});

export const detailRoot = {
  root: {
    stack: {
      id: 'details',
      children: [
        {
          component: {
            name: 'Details',
          },
        },
      ],
    },
  },
};
