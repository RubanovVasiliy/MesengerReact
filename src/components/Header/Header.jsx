import logo from "../../images/logo.png";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <header className={classes.header}>
            <img src={logo} alt=''/>
            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;