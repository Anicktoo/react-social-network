import { getAuthData } from "./authReducer";

export const actions = Object.freeze({
    SET_INITIALIZED: 'SET_INITIALIZED',
});

const defaultState = {
    isInitialized: false,
}

const appReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actions.SET_INITIALIZED: {
            return {
                ...state,
                isInitialized: action.isInitialized,
            }
        }
        default: {
            return state;
        }
    }
}

export const setInitialized = (isInitialized) => ({ type: actions.SET_INITIALIZED, isInitialized });

export const initialize = () => (dispatch) => {

    const auth = dispatch(getAuthData());
    Promise.allSettled([auth]).then((ress) => {
        dispatch(setInitialized(true));
    });
}

export default appReducer;