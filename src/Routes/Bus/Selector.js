import { createSelector } from 'reselect';

function getBusPageReducer(state) {
    console.log("buspagereducer",state)
    return {
        showBus: state.ShowBus.showBus,
        showBusOperator: state.ShowBusOperator.showBusOperator,
        searchTerm:state.SearchBus.searchTerm,
        showOneBus:state.ShowOneBus.showOneBus,
        updateBus:state.UpdateBus,
        currentPageReducerBus:state.CurrentPageReducerBus.currentPage,
        showAllBus: state.ShowAllBus.showAllBus,
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