import React from 'react';
import Question from './Question';
import QuestionsAndAnswer from '../QuestionsAndAnswerBank';
import Answers from './Answers';



const index = [];

QuestionsAndAnswer.forEach(question => {
  index.push(QuestionsAndAnswer.indexOf(question))
})

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(index)

console.log("this be index", index)
console.log("this be Response", QuestionsAndAnswer[0].Response[0])

const TheQuiz = () => {
  return (
    <div>
      <Question key={key} name= "quiz__Question" question={QuestionsAndAnswer[index].Question}/>
    </div>
  );
};

export default TheQuiz;

// <Answers key={key} answer={QuestionsAndAnswer[index].Response[index].answer}/> 