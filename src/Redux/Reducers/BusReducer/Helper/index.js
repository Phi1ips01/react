
export function showBusStarted(state, payload) {
  return {
    ...state,
    showBus: {
      loading: true,
      error: false
    }
  };
}

export function showBusSuccess(state, payload) {
  console.log('reached inside reducer');
  
  return {
    ...state,
    showBus: {
      loading: false,
      error: false,
      data: payload
    },
  };
}


export function showBusFailed(state, payload) {
  return {
    ...state,
    login: {
      loading: false,
      error: payload
    }
  };
}