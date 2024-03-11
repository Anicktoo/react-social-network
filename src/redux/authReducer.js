import { authAPI, profileAPI } from "../api/api";

export const actions = Object.freeze({
    SET_DATA: 'SET_DATA',
    SET_IMAGE: 'SET_IMAGE',
});

const defaultState = {
    id: null,
    email: null,
    login: null,
    isLoggedIn: false,
    image: null
}

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actions.SET_DATA: {
            return {
                ...state,
                ...action.data,
                isLoggedIn: true,
            }
        }
        case actions.SET_IMAGE: {
            return {
                ...state,
                image: action.image
            }
        }
        default: {
            return state;
        }
    }
}

export const setAuthUserData = (data) => ({ type: actions.SET_DATA, data });
export const setUserImage = (image) => ({ type: actions.SET_IMAGE, image });

export const getAuthData = () => (dispatch) => {
    authAPI.me().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(data.data));
            dispatch(getUserImage(data.data.id));
        }
    });
};

const getUserImage = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(data => {
        dispatch(setUserImage(data.photos.small));
    });
};

export default authReducer;