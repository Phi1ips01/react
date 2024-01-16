
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
    showBus: {
      loading: false,
      error: payload
    }
  };
}

export function postBusStarted(state, payload) {
  return {
    ...state,
    postBus: {
      loading: true,
      error: false
    }
  };
}

export function postBusSuccess(state, payload) {
  console.log('reached inside reducer');
  
  return {
    ...state,
    postBus: {
      loading: false,
      error: false,
      data: payload
    },
  };
}


export function postBusFailed(state, payload) {
  return {
    ...state,
    postBus: {
      loading: false,
      error: payload
    }
  };
}