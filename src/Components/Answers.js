import React, { useState } from "react";
import { Button}  from "@material-ui/core";

const Answers = ({answer, value, attribute }) => {

  const [choice, setChoice] = useState({
    strength: null,
    dexterity: null,
    constitution: null,
    intelligence: null,
    charisma: null
  })

  const handleClick = event => {
    event.preventDefault();
    console.log("this is hopefully attribute,", event.target.dataset.attribute)
  }

  return (
    <div>
      <button
        onClick={(event) => handleClick(event)}
        value={value}
        data-attribute={attribute}
      >
        {answer}

      </button>
      {/* <label htmlFor="answer"> */}
      {/* </label> */}
    </div>
  );
};

export default Answers;
