import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Friend from "../Friends/Friend/Friend";

function Navbar(props) {
    let friendElement = props.store.getState().friendsPage.friends
        .map(f => <Friend name={f.name} img={f.img}/>)

    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news' activeClassName={classes.active}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music' activeClassName={classes.active}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings' activeClassName={classes.active}>Settings</NavLink>
            </div>
            <div className={classes.item + ' ' + classes.friends}>
                <NavLink to='/friends' activeClassName={classes.active}>Friends</NavLink>
                <div className={classes.friendsItems}>
                    {friendElement}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;