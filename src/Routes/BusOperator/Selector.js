import { createSelector } from 'reselect';

function getBusOperatorPageReducer(state) {
    console.log("reducer selecter",state)
    return {
        showBusOperator: state.ShowBusOperator.showBusOperator,
        searchTerm:state.SearchBusOperator.searchTerm,
        updateBusOperator: state.UpdateBusOperator,
        showOneBusOperator: state.ShowOneBusOperator.showOneBusOperator,
        currentPageReducerBusOperator:state.CurrentPageReducerBusOperator.currentPage,
        showAllBusOperator: state.ShowAllBusOperator.showAllBusOperator,
        }
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