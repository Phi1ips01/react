
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
      data: payload.data.response.rows,
      count:payload.data.response.count
      
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

export function showOneBusOperatorStarted(state, payload) {
  return {
    ...state,
    showOneBusOperator: {
      loading: true,
      error: false
    }
  };
}

export function showOneBusOperatorSuccess(state, payload) {
  console.log('reached inside reducer1',payload);
  
  return {
    ...state,
    showOneBusOperator: {
      loading: false,
      error: false,
      data: payload.data.response,
      
    },
    
  };
}


export function showOneBusOperatorFailed(state, payload) {
  return {
    ...state,
    showOneBusOperator: {
      loading: false,
      error: payload
    }
  };
}

export function updateBusOperatorStarted(state, payload) {
  return {
    ...state,
    updateBusOperator: {
      loading: true,
      error: false
    }
  };
}

export function updateBusOperatorSuccess(state, payload) {
  console.log('reached inside reducer1');
  
  return {
    ...state,
    updateBusOperator: {
      loading: false,
      error: false,
      data: payload.data.response,
      
    },
    
  };
}


export function updateBusOperatorFailed(state, payload) {
  return {
    ...state,
    updateBusOperator: {
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



export function deleteBusOperatorStarted(state, payload) {
  return {
    ...state,
    deleteBusOperator: {
      loading: true,
      error: false
    }
  };
}

export function deleteBusOperatorSuccess(state, payload) {
  console.log('reached inside reducer1');
  
  return {
    ...state,
    deleteBusOperator: {
      loading: false,
      error: false,
      data: payload.data.response,
      
    },
    
  };
}


export function deleteBusOperatorFailed(state, payload) {
  return {
    ...state,
    deleteBusOperator: {
      loading: false,
      error: payload
    }
  };
}

export function searchTermBusOperator(state, payload) {
  return {
    ...state,
    searchTerm: payload,
  };
}

export function tableDataBusOperator(state, payload) {
  return {
    ...state,
    tableData: payload,
  };
}

export function clearBusOperator(state,payload)
{
  return {
    ...state,
    showOneBusOperator: {},
    error: null,
  }
}
export function showAllBusOperatorStarted(state, payload) {
  return {
    ...state,
    showAllBusOperator: {
      loading: true,
      error: false
    }
  };
}

export function showAllBusOperatorSuccess(state, payload) {
  console.log('reached inside reducer1',payload);
  
  return {
    ...state,
    showAllBusOperator: {
      loading: false,
      error: false,
      data: payload.data.response,
      
    },
    
  };
}


export function showAllBusOperatorFailed(state, payload) {
  return {
    ...state,
    showAllBusOperator: {
      loading: false,
      error: payload
    }
  };
}

export function CurrentPageReducerBusOperator(state, payload) {
  return {
    ...state,
    currentPage:payload
  };
}