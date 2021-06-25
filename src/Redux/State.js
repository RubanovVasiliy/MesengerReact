import friend_ava from './../images/post_ava.jpeg'

import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'
import profileReducer from './profile-reducer'

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 10},
                {id: 2, message: 'It\'s my first post.', likesCount: 3},
                {id: 3, message: 'Yo', likesCount: 42}
            ],
            newPostText: ''
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
            ],
            newMessageText: ''
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
    /*dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action)

        this._callSubscriber(this._state)
    }*/
}

export default store;
window.store = store