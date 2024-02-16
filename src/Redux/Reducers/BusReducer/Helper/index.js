
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
      data: payload.data.response.rows,
      count: payload.data.response.count,
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


export function deleteBusStarted(state, payload) {
  return {
    ...state,
    deleteBus: {
      loading: true,
      error: false
    }
  };
}

export function deleteBusSuccess(state, payload) {
  console.log('reached inside reducer');
  
  return {
    ...state,
    deleteBus: {
      loading: false,
      error: false,
      data: payload.data.response
    },
  };
}


export function deleteBusFailed(state, payload) {
  return {
    ...state,
    deleteBus: {
      loading: false,
      error: payload
    }
  };
}

export function updateBusStarted(state, payload) {
  return {
    ...state,
    updateBus: {
      loading: true,
      error: false
    }
  };
}

export function updateBusSuccess(state, payload) {
  console.log('reached inside reducer1');
  
  return {
    ...state,
    updateBus: {
      loading: false,
      error: false,
      data: payload.data.response,
      
    },
    
  };
}


export function updateBusFailed(state, payload) {
  return {
    ...state,
    updateBus: {
      loading: false,
      error: payload
    }
  };
}

export function searchTermBus(state, payload) {
  return {
    ...state,
    searchTerm: payload,
  };
}

export function tableDataBus(state, payload) {
  return {
    ...state,
    tableData: payload,
  };
}

export function clearBus(state,payload)
{
  return {
    ...state,
    showOneBus: {},
    error: null,
  }
}


export function showOneBusStarted(state, payload) {
  return {
    ...state,
    showOneBus: {
      loading: true,
      error: false
    }
  };
}

export function showOneBusSuccess(state, payload) {
  console.log('reached inside reducer1',payload);
  
  return {
    ...state,
    showOneBus: {
      loading: false,
      error: false,
      data: payload.data.response,
      
    },
    
  };
}


export function showOneBusFailed(state, payload) {
  return {
    ...state,
    showOneBus: {
      loading: false,
      error: payload
    }
  };
}

export function showAllBusStarted(state, payload) {
  return {
    ...state,
    showAllBus: {
      loading: true,
      error: false
    }
  };
}

export function showAllBusSuccess(state, payload) {
  console.log('reached inside reducer1',payload);
  
  return {
    ...state,
    showAllBus: {
      loading: false,
      error: false,
      data: payload.data.response.rows,
      
    },
    
  };
}


export function showAllBusFailed(state, payload) {
  return {
    ...state,
    showAllBus: {
      loading: false,
      error: payload
    }
  };
}

export function CurrentPageReducerBus(state, payload) {
  return {
    ...state,
    currentPage:payload
  };
}