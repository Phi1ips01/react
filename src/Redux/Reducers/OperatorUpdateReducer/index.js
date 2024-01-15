import {
SHOW_OPERATOR_UPDATE_FAILED,
SHOW_OPERATOR_UPDATE_STARTED,
SHOW_OPERATOR_UPDATE_SUCCESS
} from '../../Redux.constants';
import {
  showOperatorUpdateFailed,
  showOperatorUpdateStarted,
  showOperatorUpdateSuccess
} from './Helper';
import { INITIAL_STATE } from './initialState';

export default function ShowOperatorUpdate(state = INITIAL_STATE, action) {
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
