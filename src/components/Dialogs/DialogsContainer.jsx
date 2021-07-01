import {sendMessage, updateNewMessageText} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
    }
}

const DialogsContainer = connect(mapStateToProps, {
    sendMessage,
    updateNewMessageText,
})(Dialogs);

export default DialogsContainer;