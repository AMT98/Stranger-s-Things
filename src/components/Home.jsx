import React, { useEffect, useState } from "react";

const Home = ({ url }) => {
  const [userName, setUserName] = useState("");
  const [messages, setMessages] = useState([]);
  const handleProfile = async () => {
    // e.preventDefault()
    try {
      const response = await fetch(`${url}/users/me`, {
        // method: 'GET',
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
      console.log(data.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    handleProfile();
  }, []);
  // console.log(messages);
  return (
    // {messages.map(message => {
    <>
      <h1>Welcome to Stranger's Things!</h1>
      <h3>Logged in as: {userName}</h3>
      <button>View Marketplace</button>
      <div>
        {messages.map((message, i) => {
          return (
            <div key={i} className="postContainer">
              <h4>Post title: {message.post.title}</h4>
              <p>Your Message: {message.content}</p>
              <hr></hr>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
