import logo from "../../images/logo.png";
import classes from './Header.module.css'

function Header() {
    return (
        <header className={classes.header}>
            <img src={logo} alt=''/>
        </header>
    );
}

export default Header;