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
    newMessageText: 'sdf'
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = state.newMessageText
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {id: 6, message: body}
                ],
                newMessageText: ''
            }
        }

        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText
            }
        }

        default:
            return state
    }
}

export const sendMessage = () => ({type: SEND_MESSAGE})

export const updateNewMessageText =
    (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default dialogsReducer;