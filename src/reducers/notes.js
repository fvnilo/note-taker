import { createReducer } from './helpers';

import { RECEIVE_NOTES, ADD_NOTE  } from '../constants/ActionTypes';

const initialState = {
  items: []
};

export const notes = createReducer(initialState, {
  [RECEIVE_NOTES]: (state, action) => {
    return Object.assign({}, state, {
      items: action.notes
    });
  },
  [ADD_NOTE]: (state, action) => {
    return Object.assign({}, {
      items: state.items.concat([action.note])
    });
  }

});
