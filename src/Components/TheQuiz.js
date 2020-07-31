import React from 'react';
import Question from './Question';
import QuestionsAndAnswer from '../QuestionsAndAnswerBank';
// import Answers from './Answers';
import { Button } from '@material-ui/core';

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

const ansIndex1 = [];
const ansIndex2 = [];

index.map(index => {
  // console.log(index)
  if(index < 5) {
    // console.log( "this is the type,", typeof QuestionsAndAnswer[index].Response[index2])
    QuestionsAndAnswer[index].Response.forEach(object => {
      if (ansIndex1.length < 5) {
        ansIndex1.push(QuestionsAndAnswer[index].Response.indexOf(object))
      }
    })
  } else if (index > 5){
    QuestionsAndAnswer[index].QuestionSet.forEach(object => {
      if (ansIndex2.length < 4) {
        ansIndex2.push(QuestionsAndAnswer[index].QuestionSet.indexOf(object))
      }
    })
  }
});

shuffleArray(ansIndex1);
shuffleArray(ansIndex2);

console.log("this is ansIndex1,", ansIndex1);
console.log("this is ansIndex2,", ansIndex2);

let num = 1;
let next = num;  
const nextQuestion = () => {
  num++;
  next = index.splice(num, 1);
}


// console.log("this be index", index)
// console.log("this be Response", QuestionsAndAnswer[0].Response[0])

const TheQuiz = () => {
  return (
    <div>
     { console.log("this is next,", next)}
      {
        next < 6 ? 
        <Question name= "quiz__Question" question={QuestionsAndAnswer[next].Question}/>
        : console.log("what the hell is going on?")
      }
      {
        console.log("this is QuestionSet,", QuestionsAndAnswer[next].QuestionSet[0])
      }
      <Button onClick={nextQuestion}/>
    </div>
  );
};

export default TheQuiz;

// <Answers key={key} answer={QuestionsAndAnswer[index].Response[index].answer}/> 