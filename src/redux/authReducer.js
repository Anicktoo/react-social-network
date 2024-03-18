import { authAPI, profileAPI } from "../api/api";

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
                isLoggedIn: true,
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

export const setAuthUserData = (data) => ({ type: actions.SET_DATA, data });
export const setUserImage = (image) => ({ type: actions.SET_IMAGE, image });
export const setCaptcha = (captcha) => ({ type: actions.SET_CAPTCHA, captcha });

export const getAuthData = () => (dispatch) => {
    authAPI.me().then(data => {
        console.log(data)
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

export const login = (email, password, rememberMe, captcha) => (dispatch) => {
    authAPI.login(email, password, rememberMe, captcha).then(data => {
        if (data.resultCode === 0) {
            getAuthData();
        }
        else if (data.resultCode === 10) {
            authAPI.getCaptcha().then(data => {
                dispatch(setCaptcha(data.url));
            });
        }
    });
}

export default authReducer;