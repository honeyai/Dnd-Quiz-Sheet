import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import "../Styles/navbar.css";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
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
                  <Link to = "/">
                    Home
                  </Link>
                </Typography>
              </li>
              <li>
                <Typography variant="h6" id="navbar__link">
                  <Link to = "/Quiz">
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
