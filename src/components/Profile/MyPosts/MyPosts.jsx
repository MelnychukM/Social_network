import React from "react";
import s from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = () => {
    let postsData = [
        {id: 1, name: "Hey, hove old do?", numberLike: 55},
        {id: 2, name: "Hey,like ", numberLike: 24},
        {id: 2, name: "Blabla ", numberLike: 234},
        {id: 2, name: "Dada", numberLike: 15}
    ]

    let postsElements = postsData.map(p => <Post message={p.name} numberLike={p.numberLike}/>)

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
                {postsElements}
            </div>

        </div>

    );
}
export default MyPosts;
