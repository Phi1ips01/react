import {
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGIN_STARTED,
    LOGOUT
} from '../../Redux.constants';
import { login } from '../../../api/login';

export function signIn(payload) {
    return async (dispatch) => {
        dispatch({
            type: LOGIN_STARTED,
            payload: {},
        });
        try {
            const data = await login(payload);
            console.log("action",data)
            dispatch({
                type: LOGIN_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: LOGIN_FAILED,
                payload: error,
            });
        }
    };
}
export function signOut(payload){
    return async (dispatch)=>{
        dispatch({
            type:LOGOUT,
            payload:{}
        })
    }}