import React from 'react';
import { BrowserRouter as Router } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/App';
import {createRoot} from 'react-dom/client'
const root = createRoot(document.getElementById('root'))

root.render((
  <Router>
    <App />
  </Router>
))