import React from 'react';
import classes from "./classes/components.module.css"
import Like from "../handlers/implement/HandleLike";
import DeletePost from "../handlers/implement/HandleDelete";

function PostCard(props) {
    return (
        <div className={classes.PostContainer}>
            <h1 className={classes.PostHeader}>
                {props.post.postHeader}
            </h1>
            <p className={classes.PostBody}>
                {props.post.postBody}
            </p>

            <button
                className={classes.LikeButton}
                onClick={Like}>Like</button>
            <button
                className={classes.DeleteButton}
                onClick={DeletePost}>Delete</button>
        </div>
    );
}

export default PostCard;