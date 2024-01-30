import { instance as Login, } from './login';
import { instance as getBus,postInstance as postBus, deleteInstance as deleteBus } from './busAPI';
import {instance as getBusOperator,postInstance as postBusOperator, deleteInstance as deleteBusOperator} from './busOperatorAPI'
import {instance as getUser,postInstance as postUser,deleteInstance as deleteUser} from './userAPI'
import {instance as getOperatorUpdate,postInstance as postOperatorUpdate} from './operatorUpdateAPI'
import {instance as getTrip,postInstance as postTrip,deleteInstance as deleteTrip} from './tripAPI' 


export const Instances = [
     Login,
     getBus,
     postBus,
     deleteBus,
     getBusOperator,
     postBusOperator,
     deleteBusOperator,
     getUser,
     postUser,
     deleteUser,
     getOperatorUpdate,
     postOperatorUpdate,
     getTrip,postTrip,deleteTrip
    ];

