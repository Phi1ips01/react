import {
  SHOW_USER_FAILED,
  SHOW_USER_STARTED,
  SHOW_USER_SUCCESS,
  POST_USER_FAILED,
  POST_USER_STARTED,
  POST_USER_SUCCESS,
  DELETE_USER_FAILED,
DELETE_USER_SUCCESS,
DELETE_USER_STARTED
} from '../../Redux.constants';
import {
  showUserFailed,
  showUserStarted,
  showUserSuccess,
  postUserFailed,
postUserStarted,
postUserSuccess,
deleteUserFailed,
deleteUserStarted,
deleteUserSuccess
} from './Helper';
import { INITIAL_STATE } from './initialState';

export function DeleteUser(state = INITIAL_STATE, action) {
  switch (action.type) {
    case DELETE_USER_SUCCESS:
      return deleteUserSuccess(state, action.payload);
    case DELETE_USER_STARTED:
      return deleteUserStarted(state, action.payload);
    case DELETE_USER_FAILED:
      return deleteUserFailed(state, action.payload);
    default:
      return { ...state };
  }
}


export function PostUser(state = INITIAL_STATE, action) {
  switch (action.type) {
    case POST_USER_SUCCESS:
      return postUserSuccess(state, action.payload);
    case POST_USER_STARTED:
      return postUserStarted(state, action.payload);
    case POST_USER_FAILED:
      return postUserFailed(state, action.payload);
    default:
      return { ...state };
  }
}

export function ShowUser(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SHOW_USER_SUCCESS:
      return showUserSuccess(state, action.payload);
    case SHOW_USER_STARTED:
      return showUserStarted(state, action.payload);
    case SHOW_USER_FAILED:
      return showUserFailed(state, action.payload);
    default:
      return { ...state };
  }
}
