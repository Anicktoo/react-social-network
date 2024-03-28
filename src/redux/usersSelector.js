export const getUsersSelector = (state) => {
    return state.users.users;
}

export const getPageSizeSelector = (state) => {
    return state.users.pageSize;
}

export const getTotalUsersCountSelector = (state) => {
    return state.users.totalUsersCount;
}

export const getCurrentPageSelector = (state) => {
    return state.users.currentPage;
}

export const getIsFetchingSelector = (state) => {
    return state.users.isFetching;
}