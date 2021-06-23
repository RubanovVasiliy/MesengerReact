import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message={`Hi? how are you?`} />
            <Post message={`It's my first post.`} />
        </div>
    );
}

export default MyPosts;