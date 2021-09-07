import React from "react"

import Paginator from "../common/Paginator/Paginator";
import User from "./User";


let Users = ({currentPage, onPageChanged, pageSize, totalUsersCount, followingIsProgress, users, ...props}) => {
    return <div>
        <Paginator currentPage={currentPage}
                   onPageChanged={onPageChanged}
                   totalUsersCount={totalUsersCount}
                   pageSize={pageSize}/>
        {
            users.map(u => <User followingIsProgress={followingIsProgress}
                                 unfollow={props.unfollow}
                                 follow={props.follow}
                                 key={u.id}
                                 user={u}
                />
            )
        }
    </div>
}


export default Users;