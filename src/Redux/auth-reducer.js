import {authAPI, securityApi} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'
const GET_CAPTCHA_URL = 'GET_CAPTCHA_URL'
const SET_CAPTCHA_NULL = 'SET_CAPTCHA_NULL'


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captcha: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload
            }
        }
        case GET_CAPTCHA_URL: {
            return {
                ...state,
                captcha: action.payload
            }
        }
        case SET_CAPTCHA_NULL: {
            return {
                ...state,
                captcha: null
            }
        }
        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})
export const getAuthUserData = () => dispatch => {
    return authAPI.getAuthMe()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
                dispatch(setCaptchaNull())
            }
        })
}
export const login = (email, password, rememberMe, captcha = null) => dispatch => {
    authAPI.postAuthLogin(email, password, rememberMe, captcha)
        .then(response => {
            const errorMessage = () => {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: message}))
            }
            const resultCode = response.data.resultCode
            if (resultCode === 0) {
                dispatch(getAuthUserData())
            } else if (resultCode === 10) {
                dispatch(getCaptcha())
                if (captcha) errorMessage()
            } else {
                errorMessage()
            }
        })
}
export const logout = () => dispatch => {
    authAPI.deleteAuthLogin()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}
export const setCaptcha = (url) => ({type: GET_CAPTCHA_URL, payload: url})
export const setCaptchaNull = () => ({type: SET_CAPTCHA_NULL})
export const getCaptcha = () => dispatch => {
    securityApi.getCaptcha()
        .then(response => {
            if (response.data.url) {
                dispatch(setCaptcha(response.data.url))
            }
        })
}

export default authReducer;