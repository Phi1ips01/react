import { KEYS } from '../../../../dataKeys';

export function loginStarted(state, payload) {
  return {
    ...state,
    login: {
      loading: true,
      error: false
    }
  };
}

export function loginSuccess(state, payload) {
  console.log('reached inside reducer');
  localStorage.setItem(KEYS.ACCESS_TOKEN, payload.data.token);
  return {
    ...state,
    login: {
      loading: false,
      error: false
    },
  };
}


export function loginFailed(state, payload) {
  return {
    ...state,
    login: {
      loading: false,
      error: payload
    }
  };
}