import React, {useState, useEffect} from 'react';
import Login from './Login';
import Home from './Home';
import Posts from './Posts';
import Signup from './Signup';
import Profile from './Profile';
import {  Route, Switch} from "react-router-dom";
import NavBar from './NavBar';
import Messages from './Messages';


// signup is working for thursday work on redirecting to login page if its success
//learn about local storage
// work login page change it to log out button and work that 
// then create profile page 
// be able to add post 
const App = () => {
  const url = "https://strangers-things.herokuapp.com/api/2209-FTB-CT-WEB-PT"
  const [token, setToken] = useState('')

useEffect(() => {
  setToken(localStorage.getItem('token'))
},[])
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <>
      <NavBar />
      <Switch>
        <Route  exact path = "/">
          <Login 
          url = {url}
          token = {token}
          />
        </Route>
        <Route path = "/home">
          <Home />
        </Route>
        <Route path = "/profile">
          <Profile url = {url} />
        </Route>
        <Route path = "/posts">
          <Posts 
          url= {url}
          token = {token}
          />
        </Route>
          <Route path="/signup" >
          <Signup 
          url = {url}
          token = {token}
          />
        </Route>
      </Switch>

    </>
                
  )
}
export default App;
