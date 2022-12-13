import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"


const App = () => {
  const url = "https://strangers-things.herokuapp.com/api/2209-FTB-CT-WEB-PT"
  // const [posts, setPosts] = useState([])

  return (
    <Router>
    <header className='header'>
      <h1>Stranger's Things </h1>
      <div>
        
        <Link to="/home">
        <h2>HOME</h2>
        </Link>
        
        <h2>POSTS</h2>
        <h2>PROFILE</h2> 
        <Link to="/login"><h2>LOGIN</h2></Link>
      </div>
    </header>
        <Switch>
          <Route  path = "">
            <Login 
            url = {url}
            />
          </Route>
          <Route path = "/home">
            <Home />
          </Route>
        </Switch>
      </Router>             
  )
}

ReactDOM.render(<App />, document.getElementById("app"))