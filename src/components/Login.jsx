import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = ({ url, token }) => {
  let history = useHistory();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginMsg, setLoginMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${url}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: `${userName}`,
            password: `${password}`,
          },
        }),
      });
      var data = await response.json();
      setUserName("");
      setPassword("");
      if (data.success) {
        setIsLoggedIn(false);
        localStorage.setItem("token", data.data.token);
        history.push("/home");
        window.location.reload();
      }
      if (!data.success) {
        setLoginMsg(data.error.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {!isLoggedIn ? (
        <form onSubmit={handleSubmit} className="loginInput">
          <h1>LOG IN</h1>
          {loginMsg ? <h6>{loginMsg}</h6> : null}
          <label>
            <input
              className="inputField"
              type="text"
              placeholder="Username*"
              maxLength="10"
              required
              autoFocus
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            ></input>
          </label>

          <label>
            <input
              className="inputField"
              type="password"
              placeholder="Password*"
              maxLength="8"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </label>
          <button className="inputBtn">Log in</button>
          <br></br>
          <br></br>
          <label className="optionLabel">Don't have an account?</label>
          <button
            className="inputBtn"
            onClick={() => {
              history.push("/signup");
            }}
          >
            {" "}
            Sign up!
          </button>
        </form>
      ) : null}
    </>
  );
};

export default Login;
