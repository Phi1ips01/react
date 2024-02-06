import {
    SHOW_BUS_OPERATOR_FAILED,
    SHOW_BUS_OPERATOR_STARTED,
    SHOW_BUS_OPERATOR_SUCCESS,
    POST_BUS_OPERATOR_FAILED,
    POST_BUS_OPERATOR_STARTED,
    POST_BUS_OPERATOR_SUCCESS,
    DELETE_BUS_OPERATOR_FAILED,
    DELETE_BUS_OPERATOR_STARTED,
    DELETE_BUS_OPERATOR_SUCCESS,
    UPDATE_BUS_OPERATOR_FAILED,
    UPDATE_BUS_OPERATOR_STARTED,
    UPDATE_BUS_OPERATOR_SUCCESS,
    SHOW_ONE_BUS_OPERATOR_FAILED,
    SHOW_ONE_BUS_OPERATOR_STARTED,
    SHOW_ONE_BUS_OPERATOR_SUCCESS,
    SET_SEARCH_TERM,
    SET_TABLE_DATA,
    CLEAR_BUS_OPERATOR
    } from '../../Redux.constants';
import { addBusOperator, showAllBusOperator,deleteBusOperator, updateBusOperator,showOneBusOperator } from '../../../api/busOperatorAPI';

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
            dispatch(showBusOperator())
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
            dispatch(showBusOperator())
        } catch (error) {
            dispatch({
                type: POST_BUS_OPERATOR_FAILED,
                payload: error,
            });
        }
    };
}


export function updateActionBusOperator(payload) {
    return async (dispatch) => {
        dispatch({
            type: UPDATE_BUS_OPERATOR_STARTED,
            payload: {},
        });
        try {
            console.log("updateup")
            const data = await updateBusOperator(payload);
            console.log("updatedown",data)
            dispatch({
                type: UPDATE_BUS_OPERATOR_SUCCESS,
                payload: data,
            })
            dispatch(showBusOperator());
        } catch (error) {
            dispatch({
                type: UPDATE_BUS_OPERATOR_FAILED,
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

export function showOneActionBusOperator(payload) {
    return  async (dispatch) => {
        dispatch({
            type: SHOW_ONE_BUS_OPERATOR_STARTED,
            payload: {},
        });
        try {
            console.log("busoperatoraction success",payload)
            const data = await showOneBusOperator(payload);
            console.log("data", data)
            dispatch({
                type: SHOW_ONE_BUS_OPERATOR_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: SHOW_ONE_BUS_OPERATOR_FAILED,
                payload: error,
            });
        }
    };
}
  export function clearBusOperator() {
    return {
        type: CLEAR_BUS_OPERATOR,
    };
}


export function setSearchTermBusOperator(term) {
    return async (dispatch) => {
      dispatch({
        type: SET_SEARCH_TERM,
        payload: term,
      });
    }
}

  export function setTableDataBusOperator(data) {
    return async (dispatch) => {
      dispatch({
        type: SET_TABLE_DATA,
        payload: data,
      });
    };
  }
  
