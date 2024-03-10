export const actions = Object.freeze({
    FOLLOW: 'FOLLOW',
    UNFOLLOW: 'UNFOLLOW',
    SET_USERS: 'SET_USERS',
    SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
    SET_TOTAL_USERS_COUNT: 'SET_TOTAL_USERS_COUNT',
    SET_FETCHING_STATE: 'SET_FETCHING_STATE',
    SET_FOLLOWING_STATE: 'SET_FOLLOWING_STATE',
});

const defaultState = {
    users: [
        {
            followed: false,
            id: 0,
            name: null,
            photos: {
                large: null,
                small: null,
            },
            status: null,
            uniqueUrlName: null,
            isFollowingInProgress: false,
        }
    ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
}

const usersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actions.FOLLOW:
            return {
                ...state, users: state.users.map(user => {
                    if (user.id !== action.id) return user;
                    return {
                        ...user, followed: true,
                    }
                })
            }
        case actions.UNFOLLOW:
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
        case actions.SET_FOLLOWING_STATE:
            return {
                ...state, users: state.users.map(el => {
                    if (el.id !== action.userId) { return el };
                    return {
                        ...el,
                        isFollowingInProgress: action.value,
                    }
                })
            }
        default:
            return state;
    }
}

export const follow = (id) => ({ type: actions.FOLLOW, id: id });
export const unfollow = (id) => ({ type: actions.UNFOLLOW, id: id });
export const setUsers = (users) => ({ type: actions.SET_USERS, users: users });
export const setCurrentPage = (currentPage) => ({ type: actions.SET_CURRENT_PAGE, currentPage: currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: actions.SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount });
export const setFetchingState = (value) => ({ type: actions.SET_FETCHING_STATE, value });
export const setFollowingState = (value, userId) => ({ type: actions.SET_FOLLOWING_STATE, value, userId });

export default usersReducer;