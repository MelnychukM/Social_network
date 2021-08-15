import React from "react";
import styles from './users.module.css'

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF4nQFzCWRBh2orZnb0SOVoWe3r0H2RDjakg&usqp=CAU',
                    followed: false,
                    fullName: "Dmitry D",
                    status: 'I am a boss',
                    lacation: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF4nQFzCWRBh2orZnb0SOVoWe3r0H2RDjakg&usqp=CAU',
                    followed: true,
                    fullName: "Sasha M",
                    status: 'I am is good job',
                    lacation: {city: 'kiev', country: 'Ukraine'}
                },
                {
                    id: 3,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF4nQFzCWRBh2orZnb0SOVoWe3r0H2RDjakg&usqp=CAU',
                    followed: true,
                    fullName: "Misha M",
                    status: 'I am a beautiful',
                    lacation: {city: 'kiev', country: 'Ukraine'}
                },
                {
                    id: 4,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF4nQFzCWRBh2orZnb0SOVoWe3r0H2RDjakg&usqp=CAU',
                    followed: false,
                    fullName: "Andrey K",
                    status: 'I am pro',
                    lacation: {city: 'kiev', country: 'Ukraine'}
                }
            ]
        )
    }

    return (
        props.users.map(u =>
            <div key={u.id}>
                <div>
                    <div>
                        <img src={u.photoUrl} alt="" className={styles.userPhoto}/>
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
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>{u.lacation.country}</div>
                        <div>{u.lacation.city}</div>
                    </div>
                </div>
            </div>
        )
    )
}

export default Users;