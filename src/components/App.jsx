import React, { useState, useEffect } from "react";
import Login from "./Login";
import Home from "./Home";
import Posts from "./Posts";
import Signup from "./Signup";
import Profile from "./Profile";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import "./styles.css";


const App = () => {
  const url = "https://strangers-things.herokuapp.com/api/2209-FTB-CT-WEB-PT";
  const [token, setToken] = useState("");
  const [isAuthor, setIsAuthor] = useState("");
  
  const [darkMode, setDarkMode] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    setToken(localStorage.getItem("token"));
    localStorage.getItem("token");
    setIsAuthor(localStorage.getItem("authorid"));
  }, []);
  return (
    <>
        <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
        <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
          </label>
        </div>
        <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
      </div>
      <NavBar 
      token = {token}/>
      <Switch>
        <Route exact path="/">
          <Login url={url} token={token} />
        </Route>
        <Route path="/home">
          <Home url={url} token={token} />
        </Route>
        <Route path="/profile">
          <Profile url={url} token={token} />
        </Route>
        <Route path="/posts">
          <Posts url={url} token={token} isAuthor={isAuthor} />
        </Route>
        <Route path="/signup">
          <Signup url={url} token={token} />
        </Route>
      </Switch>
      </div>
    </>
  );
};
export default App;
