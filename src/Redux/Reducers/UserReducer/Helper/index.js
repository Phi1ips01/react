
export function showUserStarted(state, payload) {
  return {
    ...state,
    showUser: {
      loading: true,
      error: false
    }
  };
}

export function showUserSuccess(state, payload) {
  console.log('reached inside reducer');
  console.log(payload.data)
  return {
    ...state,
    showUser: {
      loading: false,
      error: false,
      data: payload.data.response
    },
  };
}


export function showUserFailed(state, payload) {
  return {
    ...state,
    showUser: {
      loading: false,
      error: payload
    }
  };
}


export function postUserStarted(state, payload) {
  return {
    ...state,
    postUser: {
      loading: true,
      error: false
    }
  };
}

export function postUserSuccess(state, payload) {
  console.log('reached inside reducer11');
  console.log("helper post",payload)
  return {
    ...state,
    postUser: {
      loading: false,
      error: false,
      data: payload
    },
  };
}


export function postUserFailed(state, payload) {
  return {
    ...state,
    postUser: {
      loading: false,
      error: payload
    }
  };
}


export function deleteUserStarted(state, payload) {
  console.log("deletestarted",payload)
  return {
    ...state,
    deleteUser: {
      loading: true,
      error: false
    }
  };
}

export function deleteUserSuccess(state, payload) {
  console.log('reached inside reducer11');
  console.log("helper delete",payload)
  return {
    ...state,
    deleteUser: {
      loading: false,
      error: false,
      data: payload
    },
  };
}


export function deleteUserFailed(state, payload) {
  return {
    ...state,
    deleteUser: {
      loading: false,
      error: payload
    }
  };
}

export function updateUserStarted(state, payload) {
  return {
    ...state,
    updateUser: {
      loading: true,
      error: false
    }
  };
}

export function updateUserSuccess(state, payload) {
  console.log('reached inside reducer1');
  
  return {
    ...state,
    updateUser: {
      loading: false,
      error: false,
      data: payload.data.response,
      
    },
    
  };
}


export function updateUserFailed(state, payload) {
  return {
    ...state,
    updateUser: {
      loading: false,
      error: payload
    }
  };
}

export function searchTermUser(state, payload) {
  return {
    ...state,
    searchTerm: payload,
  };
}

export function tableDataUser(state, payload) {
  return {
    ...state,
    tableData: payload,
  };
}
