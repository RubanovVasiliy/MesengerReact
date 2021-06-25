const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText
            };
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state

        default:
            return state
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageTextActionCreator =
    (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default dialogsReducer;