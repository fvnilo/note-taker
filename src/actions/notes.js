import Rebase from 're-base';

import { REQUEST_NOTES, RECEIVE_NOTES, ADD_NOTE  } from '../constants/ActionTypes';

var base = Rebase.createClass('https://fanilo-github-notes.firebaseio.com/');

function requestNotes(userName) {
  return {
    type: REQUEST_NOTES,
    userName
  };
}

function receiveNotes(notes) {
  return {
    type: RECEIVE_NOTES,
    notes
  };
}

function doAddNote(note) {
  return {
    type: ADD_NOTE,
    note
  };
}

export function fetchNotes(userName) {
  return dispatch => {
    dispatch(requestNotes(userName));
    base.fetch(userName, {
      context: this,
      asArray: true,
      then(data) {
        dispatch(receiveNotes(data));
      }
    });
  };
}

export function addNote(note) {
  return (dispatch, getState) => {
    dispatch(doAddNote(note));
    base.post(getState().profile.userName, {
      data: getState().notes.items
    });
  };
}
