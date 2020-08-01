import React, { useState, useEffect } from "react";
import Question from "./Question";
import QuestionsAndAnswer from "../QuestionsAndAnswerBank";
import {
  index,
  questionSetIndex,
  ansIndex1,
  ansIndex2,
} from "../IndexExtractor";
import { Button } from "@material-ui/core";

//
// ─── VARIABLES ──────────────────────────────────────────────────────────────────
//

let num = 0;
let zero = 0;
let next = index.splice(num, 1);
let altNext = questionSetIndex.splice(num, 1);

// ────────────────────────────────────────────────────────────────────────────────

//
// ─── START OF COMPONENT ─────────────────────────────────────────────────────────
//

const TheQuiz = () => {
  const [nexQue, setNexQue] = useState(null);

  useEffect(() => {
    if (next[zero] < 5) {
      setNexQue(QuestionsAndAnswer[next[zero]].Question);
    } else {
      setNexQue(
        QuestionsAndAnswer[next[zero]].QuestionSet[altNext[zero]].question
        );
      }
    }, []);
    
  // console.log("index!", index);
  // console.log("altIndex!", questionSetIndex);
  // console.log("num!", num)
  // console.log("altNext!", questionSetIndex)

  return (
    <div>
      {
        index.map(index => {
            <Question name="thequiz__Question" content={QuestionsAndAnswer[index].Question}         
        })
      }
      <Button onClick={nextQuestion}> Next </Button>
    </div>
  );
};

export default TheQuiz;

// <Answers key={key} answer={QuestionsAndAnswer[index].Response[index].answer}/>
