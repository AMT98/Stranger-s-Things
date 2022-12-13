import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"


const App = () => {
  const url = "https://strangers-things.herokuapp.com/api/2209-FTB-CT-WEB-PT"
  // const [posts, setPosts] = useState([])

  return (
    <Router>
    <header className='header'>
      <h1>Stranger's Things </h1>
      <div>
        <h2>HOME</h2>
        <h2>POSTS</h2>
        <h2>PROFILE</h2> 
        <Link to="./components/Login.js"><h2>LOG IN</h2></Link>
      </div>
    </header>
        <Switch>
          <Route path = "./components/Login.js">
            <Login 
            url = {url}
            />
            {/* <div>
              hi
            </div> */}
          </Route>
        </Switch>
      </Router>             
  )
}

ReactDOM.render(<App />, document.getElementById("app"))