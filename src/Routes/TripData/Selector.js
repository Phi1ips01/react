import { createSelector } from 'reselect';

function getTripPageReducer(state) {
    console.log("satte",state.ShowOneTrip)
    
    return {
        showTrip: state.ShowTrip.showTrip,
        searchTerm:state.SearchTrip.searchTerm,
        showBus: state.ShowBus.showBus,
        showBusOperator: state.ShowBusOperator.showBusOperator,
        selectedOperatorID: state.selectedOperatorID,
        updateTrip:state.updateTrip,
        showOneTrip:state.ShowOneTrip.showOneTrip,
        
    }
}
function mergeReducer(showTrip) {
    return {
        ...showTrip
    };
}

export const SelectState = createSelector(
    [getTripPageReducer],
    mergeReducer
);