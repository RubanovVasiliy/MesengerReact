import React from "react";
import classes from './Users.module.css'
import userPhoto from './../../images/guest_ava_small.jpg'
import {NavLink} from "react-router-dom";
import Paginator from "../Common/Paginator/Paginator";

function Users(props) {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    return <div>
        <Paginator {...props} pagesCount={pagesCount}/>
        {
            props.users.map(u =>
                <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                         className={classes.userPhoto}/>
                                </NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ?
                                    <button disabled={props.followingInProgress.some(id => id === u.id)}
                                            onClick={() => {
                                                props.unFollow(u.id)
                                            }}>Unfollow</button>
                                    :
                                    <button disabled={props.followingInProgress.some(id => id === u.id)}
                                            onClick={() => {
                                                props.follow(u.id)
                                            }}>Follow</button>
                                }
                            </div>
                        </span>
                    <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                            </span>
                        </span>
                </div>)
        }
    </div>

}

export default Users