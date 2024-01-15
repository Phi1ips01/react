import { instance as Login } from './login';
import { instance as getBus,postInstance as postBus } from './busAPI';
import {instance as getBusOperator,postInstance as postBusOperator} from './busOperatorAPI'
import {instance as getUser,postInstance as postUser} from './userAPI'
import {instance as getOperatorUpdate,postInstance as postOperatorUpdate} from './operatorUpdateAPI'
import {instance as getTrip,postInstance as postTrip} from './tripAPI' 


export const Instances = [
     Login,
     getBus,
     postBus,
     getBusOperator,
     postBusOperator,
     getUser,
     postUser,
     getOperatorUpdate,
     postOperatorUpdate,
     getTrip,postTrip
    ];

