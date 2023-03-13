import React, {useEffect} from 'react';
import classes from "./classes/components.module.css"
import Like from "../handlers/implement/HandleLike";
import DeletePost from "../handlers/HandleDelete";
import GetPosts from "../handlers/HandleGetPosts";

function PostCard(props) {

    function HandleLike(e){
        e.preventDefault()

        Like(props.post.post_id).then((response)=> {
            console.log("Liked post with ID="+props.post.post_id)
            })
    }

    function HandleDelete(e) {
        e.preventDefault()
        DeletePost(props.post.post_id).then(()=>{
            GetPosts()
                .then((response)=>response.data)
                .then(()=> {
                    console.log("Updated posts after delete..")
                })
            console.log("Deleted post with id=" + props.post.post_id)
        })
    }

    useEffect(()=>{
        GetPosts()
            .then((response)=>response.data)
    }, [props])

    return (
        <div className={classes.PostContainer}>
            <h1 className={classes.PostHeader}>
                {props.post.header}
            </h1>
            <p className={classes.PostBody}>
                {props.post.body}
            </p>

            <button
                className={classes.LikeButton}
                onClick={HandleLike}>Like</button>
            <button
                className={classes.DeleteButton}
                onClick={HandleDelete}>Delete</button>
        </div>
    );
}

export default PostCard;