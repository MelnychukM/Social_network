import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContanier from "./MyPosts/MyPostsContanier";

const Profile = (props) => {

    return (
        <div>

            <ProfileInfo saveProfile={props.saveProfile} savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus} />

            <MyPostsContanier />
        </div>
    )
}


export default Profile
