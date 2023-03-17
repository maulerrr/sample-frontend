import React, {useState} from 'react';
import classes from "./classes/components.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons"
import DeleteComment from "../handlers/implement/HandleDeleteComment";

function Comment(props) {
    function HandleCommentDeletion(e){
        e.preventDefault()

        const comment_id = props.comment.comment_id

        DeleteComment(comment_id)
            .then((response)=> {
                console.log(response)
            })
            .catch((error)=> {
                console.log(error)
            })
            .finally(()=> {
                window.location.reload()
            })
    }

    return (
        <div className={classes.CommentComponent}>
            <p>
                <pre>
                    <strong>{props.comment.username + " : "}</strong>
                    {props.comment.text}
                </pre>

                <button className={classes.DeleteComment}
                        onClick={HandleCommentDeletion}>
                    <FontAwesomeIcon icon={faTrashCan}/>
                </button>
            </p>
        </div>
    );
}

export default Comment;