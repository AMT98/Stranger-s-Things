import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Signup = ({ url, token }) => {
  let history = useHistory();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [dataSuccess, setDataSuccess] = useState(false);
  // const [token, setToken] = useState('')
  // console.log(userName);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${url}/users/register`, {
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
      const data = await response.json();
      console.log(data);
      if (data.success) {
        setUserName("");
        setPassword("");
        setDataSuccess(true);
        history.push("/home");
        window.location.reload();
      }

      localStorage.setItem("token", data.data.token);
      // setToken(localStorage.getItem('token'))
      // console.log(token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="loginInput">
        <h1>Sign up</h1>
        <label>
          <input
            className="inputField"
            type="text"
            placeholder="Username*"
            maxLength="10"
            required
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

        <button
          className="inputBtn"
          onClick={() => {
            if (token) {
              alert("You have successfully signed up!");
              history.push("/posts");
            }
          }}
        >
          Sign up
        </button>
      </form>
    </>
  );
};

export default Signup;
