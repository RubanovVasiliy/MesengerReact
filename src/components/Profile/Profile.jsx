import ava from "../../images/ava.jpeg";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <div className={classes.content}>
            <div>
                <img src={ava} alt='' width='300px'/>
            </div>
            <div>
                Ava + description
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;