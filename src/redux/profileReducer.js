import { profileAPI, wallpaperAPI } from "../api/api";
import getRandomHexColor from "../utils/getRandomHexColor";

const ADD_POST = 'social_network/profile/ADD_POST';
const SET_STATUS = 'social_network/profile/SET_STATUS';
const SET_USER_PROFILE = 'social_network/profile/SET_USER_PROFILE';
const SET_USER_WALLPAPER = 'social_network/profile/SET_USER_WALLPAPER';
const DELETE_POST = 'social_network/profile/DELETE_POST';
const SET_FETCHING_STATUS = 'social_network/profile/SET_FETCHING_STATUS';
const SET_USER_PHOTO = 'social_network/profile/SET_USER_PHOTO';


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
        case ADD_POST: {
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
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(el => el.id !== action.id),
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                accountInfo: {
                    ...state.accountInfo,
                    ...action.profile,
                    photos: {
                        ...action.profile.photos,
                        wallpaper: state.accountInfo.photos.wallpaper,
                    },
                    aboutMe: state.accountInfo.aboutMe,
                },
            };
        }
        case SET_USER_WALLPAPER: {
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
        case SET_STATUS: {
            return {
                ...state,
                accountInfo: {
                    ...state.accountInfo,
                    aboutMe: action.status,
                },
            };
        }
        case SET_FETCHING_STATUS: {
            return {
                ...state,
                accountInfo: {
                    ...state.accountInfo,
                    isFetching: action.isFetching,
                },
            };
        }
        case SET_USER_PHOTO: {
            return {
                ...state,
                accountInfo: {
                    ...state.accountInfo,
                    photos: {
                        small: action.small,
                        large: action.large,
                        wallpaper: state.accountInfo.photos.wallpaper,
                    },
                }
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
    type: ADD_POST,
    postText,
});
export const deletePost = (id) => ({
    type: DELETE_POST,
    id,
});
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile,
});
export const setUserStatus = (status) => ({
    type: SET_STATUS,
    status,
});
export const setUserWallpaper = (wallpaper) => ({
    type: SET_USER_WALLPAPER,
    wallpaper,
});
export const setFetchingStatus = (isFetching) => ({
    type: SET_FETCHING_STATUS,
    isFetching,
});
export const setUserPhoto = ({ small, large }) => ({
    type: SET_USER_PHOTO,
    small,
    large,
});
export const addPost = (postText) => (dispatch) => {
    const trimmedText = postText.trim();
    if (trimmedText === '')
        return;
    dispatch(savePost(trimmedText));
};

export const getUserProfile = (userId) => async (dispatch) => {
    dispatch(setFetchingStatus(true));
    const hex = getRandomHexColor(userId);
    const data = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(data));
    const dataWallpaper = await wallpaperAPI.getWallpaper(hex);
    dispatch(setUserWallpaper(dataWallpaper));
    dispatch(setFetchingStatus(false));
};

export const getUserStatus = (userId) => async (dispatch) => {
    const data = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(data));

};

export const updateUserStatus = (status) => async (dispatch) => {
    const data = await profileAPI.setStatus(status);
    if (data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
};

export const savePhoto = (photo) => async (dispatch) => {
    const data = await profileAPI.setPhoto(photo);
    console.log(data);
    if (data.resultCode === 0) {
        dispatch(setUserPhoto(data.data.photos));
    }
};

export default profilesReducer;
