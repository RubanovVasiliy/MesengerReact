import ava from "../../../images/ava.jpeg";
import classes from "./ProfileInfo.module.css";

function ProfileInfo() {
    return (
        <div className={classes.content}>
            <div>
                <img src={ava} alt='' width='300px'/>
            </div>
            <div className={classes.descriptionBlock}>
                Ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;