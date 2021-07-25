import React from "react";
import classes from './Users.module.css'
import userPhoto from './../../images/guest_ava_small.jpg'
import {NavLink} from "react-router-dom";

function User({user, followingInProgress, follow, unFollow}) {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                             className={classes.userPhoto}
                             alt="Small logo"
                        />
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ?
                        <button disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                    unFollow(user.id)
                                }}>Unfollow</button>
                        :
                        <button disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                    follow(user.id)
                                }}>Follow</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{'user.location.country'}</div>
                    <div>{'user.location.city'}</div>
                </span>
            </span>
        </div>
    )
}

export default User