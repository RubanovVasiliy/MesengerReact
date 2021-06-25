import friend_ava from './../images/post_ava.jpeg'

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 10},
                {id: 2, message: 'It\'s my first post.', likesCount: 3},
                {id: 3, message: 'Yo', likesCount: 42}
            ],
            newPostText: 'it'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Alex'},
                {id: 2, name: 'Andy'},
                {id: 3, name: 'Oleg'},
                {id: 4, name: 'Igor'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'Yo'}
            ]
        },
        friendsBar: {
            friends: [
                {id: 1, name: 'Oleg', img: friend_ava},
                {id: 2, name: 'Igor', img: friend_ava},
                {id: 3, name: 'Sveta', img: friend_ava}
            ]
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('State changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action, payload) {
        switch (action.type) {
            case ADD_POST:
                let newPost = {
                    id: 5,
                    message: this._state.profilePage.newPostText,
                    likesCount: 0
                };
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = ''
                this._callSubscriber(this._state)
                break;

            case UPDATE_NEW_POST_TEXT:
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state)
                break;

        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    }
}

export const updateNewPOstTextActionCreator = (text) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT', newText: text
    }
}

export default store;
window.store = store