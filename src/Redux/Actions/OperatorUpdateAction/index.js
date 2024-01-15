import {
    SHOW_OPERATOR_UPDATE_FAILED,
    SHOW_OPERATOR_UPDATE_STARTED,
    SHOW_OPERATOR_UPDATE_SUCCESS,
    POST_OPERATOR_UPDATE_FAILED,
    POST_OPERATOR_UPDATE_STARTED,
    POST_OPERATOR_UPDATE_SUCCESS
} from '../../Redux.constants';
import { addOperatorUpdate, showAllOperatorUpdate } from '../../../api/operatorUpdateAPI';

export function postOperatorUpdate(payload) {
    return async (dispatch) => {
        dispatch({
            type: POST_OPERATOR_UPDATE_STARTED,
            payload: {},
        });
        try {
            const data = await addOperatorUpdate(payload);
            dispatch({
                type: POST_OPERATOR_UPDATE_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: POST_OPERATOR_UPDATE_FAILED,
                payload: error,
            });
        }
    };
}


export function showOperatorUpdate(payload) {
    return async (dispatch) => {
        dispatch({
            type: SHOW_OPERATOR_UPDATE_STARTED,
            payload: {},
        });
        try {
            const data = await showAllOperatorUpdate();
            dispatch({
                type: SHOW_OPERATOR_UPDATE_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: SHOW_OPERATOR_UPDATE_FAILED,
                payload: error,
            });
        }
    };
}
