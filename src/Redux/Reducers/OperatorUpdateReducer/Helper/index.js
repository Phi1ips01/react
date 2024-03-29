
export function showOperatorUpdateStarted(state, payload) {
  return {
    ...state,
    showOperatorUpdate: {
      loading: true,
      error: false
    }
  };
}

export function showOperatorUpdateSuccess(state, payload) {
  console.log('reached inside reducer');
  
  return {
    ...state,
    showOperatorUpdate: {
      loading: false,
      error: false,
      data: payload.data.response
    },
  };
}


export function showOperatorUpdateFailed(state, payload) {
  return {
    ...state,
    showOperatorUpdate: {
      loading: false,
      error: payload
    }
  };
}


export function postOperatorUpdateStarted(state, payload) {
  return {
    ...state,
    postOperatorUpdate: {
      loading: true,
      error: false
    }
  };
}

export function postOperatorUpdateSuccess(state, payload) {
  console.log('reached inside reducer');
  
  return {
    ...state,
    postOperatorUpdate: {
      loading: false,
      error: false,
      data: payload
    },
  };
}


export function postOperatorUpdateFailed(state, payload) {
  return {
    ...state,
    postOperatorUpdate: {
      loading: false,
      error: payload
    }
  };
}