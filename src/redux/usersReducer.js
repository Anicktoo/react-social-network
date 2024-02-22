export const actions = Object.freeze({
    ADD_FRIEND: 'ADD_FRIEND',
    REMOVE_FRIEND: 'REMOVE_FRIEND',
    SET_USERS: 'SET_USERS',
});

const defaultState = {
    users: [],
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
                users: [
                    ...state.users,
                    ...action.users.filter(el => el.photos.small !== null || el.status !== null),
                ],
            }
        default:
            return state;
    }
}

export const addFriendAC = (id) => ({type: actions.ADD_FRIEND, id: id});
export const removeFriendAC = (id) => ({type: actions.REMOVE_FRIEND, id: id});
export const setUsersAC = (users) => ({type: actions.SET_USERS, users: users});

export default usersReducer;