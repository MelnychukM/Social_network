import React from "react";
import s from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = () => {
    let postsData = [
        {id: 1, name: "Hey, hove old do?", numberLike: 55},
        {id: 2, name: "Hey,like ", numberLike: 24}

    ]
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea> </textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={postsData[0].name} numberLike={postsData[0].numberLike}/>
                <Post message={postsData[1].name} numberLike={postsData[1].numberLike}/>
            </div>

        </div>

    );
}
export default MyPosts;
