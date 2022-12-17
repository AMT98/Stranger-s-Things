import React, {useState} from 'react';
import Login from './Login';
import Home from './Home';
import Posts from './Posts';
import Add from './Add';
import Signup from './Signup';
import Profile from './Profile';
import {  Route, Switch, NavLink } from "react-router-dom";
import NavBar from './NavBar';


// signup is working for thursday work on redirecting to login page if its success
//learn about local storage
// work login page change it to log out button and work that 
// then create profile page 
// be able to add post 
const App = () => {
  const url = "https://strangers-things.herokuapp.com/api/2209-FTB-CT-WEB-PT"
 


  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <>
      <NavBar />
      <Switch>
        <Route  exact path = "/">
          <Login url = {url} />
        </Route>
        <Route path = "/home">
          <Home />
        </Route>
        <Route path = "/profile">
          <Profile url = {url} />
        </Route>
        <Route path = "/posts">
          <Posts url= {url} />
        </Route>
        <Route path = "/add">
          <Add url={url} />
        </Route>
          <Route path="/signup" >
          <Signup url = {url} />
        </Route>
      </Switch>

    </>
                
  )
}
export default App;
