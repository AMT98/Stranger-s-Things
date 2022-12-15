import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/Login';
import Home from './components/Home';
import Posts from './components/Posts';
import Add from './components/Add';
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom"


const App = () => {
  const url = "https://strangers-things.herokuapp.com/api/2209-FTB-CT-WEB-PT"

  return (
    <Router>
    <header className='header'>
      <h1>Stranger's Things </h1>
      <div>
        
        <NavLink activeClassName = "activeNavLinks" className="navLinks" to="/home"><h2>HOME</h2></NavLink>
        <NavLink activeClassName = "activeNavLinks" className="navLinks" to="/posts"><h2>POSTS</h2></NavLink>
        <h2>PROFILE</h2> 
        <NavLink activeClassName = "activeNavLinks" className="navLinks" to="/"><h2>LOGIN</h2></NavLink>
      </div>
    </header>
        <Switch>
          <Route  exact path = "/">
            <Login />
          </Route>
          <Route path = "/home">
            <Home />
          </Route>
          <Route path = "/posts">
            <Posts 
            url= {url}/>
          </Route>
          <Route path = "/add">
            <Add
            url={url} />
          </Route>
        </Switch>
      </Router>             
  )
}

ReactDOM.render(<App />, document.getElementById("app"))