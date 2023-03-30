import React, {useEffect, useState} from 'react';
import PostCard from "../components/PostCard";
import handleGetPosts from "../handlers/posts/HandleGetPosts";
import {useCookies} from "react-cookie";

function Homepage() {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [cookies, setCookie, removeCookie] = useCookies()

    // const username = JSON.parse(localStorage.getItem("user")).username

    useEffect(() => {
        setError(false);

        if (!cookies.token)
            window.location.href = "/login"

        handleGetPosts()
            .then((response) => response.data)
            .then((posts) => {
                setPosts(posts)
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
        return <p className="Indicator">Error fetching posts</p>;
    }

    function handlePostDelete(deletedPostId) {
        setPosts((prevPosts) => prevPosts.filter((post) => post.post_id !== deletedPostId));
    }

    return (
        <div className="Home">
            {posts && posts.map((post) => <PostCard
                post={post}
                key={post.post_id}
                onPostDelete={handlePostDelete}
            />)}
        </div>
    );
}

export default Homepage;