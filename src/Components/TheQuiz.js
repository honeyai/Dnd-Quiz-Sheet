import React, { useState, useEffect } from 'react';
import Question from './Question';
import QuestionsAndAnswer from '../QuestionsAndAnswerBank';
import {index, questionSetIndex, ansIndex1, ansIndex2} from '../IndexExtractor'
import { Button } from '@material-ui/core';



let num = 0;
let num1 = 0;
let next = index.splice(num, 1);  


// console.log("this be index", index)
// console.log("this be questionSetIndex", questionSetIndex)
// console.log("this be Response", QuestionsAndAnswer[0].Response[0])

const TheQuiz = () => {

  const [nexQue, setNexQue] = useState(null); 

  useEffect(()=> {
    setNexQue(QuestionsAndAnswer[next[num1]].Question);
  }, []);

  console.log("next!", next)
  console.log("num!", num)
  const nextQuestion = () => {
    // num++; 
    // console.log("next!", next)
    // console.log("index length is", index.length)
    next = index.splice(num-1, 1);
    if (index.length !== 0) {
      if(next < 5){
        setNexQue(QuestionsAndAnswer[next[num1]].Question);
      } else if(next >= 5){
        setNexQue(QuestionsAndAnswer[next[num1]].QuestionSet[0].question);
      }
    }else{
      alert("no more questions")
    }
  }
  
  console.log("nexQue is:", nexQue)

  return (
    <div>
      {
        next < 5 ? 
        <div>
          <Question name= "quiz__Question" question={nexQue}/>
        </div>
        : 
        <div>
          <Question name= "quiz__Question" question={nexQue}/>
        </div>

      }
      <Button onClick={nextQuestion}>Next</Button>
    </div>
  );
};

export default TheQuiz;

// <Answers key={key} answer={QuestionsAndAnswer[index].Response[index].answer}/> 