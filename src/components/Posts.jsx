import React, {useEffect, useState} from "react";
import Messages from "./Messages";
import Add from "./Add";

const Posts = ({url, token, isAuthor}) => {

    const [posts, setPosts] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    // const [token, setToken] = useState('')
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzlhYzc5MjUxMGEwODAwMTcyOTM1NmQiLCJ1c2VybmFtZSI6IkFzd2luIiwiaWF0IjoxNjcxMTUxOTcxfQ.Jzjv0Q3phc_xG52_7b7wJA-Kd40zOrNWKwW9gNolATU"

    
    
    const fetchPosts = async() => {
        
        const response = await fetch(`${url}/posts`,{
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
            
        )
        const data = await response.json()
        setPosts(data.data.posts)
        console.log(data);

 }
 
    useEffect(() => {
        fetchPosts();
        // setToken(localStorage.getItem('token'))
        // console.log(localStorage.getItem('token'));
        
            localStorage.getItem('authorid')
        
        // console.log(localStorage.getItem('authorid'));
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

    const handleSearch = (e) => {
        return (
            setSearchTerm(e.target.value)
        )
    }
    
    

    return (
        <>
        <div className="postHeader">
                <h1>POSTS </h1>
        </div>
        <hr></hr>
        <form
        className="postSearchBar" 
        onSubmit={handleSubmit}>
                {token ? 
                <Add setData={setPosts}
                    data = {posts}
                    token = {token}
                 />
                 : null
                }
            <label>
                <input
                className="searchBar"
                type="search"
                placeholder = "Search"
                value={searchTerm}
                onChange= {handleSearch}
                >
                </input>
                <label>
                <button  className="searchBtn">
                <span class="material-symbols-outlined">
                        search
                    </span>
                </button>

                {/* <button className="inputBtn"
                // onClick={handleAddPost}
                >Add a post</button> */}
                {/* <Popup btnTxt="Add Post" children={<Add />} /> */}
                
                </label>
            </label>
        </form>
        <hr></hr>
        {posts.filter((value => {
            if(searchTerm === ''){
                return value
            }else if(value.title.toLowerCase().includes(searchTerm.toLowerCase())){
                return value
            }else if(value.description.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                return value
            }else if(value.location.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                return value
            }
        })).map((post, i) => { 
            return (
                <div key={i} className = "postContainer">
                <div className="postDetails">
                    <h2>{ post.title }</h2>
                    <p> { post.description }</p>
                    <h4> Price: { post.price }</h4>
                    <h4> Location: { post.location }</h4>
                    <h4> Will Deliver: { post.willDeliver ? "True" : "False" }</h4>
                    <label>

                    {post.author._id === isAuthor  ? 
                    <button className="inputBtn"
                    onClick={() => handleDelete(post._id)}
                    >Delete</button> : 
                    <Messages 
                    posts={posts}
                    url={url}
                    postId= {post._id}
                    token={token}
                    />}
                    
                    </label>
                </div>
            </div>
        
        )})}
        </>
    )
}

export default Posts