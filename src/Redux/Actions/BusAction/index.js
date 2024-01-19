import {
    SHOW_BUS_FAILED,
    SHOW_BUS_STARTED,
    SHOW_BUS_SUCCESS,
    POST_BUS_FAILED,
    POST_BUS_STARTED,
    POST_BUS_SUCCESS,
} from '../../Redux.constants';
import { addBus, showAllBus } from '../../../api/busAPI';

export function postBus(payload) {
    return async (dispatch) => {
        dispatch({
            type: POST_BUS_STARTED,
            payload: {},
        });
        try {
            const data = await addBus(payload);
            dispatch({
                type: POST_BUS_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: POST_BUS_FAILED,
                payload: error,
            });
        }
    };
}


export function showBus(payload) {
    return async (dispatch) => {
        dispatch({
            type: SHOW_BUS_STARTED,
            payload: {},
        });
        try {
            console.log("reachred action")
            const data = await showAllBus();
            dispatch({
                type: SHOW_BUS_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: SHOW_BUS_FAILED,
                payload: error,
            });
        }
    };
}
