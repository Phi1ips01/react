import {
    SHOW_BUS_FAILED,
    SHOW_BUS_STARTED,
    SHOW_BUS_SUCCESS,
} from '../../Redux.constants';
import { showAllBus } from '../../../api/busAPI';

export function showBus(payload) {
    return async (dispatch) => {
        dispatch({
            type: SHOW_BUS_STARTED,
            payload: {},
        });
        try {
            const data = await showAllBus(payload);
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
