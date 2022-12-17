import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom"

const Posts = ({url}) => {

    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState([])
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzlhYzc5MjUxMGEwODAwMTcyOTM1NmQiLCJ1c2VybmFtZSI6IkFzd2luIiwiaWF0IjoxNjcxMTUxOTcxfQ.Jzjv0Q3phc_xG52_7b7wJA-Kd40zOrNWKwW9gNolATU"

    
    let history= useHistory()
    
    const fetchPosts = async() => {
        
        const response = await fetch(`${url}/posts`

        )
        const data = await response.json()
        setPosts(data.data.posts)
        console.log(data);

 }
    useEffect(() => {
        fetchPosts();
    },[]);
    const handleSubmit = (e) => {
        e.preventDefault()
        
        }
    
    const handleDelete = async (postIdToDelete) => {
        console.log('postIdToDelete', postIdToDelete);
        const response = await fetch(`${url}/posts/${postIdToDelete}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }) 
        const data= await response.json()
        console.log(data);
        if(data) {
            const newPosts = posts.filter(post => post._id !== postIdToDelete);
            setPosts(newPosts)
        }

        
    }

    return (
        <>
        <div className="postHeader">
                <h1>POSTS</h1>
        </div>
        <hr></hr>
        <form
        className="postSearchBar" 
        onSubmit={handleSubmit}>
        
            <label>
                <input
                className="inputField"
                type="text"
                placeholder = "Search"
                value={search}
                onChange= {(e) => setSearch(e.target.value)}
                >
                </input>
                <label className="searchBtn">
                <button className="inputBtn">Search</button>

                <button className="inputBtn"
                onClick={() => {
                    history.push('/add')
                }}
                >Add a post</button>
                </label>
            </label>
        </form>
        <hr></hr>
        {posts.map((post, i) => { 
            return (
                <div key={i} className = "postContainer">
                <div className="postDetails">
                    <h2>{ post.title }</h2>
                    <p> { post.description }</p>
                    <h4> Price: { post.price }</h4>
                    <h4> Location: { post.location }</h4>
                    <h4> Will Deliver: { post.willDeliver ? "True" : "False" }</h4>
                    <h4> Post Active: { post.active ? "True" : "False" }</h4>
                    <label>

                    {post.author.username === "Aswin" ? 
                    <button className="inputBtn"
                    onClick={() => handleDelete(post._id)}
                    >Delete</button>
                     : null}
                    
                    </label>
                </div>
            </div>
        
        )})}
        </>
    )
}

export default Posts