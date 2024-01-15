import { createSelector } from 'reselect';

function getBusPageReducer(state) {
    return state.ShowBus.showBus;
}
function mergeReducer(showBus) {
    return {
        ...showBus
    };
}

export const SelectState = createSelector(
    [getBusPageReducer],
    mergeReducer
);