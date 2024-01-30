import {combineReducers} from 'redux';

import Login from './Login';
import {ShowBus,PostBus,DeleteBus} from './BusReducer';
import {ShowBusOperator,PostBusOperator,DeleteBusOperator} from './BusOperatorReducer'
import {ShowOperatorUpdate,PostOperatorUpdate} from './OperatorUpdateReducer'
import {ShowTrip,PostTrip,UpdateSelectedOperatorID,DeleteTrip} from './TripReducer'
import {ShowUser,PostUser,DeleteUser} from './UserReducer';
export default combineReducers({
  Login,
  ShowBus,PostBus,DeleteBus,
  ShowBusOperator,PostBusOperator,DeleteBusOperator,
  ShowOperatorUpdate,PostOperatorUpdate,
  ShowTrip,PostTrip,UpdateSelectedOperatorID,DeleteTrip,
  ShowUser,PostUser,DeleteUser
});