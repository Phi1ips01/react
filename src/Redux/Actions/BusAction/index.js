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
    UPDATE_BUS_FAILED,
    UPDATE_BUS_STARTED,
    UPDATE_BUS_SUCCESS,
    SHOW_ONE_BUS_FAILED,
    SHOW_ONE_BUS_SUCCESS,
    SHOW_ONE_BUS_STARTED,
    SHOW_ALL_BUS_FAILED,
    SHOW_ALL_BUS_SUCCESS,
    SHOW_ALL_BUS_STARTED,
    SET_CURRENT_PAGE,
    SET_TABLE_DATA,
    CLEAR_BUS
} from '../../Redux.constants';
import { addBus, showAllBus, deleteBus,updateBus,showOneBus,showAllCSVBus } from '../../../api/busAPI';

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
            })
            dispatch(showBus(0,10));
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
            })
            dispatch(showBus(0,10));
        } catch (error) {
            dispatch({
                type: POST_BUS_FAILED,
                payload: error,
            });
        }
    };
}


export function showBus(page,size,search,keyword) {
    return async (dispatch) => {
        dispatch({
            type: SHOW_BUS_STARTED,
            payload: {},
        });
        try {
            console.log("reachred action")
            const data = await showAllBus(page,size,search,keyword);
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

export function updateActionBus(payload) {
    return async (dispatch) => {
        dispatch({
            type: UPDATE_BUS_STARTED,
            payload: {},
        });
        try {
            console.log("updateup")
            const data = await updateBus(payload);
            console.log("updatedown",data)
            dispatch({
                type: UPDATE_BUS_SUCCESS,
                payload: data,
            })
            dispatch(showBus(0,10));
        } catch (error) {
            dispatch({
                type: UPDATE_BUS_FAILED,
                payload: error,
            });
        }
    };
}
export function setSearchTermBus(search,keyword) {
    
    return async (dispatch) => {
      dispatch(showBus(0,10,search,keyword))

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
  export function clearBus() {
    return {
        type: CLEAR_BUS,
    };
}


export function showOneActionBus(payload) {
    return  async (dispatch) => {
        dispatch({
            type: SHOW_ONE_BUS_STARTED,
            payload: {},
        });
        try {
            console.log("Busaction success",payload)
            const data = await showOneBus(payload);
            console.log("data", data)
            dispatch({
                type: SHOW_ONE_BUS_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: SHOW_ONE_BUS_FAILED,
                payload: error,
            });
        }
    };
}
export const setCurrentPageBus = (index) => ({
    type: SET_CURRENT_PAGE,
    payload: index,
  });
  export function showAllActionBus() {
    return async (dispatch) => {
        dispatch({
            type: SHOW_ALL_BUS_STARTED,
            payload: {},
        });
        try {
            console.log("showallBusaction")

            const data = await showAllCSVBus();
            console.log("Busdaataaction",data)
            dispatch({
                type: SHOW_ALL_BUS_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: SHOW_ALL_BUS_FAILED,
                payload: error,
            });
        }
    };
}
