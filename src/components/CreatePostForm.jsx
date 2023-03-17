import React, {useState} from 'react';
import classes from "./classes/components.module.css";
import handleCreatePost from "../handlers/HandleCreatePost";
import handleGetPosts from "../handlers/HandleGetPosts";

function CreatePostForm(props) {
    const [header, setHeader] = useState("")
    const [body, setBody] = useState("")
    const [error, setError] = useState(false)

    function HandleCreatePost(e){
        e.preventDefault()
        handleCreatePost(header, body)
            .then(()=>{
                handleGetPosts()
                    .then(response => response.data)
                    .then(() => {
                        console.log("Updated posts!")
                        window.location.href = "/"
                    })
                    .catch(() => setError(true))
            })
        setHeader("")
        setBody("")
    }

    if (error) {
        return <p>Error fetching posts</p>;
    }

    return (
        <div className={classes.FormWrapper}>
            <form onSubmit={HandleCreatePost}>
                <label htmlFor="header">Header: </label>
                <input type="text" name="header"
                       onChange={(e)=>{setHeader(e.target.value)}}/>

                <label htmlFor="body">Body: </label>
                <textarea type="text" name="body"
                       onChange={(e)=>{setBody(e.target.value)}}/>

                <input type="submit" value="Create Post"/>
            </form>
        </div>
    );
}

export default CreatePostForm;