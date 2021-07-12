import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {Redirect} from 'react-router-dom'
import {Field, reduxForm} from "redux-form";

function Dialogs(props) {

    let dialogsElements = props.dialogs
        .map(d => <DialogItem name={d.name} key={d.id}/>)

    let messagesElements = props.messages
        .map(m => <Message message={m.message} key={m.id}/>)

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <AddMessageReduxForm onSubmit={addNewMessage}/>
        </div>
    );
}

const AddMessageForm = (props) => {
    const {handleSubmit} = props
    return <form onSubmit={handleSubmit}>
        <div>
            <Field component={'textarea'}
                   name={'newMessageBody'}
                   placeholder={'Enter your message'}
            />
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
}

const AddMessageReduxForm = reduxForm({form: 'addMessage'})(AddMessageForm)

export default Dialogs;