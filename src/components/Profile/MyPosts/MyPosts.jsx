import React from "react";
import s from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = () => {
    return (
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div className={s.posts}>
                    <Post message="Привет, я твій друг" numberLike="20"/>
                    <Post message="Привет, це мій первий пост" numberLike="30"/>
                    <Post message="Лайк за твій пост" numberLike="5"/>
                    <Post message="Ля , ти красівий" numberLike="10"/>



                </div>

            </div>

    );
}
export default MyPosts;
