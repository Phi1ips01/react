import {
    SHOW_BUS_FAILED,
    SHOW_BUS_STARTED,
    SHOW_BUS_SUCCESS,
    POST_BUS_FAILED,
    POST_BUS_STARTED,
    POST_BUS_SUCCESS,
    DELETE_BUS_FAILED,
    DELETE_BUS_STARTED,
    DELETE_BUS_SUCCESS,
    SET_SEARCH_TERM,
    SET_TABLE_DATA
} from '../../Redux.constants';
import { addBus, showAllBus, deleteBus } from '../../../api/busAPI';

export function deleteActionBus(payload) {
    return async (dispatch) => {
        dispatch({
            type: DELETE_BUS_STARTED,
            payload: {},
        });
        try {
            console.log("deleteBUSsuccess")
            const data = await deleteBus(payload);
            console.log("BUSdelete",data)
            dispatch({
                type: DELETE_BUS_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: DELETE_BUS_FAILED,
                payload: error,
            });
        }
    };
}


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
            console.log("data",data)
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

export function setSearchTermBus(term) {
    return async (dispatch) => {
      dispatch({
        type: SET_SEARCH_TERM,
        payload: term,
      });
    }
}

  export function setTableDataBus(data) {
    return async (dispatch) => {
      dispatch({
        type: SET_TABLE_DATA,
        payload: data,
      });
    };
  }