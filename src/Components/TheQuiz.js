import React, { useState, useEffect } from 'react';
import Question from './Question';
import QuestionsAndAnswer from '../QuestionsAndAnswerBank';
import {index, questionSetIndex, ansIndex1, ansIndex2} from '../IndexExtractor'
import { Button } from '@material-ui/core';


//
// ─── VARIABLES ──────────────────────────────────────────────────────────────────
//

let num = 0;
let num1 = 0;
let next = index.splice(num, 1); 
let altNext = questionSetIndex.splice(num, 1); 
//
// console.log("this be index", index)
// console.log("this be questionSetIndex", questionSetIndex)
// console.log("this be Response", QuestionsAndAnswer[0].Response[0])

// ────────────────────────────────────────────────────────────────────────────────


//
// ─── START OF COMPONENT ─────────────────────────────────────────────────────────
//

const TheQuiz = () => {

  const [nexQue, setNexQue] = useState(null); 

  useEffect(()=> {
    setNexQue(QuestionsAndAnswer[next[num1]].Question);
  }, []);

  // console.log("next!", next)
  // console.log("num!", num)
  

  /*----------  The following gives the index for the next question on click  ----------*/
let totalQuestions = 0;
  const nextQuestion = () => {
    // num++; 
    console.log("next!", next)
    console.log("alt next!", altNext)
    // console.log("index length is", index.length)
    console.log("altnext length is", questionSetIndex.length)
    next = index.splice(num, 1);
    if (index.length !== 0) {
      if(next < 5){
        setNexQue(QuestionsAndAnswer[next[num1]].Question);
        console.log(totalQuestions++)
        
      } else if(next >= 5 && questionSetIndex.length !== 0){
        altNext = questionSetIndex.splice(num,1);
        setNexQue(QuestionsAndAnswer[next[num1]].QuestionSet[altNext[num1]].question);
        console.log(totalQuestions++)

      }
    }else{
      alert("no more questions")
    }
  }
  
  // console.log("nexQue is:", nexQue)

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