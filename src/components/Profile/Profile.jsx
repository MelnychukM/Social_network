import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContanier from "./MyPosts/MyPostsContanier";

const Profile = (props) => {

    return (
        <div>

            <ProfileInfo profile={props.profile} />

            <MyPostsContanier />
        </div>
    )
}


export default Profile
