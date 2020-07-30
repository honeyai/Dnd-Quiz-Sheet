import React from 'react';

const Question = ({name, question}) => {
  return (
    <div className={name}>
      {question}
    </div>
  );
};

export default Question;