import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContanier from "./MyPosts/MyPostsContanier";

const Profile = (props) => {

    return (
        <div>

            <ProfileInfo/>

            <MyPostsContanier store={props.store}/>
        </div>
    )
}


export default Profile
