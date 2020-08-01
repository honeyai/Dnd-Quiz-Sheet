import React from "react";
import Question from "./Question";
import QuestionsAndAnswer from "../QuestionsAndAnswerBank";
import {
  index,
  questionSetIndex,
  ansIndex1,
  ansIndex2,
} from "../IndexExtractor";
// import { Button } from "@material-ui/core";

//
// ─── VARIABLES ──────────────────────────────────────────────────────────────────
//

// let num = 0;
// let zero = 0;
// let next = index.splice(num, 1);
// let altNext = questionSetIndex.splice(num, 1);

// ────────────────────────────────────────────────────────────────────────────────

//
// ─── START OF COMPONENT ─────────────────────────────────────────────────────────
//

const TheQuiz = () => {
  // const [nexQue, setNexQue] = useState(null);

  // useEffect(() => {
  //   if (next[zero] < 5) {
  //     setNexQue(QuestionsAndAnswer[next[zero]].Question);
  //   } else {
  //     setNexQue(
  //       QuestionsAndAnswer[next[zero]].QuestionSet[altNext[zero]].question
  //       );
  //     }
  //   }, []);

  // console.log("index!", index);
  // console.log("altIndex!", questionSetIndex);
  // console.log("num!", num)
  // console.log("altNext!", questionSetIndex)

  return (
    <div>
      {index.map((index, key) => {
        return (
          <Question
            key={key}
            name="thequiz__Question"
            question={QuestionsAndAnswer[index].Question}
          />
        );
      })}
      <Question
        key={0}
        name="thequiz__Question"
        question={QuestionsAndAnswer[5].QuestionSet[0].question}
      />
      <Question
        key={1}
        name="thequiz__Question"
        question={QuestionsAndAnswer[5].QuestionSet[1].question}
      />
      <Question
        key={2}
        name="thequiz__Question"
        question={QuestionsAndAnswer[5].QuestionSet[2].question}
      />
      <Question
        key={3}
        name="thequiz__Question"
        question={QuestionsAndAnswer[5].QuestionSet[3].question}
      />
       
       {/*=============================================
       =                   index 6                   =
       =============================================*/}
       <Question
        key={0}
        name="thequiz__Question"
        question={QuestionsAndAnswer[6].QuestionSet[0].question}
      />
      <Question
        key={1}
        name="thequiz__Question"
        question={QuestionsAndAnswer[6].QuestionSet[1].question}
      />
      <Question
        key={2}
        name="thequiz__Question"
        question={QuestionsAndAnswer[6].QuestionSet[2].question}
      />
      <Question
        key={3}
        name="thequiz__Question"
        question={QuestionsAndAnswer[6].QuestionSet[3].question}
      />
       {/*=============================================
       =                   index 7                   =
       =============================================*/}
       <Question
        key={0}
        name="thequiz__Question"
        question={QuestionsAndAnswer[7].QuestionSet[0].question}
      />
      <Question
        key={1}
        name="thequiz__Question"
        question={QuestionsAndAnswer[7].QuestionSet[1].question}
      />
      <Question
        key={2}
        name="thequiz__Question"
        question={QuestionsAndAnswer[7].QuestionSet[2].question}
      />
      <Question
        key={3}
        name="thequiz__Question"
        question={QuestionsAndAnswer[7].QuestionSet[3].question}
      />
       {/*=============================================
       =                   index 8                   =
       =============================================*/}
       <Question
        key={0}
        name="thequiz__Question"
        question={QuestionsAndAnswer[8].QuestionSet[0].question}
      />
      <Question
        key={1}
        name="thequiz__Question"
        question={QuestionsAndAnswer[8].QuestionSet[1].question}
      />
      <Question
        key={2}
        name="thequiz__Question"
        question={QuestionsAndAnswer[8].QuestionSet[2].question}
      />
      <Question
        key={3}
        name="thequiz__Question"
        question={QuestionsAndAnswer[8].QuestionSet[3].question}
      />
       { /*=============================================
       =                   index 9                   =
       =============================================*/ }
       <Question
        key={0}
        name="thequiz__Question"
        question={QuestionsAndAnswer[9].QuestionSet[0].question}
      />
      <Question
        key={1}
        name="thequiz__Question"
        question={QuestionsAndAnswer[9].QuestionSet[1].question}
      />
      <Question
        key={2}
        name="thequiz__Question"
        question={QuestionsAndAnswer[9].QuestionSet[2].question}
      />
      <Question
        key={3}
        name="thequiz__Question"
        question={QuestionsAndAnswer[9].QuestionSet[3].question}
      />
       
       
       
      {/* <Button onClick={nextQuestion}> Next </Button> */}
    </div>
  );
};

export default TheQuiz;

// <Answers key={key} answer={QuestionsAndAnswer[index].Response[index].answer}/>
