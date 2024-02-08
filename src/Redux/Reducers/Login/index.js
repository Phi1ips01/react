import {
  LOGIN_SUCCESS,
  LOGIN_STARTED,
  LOGIN_FAILED,
  LOGOUT,
} from '../../Redux.constants';
import {
  loginSuccess,
  loginStarted,
  loginFailed,
  logout
} from './Helper';
import { INITIAL_STATE } from './initialState';

export default function Login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return loginSuccess(state, action.payload);
    case LOGIN_STARTED:
      return loginStarted(state, action.payload);
    case LOGIN_FAILED:
      return loginFailed(state, action.payload);
    default:
      return { ...state };
  }
}

export function LogOut(state = INITIAL_STATE,action){
  switch(action.type)
  {
    case LOGOUT:
      
        return logout(state,action.payload)

        default:
          return {...state}
  }
}