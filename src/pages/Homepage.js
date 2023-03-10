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

    return (
        <div className="Home">
            <PostCard post={
                {
                    postHeader: "Something",
                    postBody: "Somebody",
                }
            }/>
            <PostCard post={
                {
                    postHeader: "Not Something",
                    postBody: "Not Somebody",
                }
            }/>
            <PostCard post={
                {
                    postHeader: "Not Something",
                    postBody: "Not Somebody",
                }
            }/>
            <PostCard post={
                {
                    postHeader: "Not Something",
                    postBody: "Not Somebody",
                }
            }/>
        </div>
    );
}

export default Homepage;