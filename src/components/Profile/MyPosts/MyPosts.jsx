import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

function MyPosts(props) {
    let postsElements = props.posts
        .map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let addNewPost = values => {
        props.addPost(values.newPostBody)
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div>
                <AddPostReduxForm onSubmit={addNewPost}/>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
}

const maxLength10 =  maxLengthCreator(10)

function AddPostForm(props) {
    const {handleSubmit} = props
    return <form onSubmit={handleSubmit}>
        <div>
            <Field component={Textarea}
                   name={'newPostBody'}
                   placeholder={'Write something new!'}
                   validate={[required, maxLength10]}
            />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

const AddPostReduxForm = reduxForm({form: 'addPost'})(AddPostForm)

export default MyPosts;