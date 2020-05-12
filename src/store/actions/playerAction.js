import axios from 'axios';
import {websiteUrl, socket} from '../../Helpers/misc';
import {
  GETHIGHESTNUMBERS,
  GETERROR,
  CLEARERROR,
  SEARCHAPLAYER,
  CLEARPLAYER,
} from './types';

export const getTopPlayers = () => async dispatch => {};
export const searchGamer = ({gamertag, platform}) => async dispatch => {
  socket.emit('gamer', {gamertag, platform});

  socket.on('notfound', data => {
    console.log(data);
  });

  socket.on('found', ({data, status}) => {
    console.log(data);
  });

  // await axios({
  //   method: 'GET',
  //   url: `${websiteUrl}/api/v1/profile`,
  //   params: {
  //     gamertag,
  //     platform,
  //   },
  // })
  //   .then(res => {
  //     dispatch({type: CLEARERROR});
  //     dispatch({type: SEARCHAPLAYER, payload: res.data});
  //   })
  //   .catch(err => {
  //     return dispatch({type: GETERROR, payload: err.response.data});
  //   });
};
export const clearError = () => dispatch => dispatch({type: CLEARERROR});
