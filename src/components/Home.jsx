import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Inbox from "./Inbox";
import Outbox from "./Outbox";

const Home = ({ url }) => {
  const [userName, setUserName] = useState("");
  const [messages, setMessages] = useState([]);
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
      {localStorage.getItem("token") ? (
        <>
          <Outbox messages={messages} userName={userName} />
          <Inbox messages={messages} userName={userName} />
        </>
      ) : null}
    </>
  );
};

export default Home;
