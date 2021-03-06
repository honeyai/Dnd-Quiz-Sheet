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
//
console.log("this be index", index);
// console.log("this be questionSetIndex", questionSetIndex)
// console.log("this be Response", QuestionsAndAnswer[0].Response[0])

// ────────────────────────────────────────────────────────────────────────────────

//
// ─── START OF COMPONENT ─────────────────────────────────────────────────────────
//

const TheQuiz = () => {
  const [nexQue, setNexQue] = useState(null);

  useEffect(() => {
    console.log("index!", index);
    console.log("altIndex!", questionSetIndex);
    if (next[zero] < 5) {
      setNexQue(QuestionsAndAnswer[next[zero]].Question);
    } else {
      setNexQue(
        QuestionsAndAnswer[next[zero]].QuestionSet[altNext[zero]].question
      );
    }
  }, []);

  // console.log("num!", num)
  // console.log("altNext!", questionSetIndex)

  /*----------  The following gives the index for the next question on click  ----------*/
  const nextQuestion = () => {
    // num++;
    console.log("index!", index);
    // console.log("alt next!", altNext)
    // console.log("index length is", index.length)
    // console.log("altNext length is", questionSetIndex.length)
    // console.error("this is the next ques,", nexQue);
    // console.error("questionSet length,", questionSetIndex.length);
    // console.error("questions 5-11");
    // console.error("questions 0-4");

    if (index.length !== 0) {
      if (next >= 5) {
        setNexQue(
          QuestionsAndAnswer[next[zero]].QuestionSet[altNext[zero]].question
        );
      } else if (next < 5) {
        next = index.splice(num, 1);
        setNexQue(QuestionsAndAnswer[next[zero]].Question);
      }
    } else {
      alert("no more questions");
    }
  };

  // console.log("alt next!", altNext);
  // console.log("index length is", index.length);
  // console.log("altnext length is", questionSetIndex.length);
  // console.error("nexQue is:", next);
  // console.log("nexAltQue is:", altNext);

  return (
    <div>
      {next < 5 ? (
        <div>
          <Question name="quiz__Question" question={nexQue} />
        </div>
      ) : (
        <div>
          <Question name="quiz__Question" question={nexQue} />
        </div>
      )}
      <Button onClick={nextQuestion}> Next </Button>
    </div>
  );
};

export default TheQuiz;

// <Answers key={key} answer={QuestionsAndAnswer[index].Response[index].answer}/>
