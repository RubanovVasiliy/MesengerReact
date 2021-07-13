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
    }
}

export const authAPI = {
    getAuthMe() {
        return instance.get(`auth/me`)
    },
    postAuthLogin(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {
            email: email,
            password: password,
            rememberMe: rememberMe
        })
    },
    deleteAuthLogin() {
        return instance.delete(`auth/login`)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
}