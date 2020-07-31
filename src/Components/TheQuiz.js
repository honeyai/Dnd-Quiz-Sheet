import React from 'react';
import Question from './Question';
import QuestionsAndAnswer from '../QuestionsAndAnswerBank';
import {index, questionSetIndex, ansIndex1, ansIndex2} from '../IndexExtractor'
import { Button } from '@material-ui/core';

let num = 0;
let next = num;  

const nextQuestion = () => {
  num++;
  next = index.splice(num, 1);
}


// console.log("this be index", index)
// console.log("this be questionSetIndex", questionSetIndex)
// console.log("this be Response", QuestionsAndAnswer[0].Response[0])

const TheQuiz = () => {
  return (
    <div>
     { console.log("this is next,", next)}
      {
        next < 5 ? 
        <div>
          <Question name= "quiz__Question" question={QuestionsAndAnswer[next].Question}/>
          <Button onClick={nextQuestion}/>
        </div>
        : 
        <div>
          <Question name= "quiz__Question" question={QuestionsAndAnswer[next].QuestionSet[0].question}/>
          <Button onClick={nextQuestion}/>
        </div>

      }
    </div>
  );
};

export default TheQuiz;

// <Answers key={key} answer={QuestionsAndAnswer[index].Response[index].answer}/> 