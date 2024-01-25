import {combineReducers} from 'redux';

import Login from './Login';
import {ShowBus,PostBus} from './BusReducer';
import {ShowBusOperator,PostBusOperator} from './BusOperatorReducer'
import {ShowOperatorUpdate,PostOperatorUpdate} from './OperatorUpdateReducer'
import {ShowTrip,PostTrip,UpdateSelectedOperatorID} from './TripReducer'
import {ShowUser,PostUser} from './UserReducer';
export default combineReducers({
  Login,
  ShowBus,PostBus,
  ShowBusOperator,PostBusOperator,
  ShowOperatorUpdate,PostOperatorUpdate,
  ShowTrip,PostTrip,UpdateSelectedOperatorID,
  ShowUser,PostUser,
});