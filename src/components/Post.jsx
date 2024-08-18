import postModuleStyles from './Post.module.css';

// const names = ["Glaz", "DODO"];

function Post(props) {
    // const chosenName = Math.random() > 0.5 ? names[0] : names[1];

    // <div style={{color: "red", textAlign: "left"}}>
    return (
        <div className={postModuleStyles.post}>
            <p className={postModuleStyles.author}>{props.author}</p>
            <p className={postModuleStyles.text}>{props.body}</p>
        </div>
    )
}

export default Post
