import React from 'react';
// import { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from './components/home/Home';
import Login from './components/login/Login';
import Nav from './components/navigation/Nav';
// import Home from './components/home/Home';
// import Test from './components/test/Test';
// import Login from './components/login/Login';
// import SignUp from './components/signup/SignUp';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import RouterSetUp from './components/BrowserSwitch/RouterSetup';

function App() {
  return (
      <div className="container-main">
        <div className="row">
          <div className="col-sm-3">
            <Nav />
          </div>
          <div className="col-sm-9">
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/login" exact>
                <Login />
              </Route>
            </Switch>

            {/* <RouterSetUp /> */}
            {/* <Home /> */}
            {/* <Login /> */}
            {/* <SignUp /> */}
            {/* <Test /> */}
          </div>
        </div>
      </div>
  );
}

export default App;
