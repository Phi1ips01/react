
export function showUserStarted(state, payload) {
  return {
    ...state,
    showTrip: {
      loading: true,
      error: false
    }
  };
}

export function showUserSuccess(state, payload) {
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


export function showUserFailed(state, payload) {
  return {
    ...state,
    showTrip: {
      loading: false,
      error: payload
    }
  };
}


export function postUserStarted(state, payload) {
  return {
    ...state,
    postTrip: {
      loading: true,
      error: false
    }
  };
}

export function postUserSuccess(state, payload) {
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


export function postUserFailed(state, payload) {
  return {
    ...state,
    postTrip: {
      loading: false,
      error: payload
    }
  };
}