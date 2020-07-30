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

const TheQuiz = () => {
  return (
    <div>
      {
        index.map((index, key) => {
          return(
            <div>
              <Question key={key} name= "quiz__Question" question={QuestionsAndAnswer[index].Question}/>
              {
                index < QuestionsAndAnswer[index].Response.length ?
                <Answers answer={QuestionsAndAnswer[index].Response[index].answer}/> 
                : null
              }
            </div>
          )})
        }
    </div>
  );
};

export default TheQuiz;