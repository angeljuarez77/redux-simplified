import { combineReducers } from 'redux';
import mathReducers from './mathReducers.js';

// this will be the "root reducer"
// The reducer that has all of the reducers for the entire application
// combined into 1
export default combineReducers({
  mathReducers,
});
