import {profileAPI} from "../api/api";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 10},
        {id: 2, message: 'It\'s my first post.', likesCount: 3},
        {id: 3, message: 'Yo', likesCount: 42}
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let body = state.newPostText
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {
                        id: 5,
                        message: body,
                        likesCount: 0
                    }
                ],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state
    }
}

export const addPost = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const getUserProfile = (userId) => dispatch => {
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;