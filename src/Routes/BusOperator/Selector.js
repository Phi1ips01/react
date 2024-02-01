import { createSelector } from 'reselect';

function getBusOperatorPageReducer(state) {
    console.log("reducer selecter",state)
    return {
        showBusOperator: state.ShowBusOperator.showBusOperator,
        searchTerm:state.SearchBusOperator.searchTerm
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