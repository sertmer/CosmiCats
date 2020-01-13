import { combineReducers } from 'redux';
import { user } from './user';
import { nasaImages } from './nasaImages';
import { catImages } from './catImages'
import { evidence } from './evidence'

export const rootReducer = combineReducers({
  user,
  nasaImages,
  catImages,
  evidence
});