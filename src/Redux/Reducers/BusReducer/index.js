import {
  SHOW_BUS_FAILED,
  SHOW_BUS_STARTED,
  SHOW_BUS_SUCCESS,
  POST_BUS_FAILED,
  POST_BUS_STARTED,
  POST_BUS_SUCCESS,
  DELETE_BUS_STARTED,
  DELETE_BUS_SUCCESS,
  DELETE_BUS_FAILED,
  UPDATE_BUS_FAILED,
  UPDATE_BUS_STARTED,
  UPDATE_BUS_SUCCESS,
  SET_SEARCH_TERM,
  SET_TABLE_DATA

} from '../../Redux.constants'; 
import {
  showBusFailed,
  showBusStarted,
  showBusSuccess,
  postBusSuccess,
  postBusFailed,
  postBusStarted,
  deleteBusFailed,
  deleteBusStarted,
  deleteBusSuccess,
  updateBusFailed,
  updateBusStarted,
  updateBusSuccess,
  searchTermBus,
  tableDataBus
} from './Helper';
import { INITIAL_STATE } from './initialState';

export function DeleteBus(state = INITIAL_STATE, action) {
  switch (action.type) {
    case DELETE_BUS_SUCCESS:
      return deleteBusSuccess(state, action.payload);
    case DELETE_BUS_STARTED:
      return deleteBusStarted(state, action.payload);
    case DELETE_BUS_FAILED:
      return deleteBusFailed(state, action.payload);
    default:
      return { ...state };
  }
}

export function UpdateBus(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_BUS_SUCCESS:
      return updateBusSuccess(state, action.payload);
    case UPDATE_BUS_STARTED:
      return updateBusStarted(state, action.payload);
    case UPDATE_BUS_FAILED:
      return updateBusFailed(state, action.payload);
    default:
      return { ...state };
  }
}



export function PostBus(state = INITIAL_STATE, action) {
  switch (action.type) {
    case POST_BUS_SUCCESS:
      return postBusSuccess(state, action.payload);
    case POST_BUS_STARTED:
      return postBusStarted(state, action.payload);
    case POST_BUS_FAILED:
      return postBusFailed(state, action.payload);
    default:
      return { ...state };
  }
}

export function ShowBus(state = INITIAL_STATE, action) {
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


export function SearchBus(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return searchTermBus(state, action.payload);
    case SET_TABLE_DATA:
      return tableDataBus(state, action.payload);
    default:
      return { ...state };
  }
}