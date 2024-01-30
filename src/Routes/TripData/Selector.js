import { createSelector } from 'reselect';

function getTripPageReducer(state) {
    console.log("satte",state)
    return {
        showTrip: state.ShowTrip.showTrip,
        
    }
}
function mergeReducer(showTrip) {
    return {
        ...showTrip
    };
}

export const SelectState = createSelector(
    [getTripPageReducer],
    mergeReducer
);