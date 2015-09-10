import Rebase from 're-base';

import { REQUEST_NOTES, RECEIVE_NOTES, ADD_NOTE  } from '../constants/ActionTypes';

var base = Rebase.createClass('https://fanilo-github-notes.firebaseio.com/');

function requestNotes(userName) {
  return {
    type: REQUEST_NOTES,
    userName
  };
}

function receiveNotes(notes, listener) {
  return {
    type: RECEIVE_NOTES,
    notes,
    listener
  };
}

function doAddNote(note) {
  return {
    type: ADD_NOTE,
    note
  };
}

function clearListener(listener) {
  if (listener) {
    base.removeBinding(listener);
  }
}

export function fetchNotes(userName) {
  return (dispatch, getState) => {
    dispatch(requestNotes(userName));
    clearListener(getState().notes.listener);
    var listener = base.listenTo(userName, {
      context: this,
      asArray: true,
      then(notes) {
        dispatch(receiveNotes(notes, listener));
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
