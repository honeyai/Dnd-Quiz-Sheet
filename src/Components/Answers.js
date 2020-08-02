import React from "react";
import { Button}  from "@material-ui/core";

const Answers = ({answer, value, attribute }) => {
  return (
    <div>
      <Button
        name="answer"
        type="radio"
        value={value}
        attribute={attribute}
      >
        {answer}

      </Button>
      {/* <label htmlFor="answer"> */}
      {/* </label> */}
    </div>
  );
};

export default Answers;
