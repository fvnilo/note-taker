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

export function fetchProfile(userName) {
  return dispatch => {
    dispatch(requestProfile(userName));
    axios.get(`https://api.github.com/users/${userName}`)
      .then(function(response) {
        console.log(response);
      });
  };
}
