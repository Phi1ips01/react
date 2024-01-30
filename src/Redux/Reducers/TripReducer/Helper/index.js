
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
      data: payload.data.response
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