import { createSelector } from 'reselect';

function getBusOperatorPageReducer(state) {
    console.log("reducer selecter",state)
    return state.ShowBusOperator.showBusOperator;
}
function mergeReducer(showBusOperator) {
    return {
        ...showBusOperator
    };
}

export const SelectState = createSelector(
    [getBusOperatorPageReducer],
    mergeReducer
); 