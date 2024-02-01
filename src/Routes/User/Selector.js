import { createSelector } from 'reselect';

function getUserPageReducer(state) {
    return {
        showUser:state.ShowUser.showUser,
        searchTerm:state.SearchUser.searchTerm
    }
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