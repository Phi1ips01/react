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
        total_ta:state.getTotalTaAndProfit.total_ta,
        total_profit:state.getTotalTaAndProfit.total_profit
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