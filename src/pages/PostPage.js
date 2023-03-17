import React from 'react';
import {useEffect, useState} from "react";
import HandleGetComments from "../handlers/HandleGetComments";
import {useParams} from "react-router-dom";
import PostWithComments from "../components/PostWithComments";
import HandleGetPostByID from "../handlers/HandleGetPostByID";

function PostPage(props) {
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const {post_id} = useParams()

    if (!localStorage.getItem("token"))
        window.location.href = "/login"

    useEffect(() => {
        setError(false);

        HandleGetPostByID(post_id)
            .then((response) => response.data)
            .then((post) => {
                setPost(post)
                setLoading(false)
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false))

        HandleGetComments(post_id)
            .then((response) => response.data)
            .then((comments) => {
                setComments(comments)
                setLoading(false)
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p className="Indicator">Loading...</p>;
    }

    if (error) {
        return <p className="Indicator">Fetching Error..</p>;
    }

    return (
        <div className="PostPage">
            <PostWithComments post={post} comments={comments}/>
        </div>
    );
}

export default PostPage;