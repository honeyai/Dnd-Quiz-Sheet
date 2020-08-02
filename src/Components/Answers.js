import React from "react";

const Answers = ({ answer, value, attribute }) => {
  return (
    <div>
      <input
        name="answer"
        type="radio"
        value={value}
        attribute={attribute}
      ></input>
      <label htmlFor={value}>
        {answer}
      </label>
    </div>
  );
};

export default Answers;
