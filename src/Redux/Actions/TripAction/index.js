import {
    SHOW_TRIP_FAILED,
    SHOW_TRIP_STARTED,
    SHOW_TRIP_SUCCESS,
    POST_TRIP_FAILED,
    POST_TRIP_STARTED,
    POST_TRIP_SUCCESS,
    UPDATE_SELECTED_OPERATOR,
    DELETE_TRIP_FAILED,
    DELETE_TRIP_STARTED,
    DELETE_TRIP_SUCCESS,
    UPDATE_TRIP_FAILED,
    UPDATE_TRIP_STARTED,
    UPDATE_TRIP_SUCCESS,
    SHOW_ONE_TRIP_FAILED,
    SHOW_ONE_TRIP_STARTED,
    SHOW_ONE_TRIP_SUCCESS,
    SET_SEARCH_TERM,
    SET_TABLE_DATA,
    CLEAR_TRIP,
    SET_PAGE_INDEX,
    SET_PAGE_SIZE,
    SET_TOTAL_PAGES,
    SET_DATA,
    } 
    from '../../Redux.constants';
import { addTrip, showAllTrip,deleteTrip,updateTrip,showOneTrip } from '../../../api/tripAPI';
import { showAllBus } from '../../../api/busAPI';

export function deleteActionTrip(payload) {
    return async (dispatch) => {
        dispatch({
            type: DELETE_TRIP_STARTED,
            payload: {},
        });
        try {
            console.log("deletetripsuccess")
            const data = await deleteTrip(payload);
            console.log("tripdelete",data)
            dispatch({
                type: DELETE_TRIP_SUCCESS,
                payload: data,
            });
            dispatch(showTrip())
        } catch (error) {
            dispatch({
                type: DELETE_TRIP_FAILED,
                payload: error,
            });
        }
    };
}

export function updateActionTrip(payload) {
    return async (dispatch) => {
        dispatch({
            type: UPDATE_TRIP_STARTED,
            payload: {},
        });
        try {
            console.log("updateup")
            const data = await updateTrip(payload);
            console.log("updatedown",data)
            dispatch({
                type: UPDATE_TRIP_SUCCESS,
                payload: data,
            })
            dispatch(showTrip());
        } catch (error) {
            dispatch({
                type: UPDATE_TRIP_FAILED,
                payload: error,
            });
        }
    };
}
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
            dispatch(showTrip())

        } catch (error) {
            dispatch({
                type: POST_TRIP_FAILED,
                payload: error,
            });
        }
    };
}
export function updateSelectedOperator(selectedOperatorId)
{
    return async (dispatch)=>{
    dispatch({
        type: UPDATE_SELECTED_OPERATOR,
        payload: selectedOperatorId,
    })}
  };

export function showTrip(pageIndex,pageSize) {
    return async (dispatch) => {
        dispatch({
            type: SHOW_TRIP_STARTED,
            payload: {},
        });
        try {
            console.log("actiontyip",pageIndex,pageSize)

            const data = await showAllTrip(pageIndex,pageSize);
            console.log("tripdaataaction",data)
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


export function setSearchTermTrip(term) {
    return async (dispatch) => {
      dispatch({
        type: SET_SEARCH_TERM,
        payload: term,
      });
    }
}

  export function setTableDataTrip(data) {
    return async (dispatch) => {
      dispatch({
        type: SET_TABLE_DATA,
        payload: data,
      });
    };
  }

  export function clearTrip() {
    return {
        type: CLEAR_TRIP,
    };
}

export function showOneActionTrip(payload) {
    return  async (dispatch) => {
        dispatch({
            type: SHOW_ONE_TRIP_STARTED,
            payload: {},
        });
        try {
            console.log("Tripaction success",payload)
            const data = await showOneTrip(payload);
            console.log("data", data)
            dispatch({
                type: SHOW_ONE_TRIP_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: SHOW_ONE_TRIP_FAILED,
                payload: error,
            });
        }
    };
}

export const setPageIndexTrip = (index) => ({
    type: SET_PAGE_INDEX,
    payload: index,
  });
  
  export const setPageSizeTrip = (size) => ({
    type: SET_PAGE_SIZE,
    payload: size,
  });
  
  export const setTotalPagesTrip = (totalPages) => ({
    type: SET_TOTAL_PAGES,
    payload: totalPages,
  });
  
  export const setDataTrip = (data) => ({
    type: SET_DATA,
    payload: data,
  });