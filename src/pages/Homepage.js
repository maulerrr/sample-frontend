import React, {useEffect} from 'react';
import PostCard from "../components/PostCard";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import CreatePostForm from "../components/CreatePostForm";
import handleGetPosts from "../handlers/HandleGetPosts";

function Homepage() {

    useEffect(() => {
        handleGetPosts().then(()=>{
            console.log("Grabbed posts!")
        })
    })

    const posts = JSON.parse(localStorage.getItem("posts"))

    return (
        <div className="Home">
            {
                posts.map((post)=>{
                    return <PostCard post={post}/>
                })
            }
        </div>
    );
}

export default Homepage;