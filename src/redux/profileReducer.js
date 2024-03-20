import { profileAPI, wallpaperAPI } from "../api/api";
import getRandomHexColor from "../tools/getRandomHexColor";

export const actions = Object.freeze({
    ADD_POST: 'ADD_POST',
    SET_STATUS: 'SET_STATUS',
    SET_USER_PROFILE: 'SET_USER_PROFILE',
    SET_USER_WALLPAPER: 'SET_USER_WALLPAPER',
    SET_FETCHING_STATUS: 'SET_FETCHING_STATUS',
});

const defaultState = {
    accountInfo: {
        isFetching: false,
        fullName: null,
        aboutMe: null,
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
        },
        photos: {
            small: null,
            large: null,
            wallpaper: null,
        }
    },
    posts: [
        {
            id: 0,
            text: 'Hey, React seems cool! I love it!',
            likes: 112,
        },
        {
            id: 1,
            text: 'My post!',
            likes: 22,
        },
        {
            id: 2,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada massa nec sem elementum, vel vulputate odio ornare. Nunc eleifend diam sit amet luctus rutrum. Aenean a mi at nibh feugiat vestibulum eget sit amet mauris. Aliquam erat volutpat. Nam varius ultricies est et pulvinar. Vivamus facilisis mauris eu sem hendrerit dignissim. Integer fermentum justo in neque sollicitudin, ac viverra dolor aliquet. Aenean posuere augue at mauris aliquet tempus. Duis ac nisl suscipit, aliquet orci et, rhoncus nisl. Proin sollicitudin dui sit amet purus hendrerit pellentesque. Aliquam at dictum justo. Nulla sagittis, quam vel cursus finibus, ex dui iaculis quam, placerat condimentum augue purus iaculis ex.\n' +
                '\n' +
                'Sed sed dapibus dui, tempor porttitor erat. Sed consequat viverra lorem. Vestibulum a tempus tortor. Ut quis justo ac tellus molestie dictum a et mauris. Mauris consectetur a libero vestibulum imperdiet. Proin sed velit id erat congue hendrerit eget id ante. Sed facilisis neque ac fringilla finibus. Praesent tellus libero, convallis et varius non, efficitur in elit. Morbi ipsum ex, pretium eu vestibulum elementum, varius in sapien. Curabitur ac arcu neque. Donec non eros et mi vestibulum tincidunt. Integer efficitur in odio a blandit. Cras feugiat erat augue, eget venenatis justo pulvinar ac. Pellentesque quis tortor ut elit malesuada egestas vitae non ante. Donec iaculis molestie quam, ut gravida risus porttitor quis.',
            likes: 41,
        },
        {
            id: 3,
            text: 'My post!',
            likes: 51,
        },
    ],
};

const profilesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actions.ADD_POST: {
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {
                        id: nextItemId(state.posts),
                        text: action.postText,
                        likes: 0,
                    },
                ],
            };
        }
        case actions.SET_USER_PROFILE: {
            return {
                ...state,
                accountInfo: {
                    ...action.profile,
                    photos: {
                        ...action.profile.photos,
                        wallpaper: state.accountInfo.photos.wallpaper,
                    },
                    aboutMe: state.accountInfo.aboutMe,
                },
            };
        }
        case actions.SET_USER_WALLPAPER: {
            return {
                ...state,
                accountInfo: {
                    ...state.accountInfo,
                    photos: {
                        ...state.accountInfo.photos,
                        wallpaper: action.wallpaper,
                    },
                },
            };
        }
        case actions.SET_STATUS: {
            return {
                ...state,
                accountInfo: {
                    ...state.accountInfo,
                    aboutMe: action.status,
                },
            };
        }
        case actions.SET_FETCHING_STATUS: {
            return {
                ...state,
                accountInfo: {
                    ...state.accountInfo,
                    isFetching: action.isFetching,
                },
            }
        }
        default: {
            return state;
        }
    }
};

function nextItemId(items) {
    const maxId = items.reduce((maxId, item) => Math.max(item.id, maxId), -1);
    return maxId + 1;
}

export const savePost = (postText) => ({
    type: actions.ADD_POST,
    postText,
});
export const setUserProfile = (profile) => ({
    type: actions.SET_USER_PROFILE,
    profile,
});
export const setUserStatus = (status) => ({
    type: actions.SET_STATUS,
    status,
});
export const setUserWallpaper = (wallpaper) => ({
    type: actions.SET_USER_WALLPAPER,
    wallpaper,
});
export const setFetchingStatus = (isFetching) => ({
    type: actions.SET_FETCHING_STATUS,
    isFetching
});

export const addPost = (postText) => (dispatch) => {
    const trimmedText = postText.trim();
    if (trimmedText === '')
        return;
    dispatch(savePost(trimmedText));
};

export const getUserProfile = (userId) => (dispatch) => {
    dispatch(setFetchingStatus(true));

    const hex = getRandomHexColor(userId);
    const profilePromise = profileAPI.getProfile(userId).then(data => {
        dispatch(setUserProfile(data));
    });
    const wallpaperPromise = wallpaperAPI.getWallpaper(hex).then(data => {
        dispatch(setUserWallpaper(data))
    });

    Promise.allSettled([profilePromise, wallpaperPromise]).then(results => {
        dispatch(setFetchingStatus(false));
    });
};

export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(data => {
        dispatch(setUserStatus(data));
    });
};

export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.setStatus(status).then(data => {
        if (data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    })
}

export default profilesReducer;
