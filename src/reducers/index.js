import { combineReducers } from 'redux';
import alert from './alert';
import { work } from './getDetailWork';
import { data } from './getData';
export default combineReducers({
  alert,
  data,
  work
});
