import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './nav';
import Companies from './companies';
import CompanyDetail from './company';
import Jobs from "./jobs";
import JobDetail from './job';
import Login from './login';
import Signup from './signup';
import "./index.css"

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Route exact path="/" >
      {/* <Home/> */}
    </Route>
    <Route exact path="/companies" >
      <Companies />
    </Route>
    <Route exact path="/companies/:name" >
      <CompanyDetail />
    </Route>
    <Route exact path="/jobs" >
      <Jobs />
    </Route>
    <Route exact path="/jobs/:name" >
      <JobDetail />
    </Route>
    <Route exact path="/signup" >
      <Signup />
    </Route>
    <Route exact path="/login" >
      <Login />
    </Route>
    <Route exact path="/profile" >
      {/* <Profile/> */}
    </Route>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);