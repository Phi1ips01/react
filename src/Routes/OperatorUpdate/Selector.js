import { createSelector } from 'reselect';

function getOperatorUpdatePageReducer(state) {
    return state.ShowOperatorUpdate.showOperatorUpdate;
}
function mergeReducer(showOperatorUpdate) {
    return {
        ...showOperatorUpdate
    };
}

export const SelectState = createSelector(
    [getOperatorUpdatePageReducer],
    mergeReducer
);