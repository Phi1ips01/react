import { KEYS } from '../../../../dataKeys';
import Redirect from 'react-router-dom'
import { ROUTES} from '../../../../Routes.constants';
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
  console.log('reached inside reducer',payload.data.token);
  localStorage.setItem(KEYS.ACCESS_TOKEN, payload.data.token);

  return {
    ...state,
    login: {
      loading: false,
      error: false,
      payload:payload.data.token
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
export function logout(state,payload)
{
  localStorage.removeItem(KEYS.ACCESS_TOKEN)
  
  return{
    ...state,
    login:{
      loading:false,
      error:false,
      payload:{}
    }
  }
}