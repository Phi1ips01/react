import { createSelector } from 'reselect';

function getTripPageReducer(state) {
    console.log("satte",state)
    return {
        showTrip: state.ShowTrip.showTrip,
        showBus: state.ShowBus.showBus,
        showBusOperator: state.ShowBusOperator.showBusOperator,
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