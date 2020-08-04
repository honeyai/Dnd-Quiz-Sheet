import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import "../Styles/navbar.css";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
} 
from "react-router-dom";
import Landing from "./Landing";
import TheQuiz from "./TheQuiz";

const NavBar = () => {
  return (
    <Router>
      <div className="navbar__Container">
        <AppBar position="static">
          <Toolbar variant="dense">
            <ul className="navbar__links">
              <li>
                <Typography variant="h6" id="navbar__link">
                  <Link to = "/" style={{ textDecoration: 'none', color: 'white' }}>
                    Home
                  </Link>
                </Typography>
              </li>
              <li>
                <Typography variant="h6" id="navbar__link">
                  <Link to = "/Quiz"   style={{ textDecoration: 'none', color: 'white' }}>
                    Quiz
                  </Link>
                </Typography>
              </li>
            </ul>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path = "/" component={Landing}/>
          <Route path = "/Quiz" component={TheQuiz}/>
        </Switch>
      </div>
    </Router>
  );
};

export default NavBar;
