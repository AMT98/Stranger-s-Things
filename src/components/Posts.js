import React, {useEffect, useState} from "react";

const Posts = ({url}) => {

    const [posts, setPosts] = useState([])
 
    const fetchPosts = async() => {
    
        const response = await fetch(`${url}/posts`
        // , {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //         // 'Authorization': 'Bearer TOKEN_STRING_HERE'
        //     },
        //     body : JSON.stringify()
        // }
        )
        const data = await response.json()
        setPosts(data.data.posts)
        console.log(data);

 }
 useEffect(() => {
    fetchPosts()
 },[])
    return (
        <>
        <h1 className="postHeader">POSTS</h1>
        <hr></hr>
        {posts.map((post, i) => { 
        return (
            <div key={i} className = "postContainer">
                <div className="postDetails">
                    <h1>{ post.title }</h1>
                    <p> { post.description }</p>
                    <h3> Price: { post.price }</h3>
                    <h3> Location: { post.location }</h3>
                    <h3> Deliver: { post.willDeliver }</h3>
                </div>
            </div>
        
        )})}
        </>
    )
}

export default Posts