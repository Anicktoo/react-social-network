export const actions = Object.freeze({
    ADD_FRIEND: 'ADD_FRIEND',
    REMOVE_FRIEND: 'REMOVE_FRIEND',
    SET_USERS: 'SET_USERS',
    SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
    SET_TOTAL_USERS_COUNT: 'SET_TOTAL_USERS_COUNT',
    SET_FETCHING_STATE: 'SET_FETCHING_STATE',
});

const defaultState = {
    users: [], pageSize: 10, totalUsersCount: 0, currentPage: 1, isFetching: false,
}

const usersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actions.ADD_FRIEND:
            return {
                ...state, users: state.users.map(user => {
                    if (user.id !== action.id) return user;
                    return {
                        ...user, followed: true,
                    }
                })
            }
        case actions.REMOVE_FRIEND:
            return {
                ...state, users: state.users.map(user => {
                    if (user.id !== action.id) return user;
                    return {
                        ...user, followed: false,
                    }
                })
            }
        case actions.SET_USERS:
            return {
                ...state, users: action.users,
            }
        case actions.SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage,
            }
        case actions.SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalUsersCount,
            }
        case actions.SET_FETCHING_STATE:
            return {
                ...state, isFetching: action.value,
            }
        default:
            return state;
    }
}

export const addFriend = (id) => ({type: actions.ADD_FRIEND, id: id});
export const removeFriend = (id) => ({type: actions.REMOVE_FRIEND, id: id});
export const setUsers = (users) => ({type: actions.SET_USERS, users: users});
export const setCurrentPage = (currentPage) => ({type: actions.SET_CURRENT_PAGE, currentPage: currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({
    type: actions.SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount
});
export const setFetchingState = (value) => ({type: actions.SET_FETCHING_STATE, value});

export default usersReducer;