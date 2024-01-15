
export function showBusOperatorStarted(state, payload) {
  return {
    ...state,
    showBusOperator: {
      loading: true,
      error: false
    }
  };
}

export function showBusOperatorSuccess(state, payload) {
  console.log('reached inside reducer');
  
  return {
    ...state,
    showBusOperator: {
      loading: false,
      error: false,
      data: payload
    },
  };
}


export function showBusOperatorFailed(state, payload) {
  return {
    ...state,
    showBusOperator: {
      loading: false,
      error: payload
    }
  };
}