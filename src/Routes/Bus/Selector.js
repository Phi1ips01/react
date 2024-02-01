import { createSelector } from 'reselect';

function getBusPageReducer(state) {
    return {
        showBus: state.ShowBus.showBus,
        showBusOperator: state.ShowBusOperator.showBusOperator,
        searchTerm:state.SearchBus.searchTerm
    }
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