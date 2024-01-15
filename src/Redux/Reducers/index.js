import {combineReducers} from 'redux';

import Login from './Login';
import ShowBus from './BusReducer';
import ShowBusOperator from './BusOperatorReducer'
import ShowOperatorUpdate from './BusOperatorReducer'
import ShowTrip from './TripReducer'
import ShowUser from './UserReducer';
export default combineReducers({
  Login,
  ShowBus,
  ShowBusOperator,
  ShowOperatorUpdate,
  ShowTrip,
  ShowUser
});