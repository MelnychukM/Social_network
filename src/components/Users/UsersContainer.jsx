import React from "react";
import Users from "./Users"
import {connect} from "react-redux";
import {followACT, setUsersACT, unfollowACT} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followACT(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowACT(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersACT(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);