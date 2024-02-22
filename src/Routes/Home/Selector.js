import { createSelector } from 'reselect';

function getTripPageReducer(state) {
    console.log("satte",state)
    return {
        showTrip: state.ShowTrip.showTrip,
        showBus: state.ShowAllBus.showAllBus,
        showBusOperator: state.ShowAllBusOperator.showAllBusOperator,
        selectedOperatorID: state.UpdateSelectedOperatorID.selectedOperatorId
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