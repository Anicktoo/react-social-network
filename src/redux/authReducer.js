import { authAPI, profileAPI } from "../api/api";
import { stopSubmit } from 'redux-form';

export const actions = Object.freeze({
    SET_DATA: 'SET_DATA',
    SET_IMAGE: 'SET_IMAGE',
    SET_CAPTCHA: 'SET_CAPTCHA',
});

const defaultState = {
    id: null,
    email: null,
    login: null,
    isLoggedIn: false,
    image: null,
    captcha: null,
}

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actions.SET_DATA: {
            return {
                ...state,
                ...action.data,
                isLoggedIn: action.isLoggedIn,
            };
        }
        case actions.SET_IMAGE: {
            return {
                ...state,
                image: action.image
            };
        }
        case actions.SET_CAPTCHA: {
            return {
                ...state,
                captcha: action.captcha
            };
        }
        default: {
            return state;
        }
    }
}

export const setAuthUserData = (id, email, login, isLoggedIn) => ({ type: actions.SET_DATA, data: { id, email, login }, isLoggedIn });
export const setUserImage = (image) => ({ type: actions.SET_IMAGE, image });
export const setCaptcha = (captcha) => ({ type: actions.SET_CAPTCHA, captcha });

export const getAuthData = () => (dispatch) => {
    return authAPI.me().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(data.data.id, data.data.email, data.data.login, true));
            dispatch(getUserImage(data.data.id));
        }
    });
};

const getUserImage = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(data => {
        dispatch(setUserImage(data.photos.small));
    });
};

export const login = (email, password, rememberMe, captcha) => (dispatch) => {
    authAPI.login(email, password, rememberMe, captcha).then(data => {
        if (data.resultCode === 0) {
            dispatch(getAuthData());
        }
        else {
            const errorMessage = data.messages.length > 0 ? data.messages[0] : 'Some error';

            if (data.resultCode === 10) {
                authAPI.getCaptcha().then(data => {
                    dispatch(setCaptcha(data.url))
                    setTimeout(() => { dispatch(stopSubmit('login', { _error: errorMessage })) }, 0)
                });
            }
            else {
                dispatch(stopSubmit('login', { _error: errorMessage }));
            }
        }
    });
}

export const logout = () => (dispatch) => {
    authAPI.logout().then(data => {
        if (data.resultCode === 0) {
            dispatch(setUserImage(null));
            dispatch(setAuthUserData(null, null, null, false))
        }
    });
}

export default authReducer;