import classes from "./Post.module.css";
import post_ava from './../../../../images/post_ava.jpeg'

function Post(props) {

    return (
        <div className={classes.item}>
            <img src={post_ava}/>
            {props.message}
            <div>
                <span> like </span>
            </div>
        </div>

    );
}

export default Post;