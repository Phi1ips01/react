import {
    SHOW_TRIP_FAILED,
    SHOW_TRIP_STARTED,
    SHOW_TRIP_SUCCESS,
    POST_TRIP_FAILED,
POST_TRIP_STARTED,
POST_TRIP_SUCCESS,
} from '../../Redux.constants';
import { addTrip, showAllTrip } from '../../../api/tripAPI';

export function postTrip(payload) {
    return async (dispatch) => {
        dispatch({
            type: POST_TRIP_STARTED,
            payload: {},
        });
        try {
            const data = await addTrip(payload);
            dispatch({
                type: POST_TRIP_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: POST_TRIP_FAILED,
                payload: error,
            });
        }
    };
}


export function showTrip(payload) {
    return async (dispatch) => {
        dispatch({
            type: SHOW_TRIP_STARTED,
            payload: {},
        });
        try {
            const data = await showAllTrip();
            dispatch({
                type: SHOW_TRIP_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: SHOW_TRIP_FAILED,
                payload: error,
            });
        }
    };
}
