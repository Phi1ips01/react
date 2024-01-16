import { createSelector } from 'reselect';

function getUserPageReducer(state) {
    return state.ShowUser.showUser;
}
function mergeReducer(showUser) {
    return {
        ...showUser
    };
}

export const SelectState = createSelector(
    [getUserPageReducer],
    mergeReducer
);