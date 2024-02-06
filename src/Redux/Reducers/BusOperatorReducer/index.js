import {
SHOW_BUS_OPERATOR_FAILED,
SHOW_BUS_OPERATOR_SUCCESS,
SHOW_OPERATOR_UPDATE_STARTED,
POST_BUS_OPERATOR_FAILED,
POST_BUS_OPERATOR_SUCCESS,
POST_OPERATOR_UPDATE_STARTED,
DELETE_BUS_OPERATOR_FAILED,
DELETE_BUS_OPERATOR_STARTED,
DELETE_BUS_OPERATOR_SUCCESS,
UPDATE_BUS_OPERATOR_FAILED,
UPDATE_BUS_OPERATOR_STARTED,
UPDATE_BUS_OPERATOR_SUCCESS,
SHOW_ONE_BUS_OPERATOR_FAILED,
SHOW_ONE_BUS_OPERATOR_STARTED,
SHOW_ONE_BUS_OPERATOR_SUCCESS,
SET_SEARCH_TERM,
SET_TABLE_DATA,
CLEAR_BUS_OPERATOR
} from '../../Redux.constants';
import {
  showBusOperatorFailed,
  showBusOperatorStarted,
  showBusOperatorSuccess,
  postBusOperatorFailed,
  postBusOperatorStarted,
  postBusOperatorSuccess,
  deleteBusOperatorSuccess,
  deleteBusOperatorStarted,
  deleteBusOperatorFailed,
  showOneBusOperatorFailed,
  showOneBusOperatorStarted,
  showOneBusOperatorSuccess,
  searchTermBusOperator,
  tableDataBusOperator,
  updateBusOperatorFailed,
  updateBusOperatorStarted,
  updateBusOperatorSuccess,
  clearBusOperator,
} from './Helper';
import { INITIAL_STATE } from './initialState';


export function SearchBusOperator(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return searchTermBusOperator(state, action.payload);
    case SET_TABLE_DATA:
      return tableDataBusOperator(state, action.payload);
    default:
      return { ...state };
  }
}

export function PostBusOperator(state = INITIAL_STATE, action) {
  switch (action.type) {
    case POST_BUS_OPERATOR_SUCCESS:
      return postBusOperatorSuccess(state, action.payload);
    case POST_OPERATOR_UPDATE_STARTED:
      return postBusOperatorStarted(state, action.payload);
    case POST_BUS_OPERATOR_FAILED:
      return postBusOperatorFailed(state, action.payload);
    default:
      return { ...state };
  }
}

export function ShowBusOperator(state = INITIAL_STATE, action) {
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

export function ShowOneBusOperator(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SHOW_ONE_BUS_OPERATOR_SUCCESS:
      return showOneBusOperatorSuccess(state, action.payload);
    case SHOW_ONE_BUS_OPERATOR_STARTED:
      return showOneBusOperatorStarted(state, action.payload);
    case SHOW_ONE_BUS_OPERATOR_FAILED:
      return showOneBusOperatorFailed(state, action.payload);
      case CLEAR_BUS_OPERATOR:
      return clearBusOperator(state,action.payload);
    default:
      return { ...state };
  }
}
export function DeleteBusOperator(state = INITIAL_STATE, action) {
  switch (action.type) {
    case DELETE_BUS_OPERATOR_SUCCESS:
      return deleteBusOperatorSuccess(state, action.payload);
    case DELETE_BUS_OPERATOR_STARTED:
      return deleteBusOperatorStarted(state, action.payload);
    case DELETE_BUS_OPERATOR_FAILED:
      return deleteBusOperatorFailed(state, action.payload);
    default:
      return { ...state };
  }
}
export function UpdateBusOperator(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_BUS_OPERATOR_SUCCESS:
      return updateBusOperatorSuccess(state, action.payload);
    case UPDATE_BUS_OPERATOR_STARTED:
      return updateBusOperatorStarted(state, action.payload);
    case UPDATE_BUS_OPERATOR_FAILED:
      return updateBusOperatorFailed(state, action.payload);
    default:
      return { ...state };
  }
}
