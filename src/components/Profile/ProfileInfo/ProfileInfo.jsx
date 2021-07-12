import ava from "../../../images/ava.jpeg";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={classes.content}>
            <div>
                <img src={ava} alt='' width='300px'/>
                <img src={props.profile.photos.large}/>
            </div>
            <div className={classes.aboutMe}>
                About me
                {props.profile.aboutMe ? <div> {props.profile.contacts.aboutMe}</div> : null}

            </div>

            <div className={classes.descriptionBlock}>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                Ava + description
                <div className={classes.contacts}>
                    My Contacts
                    {props.profile.contacts.facebook ?
                        <div>Facebook {props.profile.contacts.facebook}</div> : null}
                    {props.profile.contacts.website ? <div>Facebook {props.profile.contacts.website}</div> : null}
                    {props.profile.contacts.vk ? <div>vk {props.profile.contacts.vk}</div> : null}
                    {props.profile.contacts.twitter ? <div>twitter {props.profile.contacts.twitter}</div> : null}
                    {props.profile.contacts.instagram ? <div>instagram {props.profile.contacts.instagram}</div> : null}
                    {props.profile.contacts.youtube ? <div>youtube {props.profile.contacts.youtube}</div> : null}
                    {props.profile.contacts.github ? <div>github {props.profile.contacts.github}</div> : null}
                    {props.profile.contacts.mainLink ? <div>mainLink {props.profile.contacts.mainLink}</div> : null}
                </div>
                <div>
                    {props.profile.lookingForAJob ?
                        <div>
                            Search for a job {props.profile.contacts.lookingForAJob}
                            {props.profile.lookingForAJobDescription ?
                                <div>{props.profile.lookingForAJobDescription}</div> : null}

                        </div>
                        : null}

                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;