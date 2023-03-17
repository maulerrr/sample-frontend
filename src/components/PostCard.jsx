import React, {useEffect, useState} from 'react';
import classes from "./classes/components.module.css"
import Like from "../handlers/HandleLike";
import DeletePost from "../handlers/HandleDelete";
import GetPosts from "../handlers/HandleGetPosts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash, faHeart} from "@fortawesome/free-solid-svg-icons"
import GetLike from "../handlers/implement/HandleGetLike";

function PostCard(props) {
    const [color, setColor] = useState("black")

    function HandleLike(e){
        e.preventDefault()

        Like(props.post.post_id).then((response)=> {
            console.log("Liked post with ID="+props.post.post_id)
            if (response.liked === true){
                setColor("red")
            } else setColor("black")
        })
    }

    function HandleDelete(e) {
        e.preventDefault()
        DeletePost(props.post.post_id).then(()=>{
            props.onPostDelete(props.post.post_id);
            GetPosts()
                .then((response)=>response.data)
                .then(()=> {
                    console.log("Updated posts after delete..")
                })
            console.log("Deleted post with id=" + props.post.post_id)
        })
    }

    useEffect(()=>{
        GetLike(props.post.post_id)
            .then((response)=> {
                if (response.status === 200) {
                    setColor("red")
                }
            })
            .catch(()=>{
                console.log("error on getting like data")
                setColor("black")
            })
    }, [])

    return (
        <div className={classes.PostContainer}>
            <div onClick={()=>{
                window.location.href=`/post/${props.post.post_id}`
            }
            }>
                <h1 className={classes.PostHeader}>
                    {props.post.header}
                </h1>
                <p className={classes.PostBody}>
                    {props.post.body}
                </p>
            </div>
            <button
                className={classes.LikeButton}
                onClick={HandleLike}>
                <FontAwesomeIcon icon={faHeart} color={color}/>
            </button>
            <button
                className={classes.DeleteButton}
                onClick={HandleDelete}>
                <FontAwesomeIcon icon={faTrash}/>
            </button>
        </div>
    );
}

export default PostCard;