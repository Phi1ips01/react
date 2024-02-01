import {combineReducers} from 'redux';

import Login from './Login';
import {ShowBus,PostBus,DeleteBus,SearchBus} from './BusReducer';
import {ShowBusOperator,PostBusOperator,DeleteBusOperator,SearchBusOperator} from './BusOperatorReducer'
import {ShowOperatorUpdate,PostOperatorUpdate} from './OperatorUpdateReducer'
import {ShowTrip,PostTrip,UpdateSelectedOperatorID,DeleteTrip,SearchTrip} from './TripReducer'
import {ShowUser,PostUser,DeleteUser,SearchUser} from './UserReducer';
export default combineReducers({
  Login,
  ShowBus,PostBus,DeleteBus,SearchBus,
  ShowBusOperator,PostBusOperator,DeleteBusOperator,SearchBusOperator,
  ShowOperatorUpdate,PostOperatorUpdate,
  ShowTrip,PostTrip,UpdateSelectedOperatorID,DeleteTrip,SearchTrip,
  ShowUser,PostUser,DeleteUser,SearchUser,
});