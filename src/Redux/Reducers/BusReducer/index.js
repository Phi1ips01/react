import {
  SHOW_BUS_FAILED,
  SHOW_BUS_STARTED,
  SHOW_BUS_SUCCESS,
} from '../../Redux.constants';
import {
  showBusFailed,
  showBusStarted,
  showBusSuccess
} from './Helper';
import { INITIAL_STATE } from './initialState';

export default function ShowBus(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SHOW_BUS_SUCCESS:
      return showBusSuccess(state, action.payload);
    case SHOW_BUS_STARTED:
      return showBusStarted(state, action.payload);
    case SHOW_BUS_FAILED:
      return showBusFailed(state, action.payload);
    default:
      return { ...state };
  }
}
