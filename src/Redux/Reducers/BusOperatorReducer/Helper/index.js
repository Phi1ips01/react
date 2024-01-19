
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
  console.log('reached inside reducer1');
  
  return {
    ...state,
    showBusOperator: {
      loading: false,
      error: false,
      data: payload.data.response,
      
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

export function postBusOperatorStarted(state, payload) {
  return {
    ...state,
    postBusOperator: {
      loading: true,
      error: false
    }
  };
}

export function postBusOperatorSuccess(state, payload) {
  console.log('reached inside reducer');
  
  return {
    ...state,
    postBusOperator: {
      loading: false,
      error: false,
      data: payload
    },
  };
}


export function postBusOperatorFailed(state, payload) {
  return {
    ...state,
    postBusOperator: {
      loading: false,
      error: payload
    }
  };
}