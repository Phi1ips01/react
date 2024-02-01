import {
  SHOW_TRIP_FAILED,
  SHOW_TRIP_STARTED,
  SHOW_TRIP_SUCCESS,
  POST_TRIP_FAILED,
  POST_TRIP_STARTED,
  POST_TRIP_SUCCESS,
  UPDATE_SELECTED_OPERATOR,
  DELETE_TRIP_STARTED,
  DELETE_TRIP_SUCCESS,
  DELETE_TRIP_FAILED,
  SET_SEARCH_TERM,
  SET_TABLE_DATA
} from '../../Redux.constants';
import {
  showTripFailed,
  showTripStarted,
  showTripSuccess,
  postTripFailed,
  postTripStarted,
  postTripSuccess,
  deleteTripStarted,
  deleteTripFailed,
  deleteTripSuccess,
  searchTermTrip,
  tableDataTrip
} from './Helper';
import { INITIAL_STATE } from './initialState';

export function DeleteTrip(state = INITIAL_STATE, action) {
  switch (action.type) {
    case DELETE_TRIP_SUCCESS:
      return deleteTripSuccess(state, action.payload);
    case DELETE_TRIP_STARTED:
      return deleteTripStarted(state, action.payload);
    case DELETE_TRIP_FAILED:
      return deleteTripFailed(state, action.payload);
    default:
      return { ...state };
  }
}


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

export function SearchTrip(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return searchTermTrip(state, action.payload);
    case SET_TABLE_DATA:
      return tableDataTrip(state, action.payload);
    default:
      return { ...state };
  }
}