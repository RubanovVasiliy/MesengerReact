import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../Redux/State";

function Profile(props) {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     dispatch={props.dispatch}
                     newPostText={props.profilePage.newPostText}

            />
        </div>
    );
}

export default Profile;