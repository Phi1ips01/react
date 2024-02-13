import {combineReducers} from 'redux';

import Login,{LogOut} from './Login';
import {ShowBus,PostBus,DeleteBus,SearchBus,UpdateBus,ShowOneBus} from './BusReducer';
import {ShowBusOperator,PostBusOperator,DeleteBusOperator,SearchBusOperator,UpdateBusOperator,ShowOneBusOperator,} from './BusOperatorReducer'
import {ShowOperatorUpdate,PostOperatorUpdate} from './OperatorUpdateReducer'
import {ShowTrip,PostTrip,UpdateSelectedOperatorID,DeleteTrip,SearchTrip,UpdateTrip,ShowOneTrip,pageIndexTripReducer,pageSizeTripReducer,totalPagesTripReducer,dataTripReducer} from './TripReducer'
import {ShowUser,PostUser,DeleteUser,SearchUser,UpdateUser,ShowOneUser} from './UserReducer';
export default combineReducers({
  Login,LogOut,
  ShowBus,PostBus,DeleteBus,SearchBus,UpdateBus,ShowOneBus,
  ShowBusOperator,PostBusOperator,DeleteBusOperator,SearchBusOperator,UpdateBusOperator,ShowOneBusOperator,
  ShowOperatorUpdate,PostOperatorUpdate,
  ShowTrip,PostTrip,UpdateSelectedOperatorID,DeleteTrip,SearchTrip,UpdateTrip,ShowOneTrip,pageIndexTripReducer,pageSizeTripReducer,totalPagesTripReducer,dataTripReducer,
  ShowUser,PostUser,DeleteUser,SearchUser,UpdateUser,ShowOneUser,
});