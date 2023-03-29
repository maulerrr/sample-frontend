import React from 'react';
import CreatePostForm from "../components/CreatePostForm";
import {useCookies} from "react-cookie";

function CreatePostPage() {
    const [cookies, setCookie, removeCookie] = useCookies()

    if (!cookies.token)
        window.location.href = "/login"

    return (
        <div className={"CreatePostPage"}>
            <CreatePostForm/>
        </div>
    );
}

export default CreatePostPage;