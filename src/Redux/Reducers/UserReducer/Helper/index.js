
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
      data: payload
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