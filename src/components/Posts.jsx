import React, { useEffect, useState } from "react";
import Messages from "./Messages";
import Add from "./Add";
import Edit from "./Edit";
import View from "./View";

const Posts = ({ url, token, isAuthor }) => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchPosts = async () => {
    const response = await fetch(`${url}/posts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    setPosts(data.data.posts);
  };

  useEffect(() => {
    fetchPosts();
    localStorage.getItem("authorid");
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleDelete = async (postIdToDelete) => {
    const response = await fetch(`${url}/posts/${postIdToDelete}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();

    if (data) {
      const newPosts = posts.filter((post) => post._id !== postIdToDelete);
      setPosts(newPosts);
    }
  };

  return (
    <>
      <div className="postHeader">
        <h1>POSTS </h1>
      </div>
      <hr></hr>
      <form className="postSearchBar" onSubmit={handleSubmit}>
        {localStorage.getItem("token") ? (
          <Add setData={setPosts} data={posts} token={token} />
        ) : null}
        <label>
          <input
            className="searchBar"
            type="search"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
          <label>
            <button className="searchBtn">
              <span className="material-symbols-outlined">search</span>
            </button>
          </label>
        </label>
      </form>
      <hr></hr>
      {posts
        .filter((value) => {
          if (searchTerm === "") {
            return value;
          } else if (
            value.title.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return value;
          } else if (
            value.description.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return value;
          } else if (
            value.location.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return value;
          }
        })
        .map((post, i) => {
          return (
            <div key={i} className="postContainer">
              <div className="postDetails">
                <h2>{post.title}</h2>
                <p> {post.description}</p>
                <h4> Price: {post.price}</h4>
                <h4> Location: {post.location}</h4>
                <h4> Will Deliver: {post.willDeliver ? "True" : "False"}</h4>
                <label>
                  {post.author._id === isAuthor ? (
                    <div className="delete-edit-btn">
                      <Edit
                        setData={setPosts}
                        data={posts}
                        token={token}
                        postId={post._id}
                        postTitle = {post.title}
                        postDescription = {post.description}
                        postPrice = {post.price}
                        postLocation = {post.location}
                        postDeliver = {post.willDeliver}
                      />

                      <button
                        className="inputBtn"
                        onClick={() => handleDelete(post._id)}
                      >
                        Delete The Post
                      </button>
                    </div>
                  ) : (
                    <View 
                    postTitle = {post.title}
                    postDescription = {post.description}
                    postPrice = {post.price}
                    postLocation = {post.location}
                    postDeliver = {post.willDeliver}/>
                  )}
                </label>
                {token && post.author._id !== isAuthor ? (
                  <div className="postsBtn">
                    <Messages
                      posts={posts}
                      url={url}
                      postId={post._id}
                      token={token}
                    />
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Posts;
