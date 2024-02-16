import { createSelector } from 'reselect';

function getUserPageReducer(state) {
    return {
        showUser:state.ShowUser.showUser,
        searchTerm:state.SearchUser.searchTerm,
        updateUser:state.updateUser,
        showOneUser:state.ShowOneUser.showOneUser,
        currentPageReducerUser:state.CurrentPageReducerUser.currentPage,
        showAllUser: state.ShowAllUser.showAllUser,
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