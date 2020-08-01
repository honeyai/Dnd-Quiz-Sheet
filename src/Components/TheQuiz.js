import React from "react";
import Question from "./Question";
import QuestionsAndAnswer from "../QuestionsAndAnswerBank";
import Answers from "./Answers";
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
  console.log("altIndex!", questionSetIndex);
  console.log("answer index1!", ansIndex1);

  return (
    <div>
      {index.map((index, key) => {
        return (
          <div>
            <Question
              key={key}
              name="thequiz__Question"
              question={QuestionsAndAnswer[index].Question}
            />
            <form>
              {index === 0 ? (
                ansIndex1.map((ans, key) => {
                  return (
                    <label for="answer">
                      <input name="answer" type="radio"></input>
                      <Answers
                        key={key}
                        name="thequiz__Answer"
                        answer={QuestionsAndAnswer[0].Response[ans].answer}
                      />
                    </label>
                  );
                })
              ) : index === 1 ? (
                ansIndex1.map((ans, key) => {
                  return (
                    <label for="answer">
                      <input name="answer" type="radio"></input>
                    <Answers
                      key={key}
                      name="thequiz__Answer"
                      answer={QuestionsAndAnswer[1].Response[ans].answer}
                    />
                     </label>
                  );
                })
              ) : index === 2 ? (
                ansIndex1.map((ans, key) => {
                  return (
                    <Answers
                      key={key}
                      name="thequiz__Answer"
                      answer={QuestionsAndAnswer[2].Response[ans].answer}
                    />
                  );
                })
              ) : index === 3 ? (
                <div>
                  <Answers
                    key={key}
                    name="thequiz__Answer"
                    answer={QuestionsAndAnswer[3].Response[0].answer}
                  />
                  <Answers
                    key={key}
                    name="thequiz__Answer"
                    answer={QuestionsAndAnswer[3].Response[1].answer}
                  />
                  <Answers
                    key={key}
                    name="thequiz__Answer"
                    answer={QuestionsAndAnswer[3].Response[2].answer}
                  />
                  <Answers
                    key={key}
                    name="thequiz__Answer"
                    answer={QuestionsAndAnswer[3].Response[3].answer}
                  />
                </div>
              ) : index === 4 ? (
                ansIndex1.map((ans, key) => {
                  return (
                    <Answers
                      key={key}
                      name="thequiz__Answer"
                      answer={QuestionsAndAnswer[4].Response[ans].answer}
                    />
                  );
                })
              ) : (
                console.log("you're done!")
              )}
            </form>
          </div>
        );
      })}
      {questionSetIndex.map((index, key) => {
        return (
          <div>
            <Question
              key={key}
              name="thequiz__Question"
              question={QuestionsAndAnswer[5].QuestionSet[index].question}
            />
            <Question
              key={key}
              name="thequiz__Question"
              question={QuestionsAndAnswer[6].QuestionSet[index].question}
            />
            <Question
              key={key}
              name="thequiz__Question"
              question={QuestionsAndAnswer[7].QuestionSet[index].question}
            />
            <Question
              key={key}
              name="thequiz__Question"
              question={QuestionsAndAnswer[8].QuestionSet[index].question}
            />
            <Question
              key={1}
              name="thequiz__Question"
              question={QuestionsAndAnswer[9].QuestionSet[index].question}
            />
          </div>
        );
      })}

      {/* <Button onClick={nextQuestion}> Next </Button> */}
    </div>
  );
};

export default TheQuiz;

// <Answers key={key} answer={QuestionsAndAnswer[index].Response[index].answer}/>
