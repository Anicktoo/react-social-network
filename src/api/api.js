import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '8071910a-4ccb-4953-80de-82b2dd251ba0'
    }
});
const axiosNoize = axios.create({
    baseURL: 'https://php-noise.com/noise.php/',
});

export const usersAPI = {
    getUsers: async (pageSize = 10, pageNumber = 1) => {
        const resposne = await axiosInstance.get(`users?page=${pageNumber}&count=${pageSize}`);
        return resposne.data;
    }
};

export const authAPI = {
    me: async () => {
        const resposne = await axiosInstance.get(`auth/me`);
        return resposne.data;
    }
};

export const profileAPI = {
    getProfile: async (userId) => {
        const response = await axiosInstance.get(`profile/${userId}`);
        return response.data;
    }
};

export const followAPI = {
    follow: async (userId) => {
        const response = await axiosInstance.post(`follow/${userId}`, {});
        return response.data;
    },
    unfollow: async (userId) => {
        const response = await axiosInstance.delete(`follow/${userId}`);
        return response.data;
    }
};

export const wallpaperAPI = {
    getWallpaper: async (hex) => {
        const response = await axiosNoize.get(`?hex=${hex}&json&base64`);
        return response.data.base64;
    }
}