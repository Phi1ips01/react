import { createSelector } from 'reselect';

function getBusPageReducer(state) {
    return {
        showBus: state.ShowBus.showBus,
        showBusOperator: state.ShowBusOperator.showBusOperator,
        searchTerm:state.SearchBus.searchTerm,
        showOneBus:state.ShowOneBus.showOneBus,
        updateBus:state.UpdateBus
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