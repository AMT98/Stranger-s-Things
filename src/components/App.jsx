import React, { useState, useEffect } from "react";
import Login from "./Login";
import Home from "./Home";
import Posts from "./Posts";
import Signup from "./Signup";
import Profile from "./Profile";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Messages from "./Messages";

const App = () => {
  const url = "https://strangers-things.herokuapp.com/api/2209-FTB-CT-WEB-PT";
  const [token, setToken] = useState("");
  const [isAuthor, setIsAuthor] = useState("");
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    setToken(localStorage.getItem("token"));
    localStorage.getItem("token");
    setIsAuthor(localStorage.getItem("authorid"));
  }, []);
  return (
    <>
      <NavBar />
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
    </>
  );
};
export default App;
