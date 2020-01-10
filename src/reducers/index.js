import { combineReducers } from 'redux';
import { user } from './user';
import { nasaImages } from './nasaImages'

export const rootReducer = combineReducers({
  user,
  nasaImages
});