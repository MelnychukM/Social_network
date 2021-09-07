import React from "react"
import C from './users.module.css'
import userPhoto from '../../assets/users.png'
import {NavLink} from "react-router-dom";



let User = ({user,followingIsProgress,unfollow,follow}) => {
    return (
        <div>
            <div>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} alt=""
                             className={C.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingIsProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      unfollow(user.id)
                                  }}>Unfollow</button>

                        : <button disabled={followingIsProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      follow(user.id)
                                  }}>Follow</button>}
                </div>
            </div>
            <div>
                <div>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>
                <div>
                    <div>{"user.lacation.country"}</div>
                    <div>{"user.lacation.city"}</div>
                </div>
            </div>
        </div>
    )
}


export default User;