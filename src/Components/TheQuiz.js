import React, { useState, useEffect } from 'react';
import Question from './Question';
import QuestionsAndAnswer from '../QuestionsAndAnswerBank';
import {index, questionSetIndex, ansIndex1, ansIndex2} from '../IndexExtractor'
// import { Button } from '@material-ui/core';



let num = 0;
let num1 = 0;
let next = index.splice(num, 1);  

const nextQuestion = () => {
  num++;
  next = index.splice(num, 1);
  console.log("next!", next)
}


// console.log("this be index", index)
// console.log("this be questionSetIndex", questionSetIndex)
// console.log("this be Response", QuestionsAndAnswer[0].Response[0])

const TheQuiz = () => {

  const [nexQue, setNexQue] = useState(null); 

  setNexQue(QuestionsAndAnswer[next[num1]].Question);

  console.log("nexQue is:", nexQue)

  return (
    <div>
     { console.log("this is next,", next)}
      {
        next < 5 ? 
        <div>
          <Question name= "quiz__Question" question={nexQue}/>
        </div>
        : 
        <div>
          <Question name= "quiz__Question" question={QuestionsAndAnswer[next].QuestionSet[0].question}/>
        </div>

      }
      <button onClick={nextQuestion}/>
    </div>
  );
};

export default TheQuiz;

// <Answers key={key} answer={QuestionsAndAnswer[index].Response[index].answer}/> 