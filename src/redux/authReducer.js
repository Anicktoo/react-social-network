import { stopSubmit } from 'redux-form';
import { authAPI, profileAPI } from "../api/api";

const SET_DATA = 'social_network/auth/SET_DATA';
const SET_IMAGE = 'social_network/auth/SET_IMAGE';
const SET_CAPTCHA = 'social_network/auth/SET_CAPTCHA';

const defaultState = {
    id: null,
    email: null,
    login: null,
    isLoggedIn: false,
    image: null,
    captcha: null,
};

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_DATA: {
            return {
                ...state,
                ...action.data,
                isLoggedIn: action.isLoggedIn,
            };
        }
        case SET_IMAGE: {
            return {
                ...state,
                image: action.image
            };
        }
        case SET_CAPTCHA: {
            return {
                ...state,
                captcha: action.captcha
            };
        }
        default: {
            return state;
        }
    }
};

export const setAuthUserData = (id, email, login, isLoggedIn) => ({ type: SET_DATA, data: { id, email, login }, isLoggedIn });
export const setUserImage = (image) => ({ type: SET_IMAGE, image });
export const setCaptcha = (captcha) => ({ type: SET_CAPTCHA, captcha });

export const getAuthData = () => async (dispatch) => {
    const data = await authAPI.me();
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(data.data.id, data.data.email, data.data.login, true));
        dispatch(getUserImage(data.data.id));
    }
};

const getUserImage = (userId) => async (dispatch) => {
    const data = await profileAPI.getProfile(userId);
    dispatch(setUserImage(data.photos.small));
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === 0) {
        dispatch(getAuthData());
    }
    else {
        const errorMessage = data.messages.length > 0 ? data.messages[0] : 'Some error';
        if (data.resultCode === 10) {
            let data = await authAPI.getCaptcha();
            dispatch(setCaptcha(data.url));
            setTimeout(() => { dispatch(stopSubmit('login', { _error: errorMessage })) }, 0);
        }
        else {
            dispatch(stopSubmit('login', { _error: errorMessage }));
        }
    }

}

export const logout = () => async (dispatch) => {
    let data = await authAPI.logout();
    if (data.resultCode === 0) {
        dispatch(setUserImage(null));
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;