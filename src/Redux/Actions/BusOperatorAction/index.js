import {
    SHOW_BUS_OPERATOR_FAILED,
    SHOW_BUS_OPERATOR_STARTED,
    SHOW_BUS_OPERATOR_SUCCESS,
    POST_BUS_OPERATOR_FAILED,
    POST_BUS_OPERATOR_STARTED,
    POST_BUS_OPERATOR_SUCCESS,
    DELETE_BUS_OPERATOR_FAILED,
    DELETE_BUS_OPERATOR_STARTED,
    DELETE_BUS_OPERATOR_SUCCESS
    } from '../../Redux.constants';
import { addBusOperator, showAllBusOperator,deleteBusOperator } from '../../../api/busOperatorAPI';

export function deleteActionBusOperator(payload) {
    return async (dispatch) => {
        dispatch({
            type: DELETE_BUS_OPERATOR_STARTED,
            payload: {},
        });
        try {
            console.log("deleteBUS_OPERATORsuccess")
            const data = await deleteBusOperator(payload);
            console.log("BUS_OPERATORdelete",data)
            dispatch({
                type: DELETE_BUS_OPERATOR_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: DELETE_BUS_OPERATOR_FAILED,
                payload: error,
            });
        }
    };
}

export function postBusOperator(payload) {
    return async (dispatch) => {
        dispatch({
            type: POST_BUS_OPERATOR_STARTED,
            payload: {},
        });
        try {
            console.log("try bus operator action")
            const data = await addBusOperator(payload);
            dispatch({
                type: POST_BUS_OPERATOR_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: POST_BUS_OPERATOR_FAILED,
                payload: error,
            });
        }
    };
}


export function showBusOperator(payload) {
    return  async (dispatch) => {
        dispatch({
            type: SHOW_BUS_OPERATOR_STARTED,
            payload: {},
        });
        try {
            console.log("busoperatoraction success")
            const data = await showAllBusOperator();
            console.log("data", data)
            dispatch({
                type: SHOW_BUS_OPERATOR_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: SHOW_BUS_OPERATOR_FAILED,
                payload: error,
            });
        }
    };
}
