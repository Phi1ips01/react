import {
  SHOW_USER_FAILED,
  SHOW_USER_STARTED,
  SHOW_USER_SUCCESS,
  POST_USER_FAILED,
  POST_USER_STARTED,
  POST_USER_SUCCESS,
  DELETE_USER_FAILED,
  DELETE_USER_SUCCESS,
  DELETE_USER_STARTED,
  UPDATE_USER_FAILED,
  UPDATE_USER_STARTED,
  UPDATE_USER_SUCCESS,
  SHOW_ONE_USER_FAILED,
  SHOW_ONE_USER_STARTED,
  SHOW_ONE_USER_SUCCESS,
  SHOW_ALL_USER_FAILED,
  SHOW_ALL_USER_STARTED,
  SHOW_ALL_USER_SUCCESS,
  CLEAR_USER,
  SET_SEARCH_TERM,
  SET_TABLE_DATA,
  SET_CURRENT_PAGE
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
  deleteUserSuccess,
  updateUserFailed,
  updateUserStarted,
  updateUserSuccess,
  showOneUserFailed,
  showOneUserStarted,
  showOneUserSuccess,
  showAllUserFailed,
  showAllUserStarted,
  showAllUserSuccess,
  clearUser,
  searchTermUser,
  tableDataUser
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
export function UpdateUser(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_USER_SUCCESS:
      return updateUserSuccess(state, action.payload);
    case UPDATE_USER_STARTED:
      return updateUserStarted(state, action.payload);
    case UPDATE_USER_FAILED:
      return updateUserFailed(state, action.payload);
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

export function SearchUser(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return searchTermUser(state, action.payload);
    case SET_TABLE_DATA:
      return tableDataUser(state, action.payload);
    default:
      return { ...state };
  }
}

export function ShowOneUser(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SHOW_ONE_USER_SUCCESS:
      return showOneUserSuccess(state, action.payload);
    case SHOW_ONE_USER_STARTED:
      return showOneUserStarted(state, action.payload);
    case SHOW_ONE_USER_FAILED:
      return showOneUserFailed(state, action.payload);
      case CLEAR_USER:
      return clearUser(state,action.payload);
    default:
      return { ...state };
  }
}
export function ShowAllUser(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SHOW_ALL_USER_SUCCESS:
      return showAllUserSuccess(state, action.payload);
    case SHOW_ALL_USER_STARTED:
      return showAllUserStarted(state, action.payload);
    case SHOW_ALL_USER_FAILED:
      return showAllUserFailed(state, action.payload);
    default:
      return { ...state };
  }
}

export const CurrentPageReducerUser = (state = INITIAL_STATE, action) => {
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
