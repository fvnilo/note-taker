import { createReducer } from './helpers';

import { FETCH_PROFILE, RECEIVE_PROFILE } from '../constants/ActionTypes.js';

const initialProfileState = {
  bio: {},
  repos: [],
  isFetching: false
};

export const createReducer(initialProfileState, {
  [FETCH_PROFILE]: (state, action) => {
    return Object.assign({}, state, {
      isFetching: true
    });
  },
  [RECEIVE_PROFILE]: (state, action) => {
    return Object.assign({}, state, {
      isFetching: false
    });
  }
});
