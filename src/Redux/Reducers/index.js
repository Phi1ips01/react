import {combineReducers} from 'redux';

import Login,{LogOut} from './Login';
import {ShowBus,PostBus,DeleteBus,SearchBus,UpdateBus,ShowOneBus,ShowAllBus,CurrentPageReducerBus} from './BusReducer';
import {ShowBusOperator,PostBusOperator,DeleteBusOperator,SearchBusOperator,UpdateBusOperator,ShowOneBusOperator,ShowAllBusOperator,CurrentPageReducerBusOperator,getTotalTaAndProfit} from './BusOperatorReducer'
import {ShowOperatorUpdate,PostOperatorUpdate} from './OperatorUpdateReducer'
import {ShowTrip,PostTrip,UpdateSelectedOperatorID,DeleteTrip,SearchTrip,UpdateTrip,ShowOneTrip,CurrentPageReducerTrip,ShowAllTrip} from './TripReducer'
import {ShowUser,PostUser,DeleteUser,SearchUser,UpdateUser,ShowOneUser,ShowAllUser,CurrentPageReducerUser} from './UserReducer';
export default combineReducers({
  Login,LogOut,
  ShowBus,PostBus,DeleteBus,SearchBus,UpdateBus,ShowOneBus,ShowAllBus,CurrentPageReducerBus,
  ShowBusOperator,PostBusOperator,DeleteBusOperator,SearchBusOperator,UpdateBusOperator,ShowOneBusOperator,ShowAllBusOperator,CurrentPageReducerBusOperator,getTotalTaAndProfit,
  ShowOperatorUpdate,PostOperatorUpdate,
  ShowTrip,PostTrip,UpdateSelectedOperatorID,DeleteTrip,SearchTrip,UpdateTrip,ShowOneTrip,CurrentPageReducerTrip,ShowAllTrip,
  ShowUser,PostUser,DeleteUser,SearchUser,UpdateUser,ShowOneUser,ShowAllUser,CurrentPageReducerUser
});