import {
    SHOW_USER_FAILED,
    SHOW_USER_STARTED,
    SHOW_USER_SUCCESS,
    POST_USER_FAILED,
    POST_USER_STARTED,
    POST_USER_SUCCESS,
    DELETE_USER_FAILED,
    DELETE_USER_SUCCESS,
    DELETE_USER_STARTED,
    UPDATE_USER_FAILED,
    UPDATE_USER_STARTED,
    UPDATE_USER_SUCCESS,
    SHOW_ONE_USER_FAILED,
    SHOW_ONE_USER_STARTED,
    SHOW_ONE_USER_SUCCESS,
    SHOW_ALL_USER_FAILED,
    SHOW_ALL_USER_SUCCESS,
    SHOW_ALL_USER_STARTED,
    SET_CURRENT_PAGE,
    CLEAR_USER
} from '../../Redux.constants';
import { addUser, showAllUser,deleteUser,updateUser,showOneUser,showAllCSVUser } from '../../../api/userAPI';

export function deleteActionUser(payload) {
    return async (dispatch) => {
        dispatch({
            type: DELETE_USER_STARTED,
            payload: {},
        });
        try {
            console.log("deleteusersuccess")
            const data = await deleteUser(payload);
            console.log("userdelete",data)
            dispatch({
                type: DELETE_USER_SUCCESS,
                payload: data,
            });
            dispatch(showUser(0,10))

        } catch (error) {
            dispatch({
                type: DELETE_USER_FAILED,
                payload: error,
            });
        }
    };
}
export function postUser(payload) {
    return async (dispatch) => {
        dispatch({
            type: POST_USER_STARTED,
            payload: {},
        });
        try {
            const data = await addUser(payload);
            
            dispatch({
                type: POST_USER_SUCCESS,
                payload: data,
            });
            dispatch(showUser(0,10))

        } catch (error) {
            dispatch({
                type: POST_USER_FAILED,
                payload: error,
            });
        }
    };
}

export function updateActionUser(payload) {
    return async (dispatch) => {
        dispatch({
            type: UPDATE_USER_STARTED,
            payload: {},
        });
        try {
            console.log("updateup")
            const data = await updateUser(payload);
            console.log("updatedown",data)
            dispatch({
                type: UPDATE_USER_SUCCESS,
                payload: data,
            })
            dispatch(showUser(0,10));
        } catch (error) {
            dispatch({
                type: UPDATE_USER_FAILED,
                payload: error,
            });
        }
    };
}

export function showUser(page,size,search,keyword) {
    return async (dispatch) => {
        dispatch({
            type: SHOW_USER_STARTED,
            payload: {},
        });
        try {
            const data = await showAllUser(page,size,search,keyword);
            console.log("data",data)
            dispatch({
                type: SHOW_USER_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: SHOW_USER_FAILED,
                payload: error,
            });
        }
    };
}

export function setSearchTermUser(search,keyword) {
    return async (dispatch) => {

      dispatch(showUser(0,20,search,keyword))
    }
}

  export function clearUser() {
    return {
        type: CLEAR_USER,
    };
}
export function showOneActionUser(payload) {
    return  async (dispatch) => {
        dispatch({
            type: SHOW_ONE_USER_STARTED,
            payload: {},
        });
        try {
            console.log("Useraction success",payload)
            const data = await showOneUser(payload);
            console.log("data", data)
            dispatch({
                type: SHOW_ONE_USER_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: SHOW_ONE_USER_FAILED,
                payload: error,
            });
        }
    };
}
export const setCurrentPageUser = (index) => ({
    type: SET_CURRENT_PAGE,
    payload: index,
  });
  export function showAllActionUser() {
    return async (dispatch) => {
        dispatch({
            type: SHOW_ALL_USER_STARTED,
            payload: {},
        });
        try {
            console.log("showallUseraction",)

            const data = await showAllCSVUser();
            console.log("Userdaataaction",data)
            dispatch({
                type: SHOW_ALL_USER_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: SHOW_ALL_USER_FAILED,
                payload: error,
            });
        }
    };
}
