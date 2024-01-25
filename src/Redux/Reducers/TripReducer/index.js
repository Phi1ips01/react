import {
  SHOW_TRIP_FAILED,
  SHOW_TRIP_STARTED,
  SHOW_TRIP_SUCCESS,
  POST_TRIP_FAILED,
  POST_TRIP_STARTED,
  POST_TRIP_SUCCESS,
  UPDATE_SELECTED_OPERATOR
} from '../../Redux.constants';
import {
  showTripFailed,
  showTripStarted,
  showTripSuccess,
  postTripFailed,
  postTripStarted,
  postTripSuccess
} from './Helper';
import { INITIAL_STATE } from './initialState';


export function PostTrip(state = INITIAL_STATE, action) {
  switch (action.type) {
    case POST_TRIP_SUCCESS:
      return postTripSuccess(state, action.payload);
    case POST_TRIP_STARTED:
      return postTripStarted(state, action.payload);
    case POST_TRIP_FAILED:
      return postTripFailed(state, action.payload);
    default:
      return { ...state };
  }
}
export function UpdateSelectedOperatorID(state = INITIAL_STATE,action){
    switch (action.type) {
      case UPDATE_SELECTED_OPERATOR:
        return {
          ...state,
          selectedOperatorId: action.payload,
        };
      // handle other action types if needed
      default:
        return state;
    }
  };


export function ShowTrip(state = INITIAL_STATE, action) {
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
