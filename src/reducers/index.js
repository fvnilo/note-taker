import { combineReducers } from 'redux';

import { profile } from './profile';
import { notes } from './notes';

export const rootReducer = combineReducers({
  profile,
  notes
});
