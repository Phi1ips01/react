import { createSelector } from 'reselect';

function getTripPageReducer(state) {
    return state.ShowTrip.showTrip;
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