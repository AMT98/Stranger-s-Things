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
        <h1>POSTS</h1>
        <hr></hr>
        {posts.map((post, i) => { 
        return (
            <div key={i}>
            <h1>{ post.title }</h1>
            <h2> { post.description }</h2>
            <h2> { post.price }</h2>
            <hr></hr>
            </div>
        
        )})}
        </>
    )
}

export default Posts