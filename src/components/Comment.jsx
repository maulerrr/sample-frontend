import React, {useState} from 'react';
import classes from "./classes/components.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons"
import DeleteComment from "../handlers/comments/HandleDeleteComment";
import {Alert, AlertTitle} from "@mui/material";
import {useCookies} from "react-cookie";

function Comment(props) {
    const [alert, setAlert] = useState(<></>)
    const [cookies, setCookie, removeCookie] = useCookies(["token"])

    if (!cookies.token)
        window.location.href = "/login"

    const user_id = JSON.parse(localStorage.getItem("user"))?.id

    function closeAlert(e){
        e.preventDefault()
        setAlert(<></>)
    }

    function HandleCommentDeletion(e){
        e.preventDefault()

        const comment_id = props.comment.comment_id

        DeleteComment(comment_id)
            .then((response)=> {
                props.onCommentDelete(comment_id);
                console.log(response)
            })
            .catch((error)=> {
                setAlert(
                    <Alert severity={"error"}
                           variant={"filled"}
                           onClose={(e)=>{closeAlert(e)}}
                    >
                        <AlertTitle>Error occurred</AlertTitle>
                        {error.response.data.message}
                    </Alert>
                )
                setTimeout(()=>{
                    setAlert(<></>)
                }, 3000)
            })
    }

    return (
        <div className={classes.CommentComponent}>
            <p>
                <pre>
                    <strong>{props.comment.username + " : "}</strong>
                    {props.comment.text}
                </pre>

                {
                    props.comment.user_id === user_id ?
                    <button className={classes.DeleteComment}
                         onClick={HandleCommentDeletion}>
                        <FontAwesomeIcon icon={faTrashCan} color={"white"}/>
                    </button> : <></>
                }
            </p>

            <div className={classes.Alerts}>
                {alert}
            </div>
        </div>
    );
}

export default Comment;