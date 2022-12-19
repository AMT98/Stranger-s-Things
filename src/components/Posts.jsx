import React, {useEffect, useState} from "react";
import {useHistory, Route, Redirect} from "react-router-dom"
import Popup from "./Popup";
import Messages from "./Messages";
import Add from "./Add";

const Posts = ({url}) => {

    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState([])
    const [token, setToken] = useState('')
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzlhYzc5MjUxMGEwODAwMTcyOTM1NmQiLCJ1c2VybmFtZSI6IkFzd2luIiwiaWF0IjoxNjcxMTUxOTcxfQ.Jzjv0Q3phc_xG52_7b7wJA-Kd40zOrNWKwW9gNolATU"

    
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
        setToken(localStorage.getItem('token'))
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
    const handleAddPost = () => token ? history.push('/add') : history.push('/')
    

    return (
        <>
        <div className="postHeader">
                <h1>POSTS</h1>
        </div>
        <hr></hr>
        <form
        className="postSearchBar" 
        onSubmit={handleSubmit}>
                <Add setData={setPosts}
                    data = {posts}
                 />
        
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

                {/* <button className="inputBtn"
                // onClick={handleAddPost}
                >Add a post</button> */}
                {/* <Popup btnTxt="Add Post" children={<Add />} /> */}
                
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
                    <label>

                    {post.author.username === "Aswin" && token ? 
                    <button className="inputBtn"
                    onClick={() => handleDelete(post._id)}
                    >Delete</button> : 
                    <Messages />}
                    
                    </label>
                </div>
            </div>
        
        )})}
        </>
    )
}

export default Posts