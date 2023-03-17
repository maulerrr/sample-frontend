import React, {useState, useEffect} from 'react';
import classes from "./classes/components.module.css";
import Comment from "./Comment";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faTrash} from "@fortawesome/free-solid-svg-icons";
import Like from "../handlers/HandleLike";
import DeletePost from "../handlers/HandleDelete";
import GetPosts from "../handlers/HandleGetPosts";
import DeleteComment from "../handlers/implement/HandleDeleteComment";
import CreateComment from "../handlers/HandleComment";
import GetLike from "../handlers/implement/HandleGetLike";

function PostWithComments(props) {
    const [text, setText] = useState()
    const [color, setColor] = useState("black")

    function HandleCommentCreation(e){
        e.preventDefault()

        CreateComment(props.post.post_id, text)
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(()=> {
                window.location.reload()
            })
    }

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
        GetLike(props?.post.post_id)
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
        <div className={classes.PostPageMain}>
            <section className={classes.PostDetails}>
                <div>
                    <h1 className={classes.PostHeader}>
                        {props.post?.header}
                    </h1>
                    <p className={classes.PostBodyFull}>
                        {props.post?.body}
                    </p>
                    <button
                        className={classes.LikeFullPost}
                        onClick={HandleLike}>
                        <FontAwesomeIcon icon={faHeart} size={"2x"} color={color}/>
                    </button>
                </div>
            </section>

            <h1 className={classes.CommentSectionHeader}>Comments:</h1>
            <section className={classes.Comments}>
                <form onSubmit={HandleCommentCreation}>
                    <textarea placeholder="Enter comment"
                              onChange={(e)=>{setText(e.target.value)}}/>
                    <input type={"submit"} value={"Comment"}/>
                </form>
                <div>
                    {props.comments && props.comments.map((comment)=>
                        <Comment comment={comment} key={comment.comment_id}/>
                    )}
                </div>
            </section>
        </div>
    );
}

export default PostWithComments;