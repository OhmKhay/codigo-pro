import { combineReducers } from 'redux';
import { work } from './getDetailWork';
import { data } from './getData';
export default combineReducers({
  data,
  work
});
