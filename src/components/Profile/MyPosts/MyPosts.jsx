import React from "react";
import s from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea> </textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message="Hey, hove ol do?" numberLike="20"/>
                <Post message="Hey,like " numberLike="30"/>
            </div>

        </div>

    );
}
export default MyPosts;
