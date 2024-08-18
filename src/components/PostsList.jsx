import Post from "./Post";
import postsListModuleStyle from './PostsList.module.css';

function PostsList() {
    return (
        <ul className={postsListModuleStyle.posts}>
            <Post author="Glaz DODO" body="React is Awesome !" />
            <Post author="John DOE" body="Hello React World !" />
        </ul>
    )
}

export default PostsList
