import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {UserCoinsContextProvider} from "./Context/UserCoinsContextProvider";

ReactDOM.render(
  <UserCoinsContextProvider>
    <Router>
      <App />
    </Router>
  </UserCoinsContextProvider>,
  document.getElementById('root')
);

reportWebVitals();
