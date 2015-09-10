import { createReducer } from './helpers';

import { RECEIVE_NOTES, ADD_NOTE  } from '../constants/ActionTypes';

const initialState = {
  items: [],
  listener: null
};

export const notes = createReducer(initialState, {
  [RECEIVE_NOTES]: (state, action) => {
    return Object.assign({}, state, {
      items: action.notes,
      listener: action.listener
    });
  },
  [ADD_NOTE]: (state, action) => {
    return Object.assign({}, state, {
      items: state.items.concat([action.note])
    });
  }

});
