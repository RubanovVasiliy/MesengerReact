import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";

function DialogsContainer(props) {
    let state = props.store.getState()

    let addMessage = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    let onMessageChange = (text) => {
        let action = updateNewMessageTextActionCreator(text)
        props.store.dispatch(action)
    }

    return (
        <Dialogs updateNewMessageText={onMessageChange}
                 addMessage={addMessage}
                 dialogs={state.dialogsPage.dialogs}
                 messages={state.dialogsPage.messages}
                 newMessageText={state.dialogsPage.newMessageText}
        />
    );
}

export default DialogsContainer;