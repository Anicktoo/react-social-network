import { getAuthData } from "./authReducer";

const SET_INITIALIZED = 'social_network/app/SET_INITIALIZED';

const defaultState = {
    isInitialized: false,
};

const appReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                isInitialized: action.isInitialized,
            }
        }
        default: {
            return state;
        }
    }
};

export const setInitialized = (isInitialized) => ({ type: SET_INITIALIZED, isInitialized });

export const initialize = () => async (dispatch) => {
    const auth = dispatch(getAuthData());
    await Promise.allSettled([auth]);
    dispatch(setInitialized(true));
}

export default appReducer;