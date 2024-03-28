import { createSelector } from "@reduxjs/toolkit";

export const getUsersSelector = (state) => {
    return state.users.users;
};

//first param is a selector to get users, second is a dependency to recount if changed (like useState)
export const getFollowedUsersSelector = createSelector(getUsersSelector, (users) => {
    return users.filter(user => user.followed);
});

export const getPageSizeSelector = (state) => {
    return state.users.pageSize;
};

export const getTotalUsersCountSelector = (state) => {
    return state.users.totalUsersCount;
};

export const getCurrentPageSelector = (state) => {
    return state.users.currentPage;
};

export const getIsFetchingSelector = (state) => {
    return state.users.isFetching;
};