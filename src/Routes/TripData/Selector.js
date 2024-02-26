import { createSelector } from 'reselect';

function getTripPageReducer(state) {
    console.log("satte",state.UpdateSelectedOperatorID.selectedOperatorId)
    
    return {
        showTrip: state.ShowTrip.showTrip,
        searchTerm:state.SearchTrip.searchTerm,
        showBus: state.ShowAllBus.showAllBus,
        showBusOperator: state.ShowAllBusOperator.showAllBusOperator,
        selectedOperatorId: state.UpdateSelectedOperatorID.selectedOperatorId,
        updateTrip:state.updateTrip,
        showOneTrip:state.ShowOneTrip.showOneTrip,
        currentPageReducerTrip:state.CurrentPageReducerTrip.currentPage,
        showAllTrip: state.ShowAllTrip.showAllTrip,
        
    }
} 
function mergeReducer(showTrip) {
    return {
        ...showTrip
    };
}

export const 
SelectState = createSelector(
    [getTripPageReducer],
    mergeReducer
);