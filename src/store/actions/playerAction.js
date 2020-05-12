import axios from 'axios';
import {websiteUrl} from '../../Helpers/misc';
import {EventEmitter} from '../../Helpers/events';
import {
  GETHIGHESTNUMBERS,
  GETERROR,
  CLEARERROR,
  SEARCHAPLAYER,
  CLEARPLAYER,
  SEARCHING,
} from './types';

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
      dispatch({type: GETERROR, payload: err.response.data});
    });
};
export const clearError = () => dispatch => dispatch({type: CLEARERROR});
