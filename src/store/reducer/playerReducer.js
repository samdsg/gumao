import {
  GETHIGHESTNUMBERS,
  LOADMYSEARCHES,
  SEARCHAPLAYER,
  GETERROR,
  CLEARERROR,
  CLEARPLAYER,
} from '../actions/types';

const initialState = {
  hights: null,
  mysearches: {status: false},
  search: null,
  err: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GETHIGHESTNUMBERS:
      return {
        ...state,
      };
    case LOADMYSEARCHES:
      return {
        ...state,
      };
    case SEARCHAPLAYER:
      return {
        ...state,
        mysearches: {...action.payload, ...state.mysearches},
      };
    case GETERROR:
      return {
        ...state,
        err: action.payload,
      };
    case CLEARERROR:
      return {
        ...state,
        err: null,
      };
    case CLEARPLAYER:
      return {
        ...state,
      };
    default:
      return state;
  }
};
