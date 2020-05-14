import axios from 'axios';
import {websiteUrl} from '../../Helpers/misc';
import {
  GETERROR,
  CLEARERROR,
  SEARCHAPLAYER,
  SEARCHING,
  MYPLAYER,
} from './types';
import AsyncStorage from '@react-native-community/async-storage';

export const getTopPlayers = () => async dispatch => {};

export const searchGamer = ({gamertag, platform}) => async dispatch => {
  await axios({
    method: 'GET',
    url: `${websiteUrl}/api/v1/profile`,
    params: {
      gamertag,
      platform,
    },
    onUploadProgress: function(e) {
      dispatch({type: SEARCHING, payload: true});
      const percentCompleted = Math.floor((e.loaded * 100) / e.total);
    },
  })
    .then(res => {
      dispatch({type: SEARCHING, payload: false});
      dispatch({type: CLEARERROR});
      dispatch({type: SEARCHAPLAYER, payload: res.data});
    })
    .catch(err => {
      dispatch({type: SEARCHING, payload: false});
      dispatch({type: GETERROR, payload: 'nothing found'});
    });
};
export const clearError = () => dispatch => dispatch({type: CLEARERROR});

export const playerData = () => async dispatch => {
  const player = JSON.parse(await AsyncStorage.getItem('@player'));

  dispatch({
    type: MYPLAYER,
    payload: player,
  });
};
