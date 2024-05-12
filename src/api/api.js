import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'bc2b5a56-0cf8-421a-9a0d-07f9eafdcc13',
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
    },
    login: async (email, password, rememberMe, captcha) => {
        const resposne = await axiosInstance.post(`auth/login`, {
            email, password, rememberMe, captcha
        });
        return resposne.data;
    },
    logout: async () => {
        const resposne = await axiosInstance.delete(`auth/login`);
        return resposne.data;
    },

    getCaptcha: async () => {
        const resposne = await axiosInstance.get(`security/get-captcha-url`);
        return resposne.data;
    },
};

export const profileAPI = {
    getProfile: async (userId) => {
        const response = await axiosInstance.get(`profile/${userId}`);
        return response.data;
    },
    getStatus: async (userId) => {
        const response = await axiosInstance.get(`profile/status/${userId}`);
        return response.data;
    },
    setStatus: async (status) => {
        const response = await axiosInstance.put(`profile/status`, { status });
        return response.data;
    },
    setPhoto: async (photo) => {
        const response = await axiosInstance.put(`profile/photo`, { photo }, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    },
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