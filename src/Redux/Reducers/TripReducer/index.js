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
  UPDATE_TRIP_FAILED,
  UPDATE_TRIP_STARTED,
  UPDATE_TRIP_SUCCESS,
  SHOW_ONE_TRIP_FAILED,
  SHOW_ONE_TRIP_STARTED,
  SHOW_ONE_TRIP_SUCCESS,
  SHOW_ALL_TRIP_FAILED,
  SHOW_ALL_TRIP_STARTED,
  SHOW_ALL_TRIP_SUCCESS,
  SET_SEARCH_TERM,
  SET_TABLE_DATA,
  CLEAR_TRIP,
  SET_CURRENT_PAGE
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
  updateTripFailed,
  updateTripStarted,
  updateTripSuccess,
  showOneTripFailed,
  showOneTripStarted,
  showOneTripSuccess,
  showAllTripFailed,
  showAllTripStarted,
  showAllTripSuccess,
  clearTrip,
  searchTermTrip,
  tableDataTrip
} from './Helper';
import { INITIAL_STATE } from './initialState';

export function UpdateTrip(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_TRIP_SUCCESS:
      return updateTripSuccess(state, action.payload);
    case UPDATE_TRIP_STARTED:
      return updateTripStarted(state, action.payload);
    case UPDATE_TRIP_FAILED:
      return updateTripFailed(state, action.payload);
    default:
      return { ...state };
  }
}

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
        console.log("action.payloaddd",action.payload)
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
export function ShowOneTrip(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SHOW_ONE_TRIP_SUCCESS:
      return showOneTripSuccess(state, action.payload);
    case SHOW_ONE_TRIP_STARTED:
      return showOneTripStarted(state, action.payload);
    case SHOW_ONE_TRIP_FAILED:
      return showOneTripFailed(state, action.payload);
      case CLEAR_TRIP:
      return clearTrip(state,action.payload);
    default:
      return { ...state };
  }
}

export const CurrentPageReducerTrip = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};
export function ShowAllTrip(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SHOW_ALL_TRIP_SUCCESS:
      return showAllTripSuccess(state, action.payload);
    case SHOW_ALL_TRIP_STARTED:
      return showAllTripStarted(state, action.payload);
    case SHOW_ALL_TRIP_FAILED:
      return showAllTripFailed(state, action.payload);
    default:
      return { ...state };
  }
}
