import ava from "../../../images/guest_ava_small.jpg";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


function ProfileInfo({profile, status, updateStatus}) {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className={classes.content}>
            <div>
                {
                    !profile.photos.large ?
                        <img src={ava} alt='' width='300px'/>
                        :
                        <img src={profile.photos.large} alt="Profile logo"/>
                }
            </div>
            <div className={classes.aboutMe}>
                About me
                {profile.aboutMe ? <div> {profile.contacts.aboutMe}</div> : null}

            </div>

            <div className={classes.descriptionBlock}>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                Ava + description
                <div className={classes.contacts}>
                    My Contacts
                    {profile.contacts.facebook ? <div>Facebook {profile.contacts.facebook}</div> : null}
                    {profile.contacts.website ? <div>Facebook {profile.contacts.website}</div> : null}
                    {profile.contacts.vk ? <div>vk {profile.contacts.vk}</div> : null}
                    {profile.contacts.twitter ? <div>twitter {profile.contacts.twitter}</div> : null}
                    {profile.contacts.instagram ? <div>instagram {profile.contacts.instagram}</div> : null}
                    {profile.contacts.youtube ? <div>youtube {profile.contacts.youtube}</div> : null}
                    {profile.contacts.github ? <div>github {profile.contacts.github}</div> : null}
                    {profile.contacts.mainLink ? <div>mainLink {profile.contacts.mainLink}</div> : null}
                </div>
                <div>
                    {profile.lookingForAJob ?
                        <div>
                            Search for a job
                            {profile.contacts.lookingForAJob}
                            {profile.lookingForAJobDescription ?
                                <div>{profile.lookingForAJobDescription}</div> : null}

                        </div>
                        : null}

                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;