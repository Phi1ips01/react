import {
    SHOW_USER_FAILED,
    SHOW_USER_STARTED,
    SHOW_USER_SUCCESS,
    POST_USER_FAILED,
POST_USER_STARTED,
POST_USER_SUCCESS,
} from '../../Redux.constants';
import { addUser, showAllUser } from '../../../api/userAPI';

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
