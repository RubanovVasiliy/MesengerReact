import friend_ava from "../images/post_ava.jpeg";

let initialState = {
    friends: [
        {id: 1, name: 'Oleg', img: friend_ava},
        {id: 2, name: 'Igor', img: friend_ava},
        {id: 3, name: 'Sveta', img: friend_ava}
    ]
}

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}

export default friendsReducer;