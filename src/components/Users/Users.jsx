import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

function Users(props) {
    const {currentPage, onPageChanged, totalUsersCount, pageSize, followingInProgress, follow, unFollow} = props
    return <div>
        <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
                   onPageChanged={onPageChanged}/>
        {
            props.users.map(user =>
                    <User key={user.id}
                          user={user}
                          followingInProgress={followingInProgress}
                          follow={follow}
                          unFollow={unFollow}/>
            )
        }
    </div>
}

export default Users