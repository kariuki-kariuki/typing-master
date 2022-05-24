import React, {Fragment} from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../home/Home";


function RouterSetUp(){
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path="/" element = { <Home />}>
            {/* <Home /> */}
          </Route>
        </Routes>
      </Fragment>
    </Router>
  )
}

export default RouterSetUp