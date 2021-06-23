import classes from './Dialogs.module.css'
import {getCLS} from "web-vitals";
import {NavLink} from "react-router-dom";

function Dialogs(props) {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to='/dialogs/1'>Andy</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/2'>Alex</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/3'>Igor</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>Hello</div>
                <div className={classes.message}>Yo</div>
            </div>
        </div>
    );
}

export default Dialogs;