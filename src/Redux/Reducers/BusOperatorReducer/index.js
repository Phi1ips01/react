import {
SHOW_BUS_OPERATOR_FAILED,
SHOW_BUS_OPERATOR_SUCCESS,
SHOW_OPERATOR_UPDATE_STARTED
} from '../../Redux.constants';
import {
  showBusOperatorFailed,
  showBusOperatorStarted,
  showBusOperatorSuccess
} from './Helper';
import { INITIAL_STATE } from './initialState';

export default function ShowBus(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SHOW_BUS_OPERATOR_SUCCESS:
      return showBusOperatorSuccess(state, action.payload);
    case SHOW_OPERATOR_UPDATE_STARTED:
      return showBusOperatorStarted(state, action.payload);
    case SHOW_BUS_OPERATOR_FAILED:
      return showBusOperatorFailed(state, action.payload);
    default:
      return { ...state };
  }
}
