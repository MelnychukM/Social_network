import React from "react";
import s from "./MyPosts.module.css";
import Post from "./post/Post";
import {Field, reduxForm} from "redux-form";

let AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component="textarea" name="newPostText" />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

AddNewPostForm = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} numberLike={p.numberLike}/>);

    let newPostElement = React.createRef();

    let onAddPost = (value) => {
        props.addPost(value.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>

        </div>

    );
}



export default MyPosts;
