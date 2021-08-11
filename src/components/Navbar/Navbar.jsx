import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

function Navbar() {
    /*let friendElement = props.store.getState().friendsPage.friends
        .map(f => <Friend name={f.name} img={f.img}/>)*/

    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/users' activeClassName={classes.active}>Users</NavLink>
            </div>
            <div className={classes.item + ' ' + classes.friends}>
                <NavLink to='/friends' activeClassName={classes.active}>Friends</NavLink>
                <div className={classes.friendsItems}>
                    {/*{friendElement}*/}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;