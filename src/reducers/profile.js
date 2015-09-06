import { createReducer } from './helpers';

import { REQUEST_PROFILE, RECEIVE_PROFILE, ERROR_WHILE_FETCHING_PROFILE } from '../constants/ActionTypes.js';

const initialProfileState = {
  userName: '',
  user: {},
  repos: [],
  isFetching: false,
  errorOccured: false
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
  [REQUEST_PROFILE]: (state, action) => {
    return Object.assign({}, state, {
      userName: action.userName,
      isFetching: true,
      errorOccured: false
    });
  },
  [RECEIVE_PROFILE]: (state, action) => {
    return Object.assign({},
      state,
      {
        user: buildBio(action.profile.user)
      },
      {
        repos: action.profile.repos
      },
      {
        isFetching: false,
        errorOccured: false
      });
  },
  [ERROR_WHILE_FETCHING_PROFILE]: (state) => {
    return Object.assign({}, state, { errorOccured: true});
  }
});
