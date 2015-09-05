import { createReducer } from './helpers';

import { REQUEST_PROFILE, RECEIVE_PROFILE } from '../constants/ActionTypes.js';

const initialProfileState = {
  bio: {},
  repos: [],
  isFetching: false
};

export const profile = createReducer(initialProfileState, {
  [REQUEST_PROFILE]: (state, action) => {
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
