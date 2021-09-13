import React from "react"

import Paginator from "../common/Paginator/Paginator";
import User from "./User";


let Users = ({currentPage, onPageChanged, pageSize, totalItemsCount, followingIsProgress, users, ...props}) => {
    return <div>
        <Paginator currentPage={currentPage}
                   onPageChanged={onPageChanged}
                   totalItemsCount={totalItemsCount}
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