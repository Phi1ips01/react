import {
    SHOW_USER_FAILED,
    SHOW_USER_STARTED,
    SHOW_USER_SUCCESS,
    POST_USER_FAILED,
POST_USER_STARTED,
POST_USER_SUCCESS,
DELETE_USER_FAILED,
DELETE_USER_SUCCESS,
DELETE_USER_STARTED
} from '../../Redux.constants';
import { addUser, showAllUser,deleteUser } from '../../../api/userAPI';

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
        } catch (error) {
            dispatch({
                type: POST_USER_FAILED,
                payload: error,
            });
        }
    };
}


export function showUser(payload) {
    return async (dispatch) => {
        dispatch({
            type: SHOW_USER_STARTED,
            payload: {},
        });
        try {
            const data = await showAllUser();
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
