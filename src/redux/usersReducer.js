import { followAPI, usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/objectHelper";

const FOLLOW = 'social_network/users/FOLLOW';
const UNFOLLOW = 'social_network/users/UNFOLLOW';
const SET_USERS = 'social_network/users/SET_USERS';
const SET_CURRENT_PAGE = 'social_network/users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'social_network/users/SET_TOTAL_USERS_COUNT';
const SET_FETCHING_STATE = 'social_network/users/SET_FETCHING_STATE';
const SET_FOLLOWING_STATE = 'social_network/users/SET_FOLLOWING_STATE';

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
};

const usersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.id, 'id', { followed: true })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.id, 'id', { followed: false })
            };
        case SET_USERS:
            return {
                ...state, users: action.users,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage,
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalUsersCount,
            };
        case SET_FETCHING_STATE:
            return {
                ...state, isFetching: action.value,
            };
        case SET_FOLLOWING_STATE:
            return {
                ...state, users: state.users.map(el => {
                    if (el.id !== action.userId) { return el; }
                    return {
                        ...el,
                        isFollowingInProgress: action.value,
                    };
                })
            };
        default:
            return state;
    }
};

export const followAccept = (id) => ({ type: FOLLOW, id: id });
export const unfollowAccept = (id) => ({ type: UNFOLLOW, id: id });
export const setUsers = (users) => ({ type: SET_USERS, users: users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount });
export const setFetchingState = (value) => ({ type: SET_FETCHING_STATE, value });
export const setFollowingState = (value, userId) => ({ type: SET_FOLLOWING_STATE, value, userId });

export const getUsers = (pageSize, pageNumber) => async (dispatch) => {
    dispatch(setFetchingState(true));
    dispatch(setCurrentPage(pageNumber));
    const data = await usersAPI.getUsers(pageSize, pageNumber);
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(setFetchingState(false));
};

const followUnfollowFlow = async (dispatch, apiMethod, actionCreator, userId) => {
    dispatch(setFollowingState(true, userId));
    const data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(setFollowingState(false, userId));
}

export const follow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, followAPI.follow.bind(followAPI), followAccept, userId);
};

export const unfollow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, followAPI.unfollow.bind(followAPI), unfollowAccept, userId);
};


export default usersReducer;