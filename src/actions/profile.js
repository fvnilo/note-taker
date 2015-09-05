import axios from 'axios';

import { REQUEST_PROFILE, RECEIVE_PROFILE } from '../constants/ActionTypes';

function requestProfile(userName) {
  return {
    type: REQUEST_PROFILE,
    userName
  };
}

function receiveProfile(profile) {
  return {
    type: RECEIVE_PROFILE,
    profile
  };
}

function getUser(userName) {
  return axios.get(`https://api.github.com/users/${userName}`);
}

function getUserRepos(userName) {
  return axios.get(`https://api.github.com/users/${userName}/repos`);
}

export function fetchProfile(userName) {
  return dispatch => {
    dispatch(requestProfile(userName));
    axios.all([getUser(userName), getUserRepos(userName)])
      .then(axios.spread((userResponse, reposResponse) => {
        dispatch(receiveProfile({
          user: userResponse.data,
          repos: reposResponse.data
        }));
      }));
  };
}
