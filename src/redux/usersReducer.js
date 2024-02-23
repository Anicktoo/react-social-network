export const actions = Object.freeze({
    ADD_FRIEND: 'ADD_FRIEND',
    REMOVE_FRIEND: 'REMOVE_FRIEND',
    SET_USERS: 'SET_USERS',
    SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
    SET_TOTAL_USERS_COUNT: 'SET_TOTAL_USERS_COUNT',
});

const defaultState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
}

const usersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actions.ADD_FRIEND:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id !== action.id) return user;
                    return {
                        ...user,
                        followed: true,
                    }
                })
            }
        case actions.REMOVE_FRIEND:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id !== action.id) return user;
                    return {
                        ...user,
                        followed: false,
                    }
                })
            }
        case actions.SET_USERS:
            return {
                ...state,
                users: action.users,
            }
        case actions.SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            }
        case actions.SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            }
        default:
            return state;
    }
}

export const addFriendAC = (id) => ({type: actions.ADD_FRIEND, id: id});
export const removeFriendAC = (id) => ({type: actions.REMOVE_FRIEND, id: id});
export const setUsersAC = (users) => ({type: actions.SET_USERS, users: users});
export const setCurrentPageAC = (currentPage) => ({type: actions.SET_CURRENT_PAGE, currentPage: currentPage});
export const setTotalUsersCountAC = (totalUsersCount) => ({
    type: actions.SET_TOTAL_USERS_COUNT,
    totalUsersCount: totalUsersCount
});

export default usersReducer;