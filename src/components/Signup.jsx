import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Signup = ({ url, token }) => {
  let history = useHistory();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [dataSuccess, setDataSuccess] = useState(false);
  const [signUpMsg, setSignUpMsg] = useState("");

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
      setUserName("");
      setPassword("");
      if (data.success) {
        setDataSuccess(true);
        history.push("/home");
        window.location.reload();
      }
      if (!data.success) {
        setSignUpMsg(data.error.message);
      }

      localStorage.setItem("token", data.data.token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="loginInput">
        <h1>Sign up</h1>
        {signUpMsg ? <h6>{signUpMsg}</h6> : null}
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
