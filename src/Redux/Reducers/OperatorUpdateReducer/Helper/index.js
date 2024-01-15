
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
      data: payload
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