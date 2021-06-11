import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img className={s.imgContent}
                     src="https://i.pinimg.com/originals/66/ce/ed/66ceed7ad75c94867c24d8601bf28b4c.jpg"
                     alt=""/>
            </div>
            <div>

                <img className={s.imgUsers}
                     src="https://media.istockphoto.com/photos/colored-powder-explosion-abstract-closeup-dust-on-backdrop-colorful-picture-id1072093690?k=6&m=1072093690&s=612x612&w=0&h=Eyk67XBt4sr3Bk1MubM6dHpvEVNICX4L7FumWhcTwuY="
                     alt=""/>
            </div>
            <div>
                <MyPosts/>


            </div>


        </div>
    );
}
export default Profile;
