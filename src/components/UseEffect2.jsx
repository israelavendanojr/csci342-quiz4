import React, { useState, useEffect } from 'react'

function UseEffect2() {

    const [posts, setPost] = useState([]);

    useEffect(() => {
        fetch('url here to fetch')
        .then((response)=> response.json())
        .then((data) => setPost(data))
    }, []) // [] is event that it listens to, if null only fetches once, else listens to that variable that is inserted



    return (
        <div>
        <h1>POSTS: </h1>
        {posts.map(post=>(
            <div id={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))}
        </div>

    )
}

export default UseEffect2
