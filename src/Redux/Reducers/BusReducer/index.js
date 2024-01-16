import {
  SHOW_BUS_FAILED,
  SHOW_BUS_STARTED,
  SHOW_BUS_SUCCESS,
  POST_BUS_FAILED,
  POST_BUS_STARTED,
  POST_BUS_SUCCESS
} from '../../Redux.constants'; 
import {
  showBusFailed,
  showBusStarted,
  showBusSuccess,
  postBusSuccess,
  postBusFailed,
  postBusStarted
} from './Helper';
import { INITIAL_STATE } from './initialState';

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
