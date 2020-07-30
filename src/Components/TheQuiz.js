import React from 'react';
import Question from './Question';

const questionBank = [
  "You’re contracted to settle a debt. How do you complete the contract?",
  "At the start of a quest, what weapon/magical implement would you choose?",
  "How would you describe yourself?"
]

const index = [];

questionBank.forEach(question => {
  index.push(questionBank.indexOf(question))
})

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(index)

console.log("this be index", index)

const TheQuiz = () => {
  return (
    <div>
      {
        index.map((index, key) => {
          return(
          <Question key={key} name= "quiz__Question" question={questionBank[index]}/>
        )})
      }
    </div>
  );
};

export default TheQuiz;