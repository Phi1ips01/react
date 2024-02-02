import {combineReducers} from 'redux';

import Login from './Login';
import {ShowBus,PostBus,DeleteBus,SearchBus,UpdateBus} from './BusReducer';
import {ShowBusOperator,PostBusOperator,DeleteBusOperator,SearchBusOperator,UpdateBusOperator,ShowOneBusOperator} from './BusOperatorReducer'
import {ShowOperatorUpdate,PostOperatorUpdate} from './OperatorUpdateReducer'
import {ShowTrip,PostTrip,UpdateSelectedOperatorID,DeleteTrip,SearchTrip,UpdateTrip} from './TripReducer'
import {ShowUser,PostUser,DeleteUser,SearchUser,UpdateUser} from './UserReducer';
export default combineReducers({
  Login,
  ShowBus,PostBus,DeleteBus,SearchBus,UpdateBus,
  ShowBusOperator,PostBusOperator,DeleteBusOperator,SearchBusOperator,UpdateBusOperator,ShowOneBusOperator,
  ShowOperatorUpdate,PostOperatorUpdate,
  ShowTrip,PostTrip,UpdateSelectedOperatorID,DeleteTrip,SearchTrip,UpdateTrip,
  ShowUser,PostUser,DeleteUser,SearchUser,UpdateUser,
});