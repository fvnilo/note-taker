import { createReducer } from './helpers';

import { REQUEST_PROFILE, RECEIVE_PROFILE } from '../constants/ActionTypes.js';

const initialProfileState = {
  user: {},
  repos: [],
  isFetching: false
};

function buildBio(profile) {
  const {
    name,
    location,
    email,
    followers,
    following,
    company,
    blog,
    hireable,
    avatar_url: avatarUrl} = profile;

  return {
    name,
    location,
    email,
    avatarUrl,
    followers,
    following,
    company,
    blog,
    hireable
  };
}

export const profile = createReducer(initialProfileState, {
  [REQUEST_PROFILE]: (state) => {
    return Object.assign({}, state, {
      isFetching: true
    });
  },
  [RECEIVE_PROFILE]: (state, action) => {
    return Object.assign({}, { user: buildBio(action.profile) }, {
      isFetching: false
    });
  }
});
