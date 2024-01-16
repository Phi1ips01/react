import {
SHOW_OPERATOR_UPDATE_FAILED,
SHOW_OPERATOR_UPDATE_STARTED,
SHOW_OPERATOR_UPDATE_SUCCESS,
POST_OPERATOR_UPDATE_FAILED,
POST_OPERATOR_UPDATE_STARTED,
POST_OPERATOR_UPDATE_SUCCESS
} from '../../Redux.constants';
import {
  showOperatorUpdateFailed,
  showOperatorUpdateStarted,
  showOperatorUpdateSuccess,
  postOperatorUpdateFailed,
  postOperatorUpdateStarted,
  postOperatorUpdateSuccess
} from './Helper';
import { INITIAL_STATE } from './initialState';

export function PostOperatorUpdate(state = INITIAL_STATE, action) {
  switch (action.type) {
    case POST_OPERATOR_UPDATE_STARTED:
      return postOperatorUpdateSuccess(state, action.payload);
    case POST_OPERATOR_UPDATE_SUCCESS:
      return postOperatorUpdateStarted(state, action.payload);
    case POST_OPERATOR_UPDATE_FAILED:
      return postOperatorUpdateFailed(state, action.payload);
    default:
      return { ...state };
  }
}


export function ShowOperatorUpdate(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SHOW_OPERATOR_UPDATE_STARTED:
      return showOperatorUpdateSuccess(state, action.payload);
    case SHOW_OPERATOR_UPDATE_SUCCESS:
      return showOperatorUpdateStarted(state, action.payload);
    case SHOW_OPERATOR_UPDATE_FAILED:
      return showOperatorUpdateFailed(state, action.payload);
    default:
      return { ...state };
  }
}
