import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/dialogs-reducer";

function Dialogs(props) {

    let dialogsElements = props.dialogsPage.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.dialogsPage.messages
        .map(m => <Message message={m.message}/>)

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;

        if (text !== '') {
            props.dispatch(sendMessageActionCreator(text))
        }
    }

    let onMessageChange = (e) => {
        let text = e.target.value
        props.dispatch(updateNewMessageTextActionCreator(text))
        console.log(text)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={newMessageElement}
                          onChange={onMessageChange}
                          value={props.dialogsPage.newMessageText}
                          placeholder='Input massage'
                />
            </div>
            <div>
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    );
}

export default Dialogs;