import React from 'react';



const Answers = ({answer, value, attribute}) => {
  return (
    <label value={value} htmlFor="answer">
      <input name="answer" type="radio" value={value} attribute={attribute}></input>
      {answer}
    </label>
  );
};

export default Answers;