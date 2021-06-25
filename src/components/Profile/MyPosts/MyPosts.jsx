import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, updateNewPOstTextActionCreator} from "../../../Redux/State";

function MyPosts(props) {
    let postsElements = props.posts
        .map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;

        if (text !== '') {
            props.dispatch(addPostActionCreator())
        }
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch(updateNewPOstTextActionCreator(text))
        console.log(text)
    }


    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;