import {
  SHOW_USER_FAILED,
  SHOW_USER_STARTED,
  SHOW_USER_SUCCESS,
} from '../../Redux.constants';
import {
  showTripFailed,
  showTripStarted,
  showTripSuccess
} from './Helper';
import { INITIAL_STATE } from './initialState';

export default function ShowTrip(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SHOW_USER_SUCCESS:
      return showTripSuccess(state, action.payload);
    case SHOW_USER_STARTED:
      return showTripStarted(state, action.payload);
    case SHOW_USER_FAILED:
      return showTripFailed(state, action.payload);
    default:
      return { ...state };
  }
}
