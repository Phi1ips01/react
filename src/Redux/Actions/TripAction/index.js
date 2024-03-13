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
    SHOW_ALL_TRIP_FAILED,
    SHOW_ALL_TRIP_STARTED,
    SHOW_ALL_TRIP_SUCCESS,
    SET_TABLE_DATA,
    CLEAR_TRIP,
    SET_CURRENT_PAGE,
    } 
    from '../../Redux.constants';
import { addTrip, showAllTrip,deleteTrip,updateTrip,showOneTrip,showAllCSVTrip } from '../../../api/tripAPI';

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
            dispatch(showTrip(0,10))
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
            dispatch(showTrip(0,10));
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
            dispatch(showTrip(0,10))

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

export function showTrip(pageIndex,pageSize,search,keyword) {
    return async (dispatch) => {
        dispatch({
            type: SHOW_TRIP_STARTED,
            payload: {},
        });
        try {
            console.log("actiontyip",pageIndex,pageSize,search,keyword)
            
            const data = await showAllTrip(pageIndex,pageSize,search,keyword);
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
export function showAllActionTrip() {
    return async (dispatch) => {
        dispatch({
            type: SHOW_ALL_TRIP_STARTED,
            payload: {},
        });
        try {
            console.log("showalltripaction")

            const data = await showAllCSVTrip();
            console.log("tripdaataaction",data)
            dispatch({
                type: SHOW_ALL_TRIP_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: SHOW_ALL_TRIP_FAILED,
                payload: error,
            });
        }
    };
}


export function setSearchTermTrip(search,keyword) {
    return async (dispatch) => {

      dispatch(showTrip(0,10,search,keyword))
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

export const setCurrentPageTrip = (index) => ({
    type: SET_CURRENT_PAGE,
    payload: index,
  });
 