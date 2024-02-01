
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
      data: payload.data.response
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
