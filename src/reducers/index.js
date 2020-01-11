import { combineReducers } from 'redux';
import { user } from './user';
import { nasaImages } from './nasaImages';
import { catImages } from './catImages'

export const rootReducer = combineReducers({
  user,
  nasaImages,
  catImages
});