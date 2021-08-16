import React from "react"
import styles from './users.module.css'
import * as axios from 'axios'
import  userPhoto from '../../assets/users.png'

let Users = (props) => {

    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {

            props.setUsers(response.data.items)
        })


    }

    return (
        props.users.map(u =>
            <div key={u.id}>
                <div>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </div>
                <div>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>{"u.lacation.country"}</div>
                        <div>{"u.lacation.city"}</div>
                    </div>
                </div>
            </div>
        )
    )
}

export default Users;