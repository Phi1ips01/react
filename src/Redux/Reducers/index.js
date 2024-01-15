import {combineReducers} from 'redux';

import Login from './Login';
import ShowBus from './BusReducer';
export default combineReducers({
  Login,
  ShowBus
});