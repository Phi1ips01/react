import {
SHOW_BUS_OPERATOR_FAILED,
SHOW_BUS_OPERATOR_SUCCESS,
SHOW_OPERATOR_UPDATE_STARTED,
POST_BUS_OPERATOR_FAILED,
POST_BUS_OPERATOR_SUCCESS,
POST_OPERATOR_UPDATE_STARTED,
DELETE_BUS_OPERATOR_FAILED,
DELETE_BUS_OPERATOR_STARTED,
DELETE_BUS_OPERATOR_SUCCESS
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
} from './Helper';
import { INITIAL_STATE } from './initialState';

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