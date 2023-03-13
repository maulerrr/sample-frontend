import React, {useEffect, useState} from 'react';
import PostCard from "../components/PostCard";
import handleGetPosts from "../handlers/HandleGetPosts";

function Homepage() {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setError(false);

        handleGetPosts()
            .then((response) => response.data)
            .then((posts) => {
                setPosts(posts)
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
        }, [posts, ]);

    if (loading) {
        return <p className="Indicator">Loading...</p>;
    }

    if (error) {
        return <p className="Indicator">Error fetching posts</p>;
    }

    return (
        <div className="Home">
            {posts && posts.map((post) => <PostCard post={post} key={post.post_id}/>)}
        </div>
    );
}

export default Homepage;