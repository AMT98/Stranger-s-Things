import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/App';


// signup is working for thursday work on redirecting to login page if its success
//learn about local storage
// work login page change it to log out button and work that 
// then create profile page 
// be able to add post 



ReactDOM.render(  
  <Router>
    <App />
  </Router>
  ,document.getElementById('app'))