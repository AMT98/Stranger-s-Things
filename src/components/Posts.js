import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom"

const Posts = ({url}) => {

    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState([])

    
    let history= useHistory()
    
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
        fetchPosts();
    },[]);
    const handleSubmit = (e) => {
        e.preventDefault()
        
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
                </label>

                <button className="inputBtn"
                onClick={() => {
                    history.push('/add')
                }}
                >Add a post</button>
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
                </div>
            </div>
        
        )})}
        </>
    )
}

export default Posts