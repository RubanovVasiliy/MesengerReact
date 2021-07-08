import axios from "axios";
import {API_KEY} from "../settings";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": API_KEY
    }
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    postFollow(userId) {
        return instance.post(`follow/${userId}`)
    },
    deleteUnFollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getAuthMe() {
        return instance.get(`auth/me`)
    }

}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)

    }
}