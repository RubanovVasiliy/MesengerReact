const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 10},
        {id: 2, message: 'It\'s my first post.', likesCount: 3},
        {id: 3, message: 'Yo', likesCount: 42}
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost)
            state.newPostText = ''
            return state
            break;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
            break;

        default:
            return state
            break;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator =
    (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;