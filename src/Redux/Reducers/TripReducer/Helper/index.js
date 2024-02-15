
export function showTripStarted(state, payload) {
  return {
    ...state,
    showTrip: {
      loading: true,
      error: false
    }
  };
}

export function showTripSuccess(state, payload) {
  console.log('reached inside reducer');
  
  return {
    ...state,
    showTrip: {
      loading: false,
      error: false,
      data: payload.data.response.rows,
      count:payload.data.response.count
    }, 
  };
}


export function showTripFailed(state, payload) {
  return {
    ...state,
    showTrip: {
      loading: false,
      error: payload
    }
  };
}

export function postTripStarted(state, payload) {
  return {
    ...state,
    postTrip: {
      loading: true,
      error: false
    }
  };
}

export function postTripSuccess(state, payload) {
  console.log('reached inside reducer');
  
  return {
    ...state,
    postTrip: {
      loading: false,
      error: false,
      data: payload
    },
  };
}


export function postTripFailed(state, payload) {
  return {
    ...state,
    postTrip: {
      loading: false,
      error: payload
    }
  };
}


export function deleteTripStarted(state, payload) {
  console.log("deletestarted",payload)
  return {
    ...state,
    deleteTrip: {
      loading: true,
      error: false
    }
  };
}

export function deleteTripSuccess(state, payload) {
  console.log('reached inside reducer11');
  console.log("helper delete",payload)
  return {
    ...state,
    deleteTrip: {
      loading: false,
      error: false,
      data: payload
    },
  };
}


export function deleteTripFailed(state, payload) {
  return {
    ...state,
    deleteTrip: {
      loading: false,
      error: payload
    }
  };
}


export function updateTripStarted(state, payload) {
  return {
    ...state,
    updateTrip: {
      loading: true,
      error: false
    }
  };
}

export function updateTripSuccess(state, payload) {
  console.log('reached inside reducer1');
  
  return {
    ...state,
    updateTrip: {
      loading: false,
      error: false,
      data: payload.data.response,
      
    },
    
  };
}


export function updateTripFailed(state, payload) {
  return {
    ...state,
    updateTrip: {
      loading: false,
      error: payload
    }
  };
}

export function searchTermTrip(state, payload) {
  return {
    ...state,
    searchTerm: payload,
  };
}

export function tableDataTrip(state, payload) {
  return {
    ...state,
    tableData: payload,
  };
}


export function clearTrip(state,payload)
{
  return {
    ...state,
    showOneTrip: {},
    error: null,
  }
}


export function showOneTripStarted(state, payload) {
  return {
    ...state,
    showOneTrip: {
      loading: true,
      error: false
    }
  };
}

export function showOneTripSuccess(state, payload) {
  console.log('reached inside reducer1',payload);
  
  return {
    ...state,
    showOneTrip: {
      loading: false,
      error: false,
      data: payload.data.response,
      
    },
    
  };
}


export function showOneTripFailed(state, payload) {
  return {
    ...state,
    showOneTrip: {
      loading: false,
      error: payload
    }
  };
}

export function CurrentPageReducerTrip(state, payload) {
  return {
    ...state,
    currentPage:payload
  };
}