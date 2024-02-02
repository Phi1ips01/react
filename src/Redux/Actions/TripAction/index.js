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
    SET_SEARCH_TERM,
    SET_TABLE_DATA
    } 
    from '../../Redux.constants';
import { addTrip, showAllTrip,deleteTrip } from '../../../api/tripAPI';

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