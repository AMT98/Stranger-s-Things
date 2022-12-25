import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Home = ({ url }) => {
  const [userName, setUserName] = useState("");
  const [messages, setMessages] = useState([]);
  const [posts, setPosts] = useState([]);
  const [inbox, setInbox] = useState([]);
  let history = useHistory();
  const handleProfile = async () => {
    try {
      const response = await fetch(`${url}/users/me`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      localStorage.setItem("authorid", data.data._id);
      localStorage.getItem("authorid");
      setUserName(data.data.username);
      setMessages(data.data.messages);
      setPosts(data.data.posts);
    } catch (error) {
      console.error(error);
    }
  };
  const handleLogin = () => {
    history.push("/");
    window.location.reload();
  };
  const handleMarketPlace = () => {
    history.push("/posts");
    window.location.reload();
  };
  useEffect(() => {
    handleProfile();
  }, []);

  return (
    <>
      <div className="homeHeader">
        <h1>Welcome to Stranger's Things!</h1>
        {localStorage.getItem("token") && <h3>Logged in as: {userName}</h3>}
        {localStorage.getItem("token") ? null : (
          <h1>Please Signup/Login to Continue</h1>
        )}
        {localStorage.getItem("token") ? (
          <button className="inputBtn" onClick={handleMarketPlace}>
            View Marketplace
          </button>
        ) : (
          <button className="inputBtn" onClick={handleLogin}>
            Log In
          </button>
        )}
        <hr></hr>
        <hr></hr>
      </div>
      <div>
        {messages.map((message, i) => {
          if (message.fromUser.username === userName) {
            return (
              <div key={i} className="postContainer msgContainer">
                <div className="postDetails msgDetails">
                  <h1 className="postContainer msgContainer">Outbox</h1>
                <hr></hr>
                  <h4>
                    {i}. Post title:- {message.post.title}
                  </h4>
                  <p>- Your Message: {message.content}</p>
                </div>
              </div>
            );
          } else {
            return (
              <div key={i} className="postContainer msgContainer">
                <div className="postDetails msgDetails">
                  <h1 className="postContainer msgContainer">Inbox</h1>
                <hr></hr>
                  <h4>Post title:- {message.post.title}</h4>
                  <p>- Message: {message.content}</p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default Home;
