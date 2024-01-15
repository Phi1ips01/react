import {
  SHOW_TRIP_FAILED,
  SHOW_TRIP_STARTED,
  SHOW_TRIP_SUCCESS,
} from '../../Redux.constants';
import {
  showTripFailed,
  showTripStarted,
  showTripSuccess
} from './Helper';
import { INITIAL_STATE } from './initialState';

export default function ShowTrip(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SHOW_TRIP_SUCCESS:
      return showTripSuccess(state, action.payload);
    case SHOW_TRIP_STARTED:
      return showTripStarted(state, action.payload);
    case SHOW_TRIP_FAILED:
      return showTripFailed(state, action.payload);
    default:
      return { ...state };
  }
}
