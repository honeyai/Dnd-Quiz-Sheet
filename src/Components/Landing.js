import React from "react";
import { Button, Typography } from "@material-ui/core";
import "../Styles/landing.css"
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing__Background">
      <Typography variant="h1" component="h2" gutterBottom>
        Who will you be in the world of Dungeons & Dragons
      </Typography>
      <Link to="/Quiz">
        <Button id="landing__StartButton">
          <Typography variant="button" display="block" gutterBottom>
            Take the Quiz
          </Typography>
        </Button>
      </Link>
    </div>
  );
};

export default Landing;
