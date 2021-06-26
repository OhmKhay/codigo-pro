import { combineReducers } from 'redux';
import alert from './alert';
// import { getdonors } from './getdonors';
import { data } from './getData';
export default combineReducers({
  alert,
  data
});
