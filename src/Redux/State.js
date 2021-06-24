import friend_ava from './../images/post_ava.jpeg'

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 10},
            {id: 2, message: 'It\'s my first post.', likesCount: 3},
            {id: 3, message: 'Yo', likesCount: 42}
        ],
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
        friends:[
            {id: 1, name: 'Oleg', img: friend_ava},
            {id: 2, name: 'Igor', img: friend_ava},
            {id: 3, name: 'Sveta', img: friend_ava}
        ]
    }
}

export default state;