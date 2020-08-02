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
  console.log("this index!", index);

  return (
    <form>
      {index.map((index, key) => {
        return (
          <div>
            <Question
              key={key}
              name="thequiz__Question"
              question={QuestionsAndAnswer[index].Question}
            />
            {index === 0 ? (
              ansIndex1.map((ans, key) => {
                return (
                  <Answers
                    value={QuestionsAndAnswer[0].Response[ans].value}
                    attribute={QuestionsAndAnswer[0].Response[ans].ability}
                    key={key}
                    name="thequiz__Answer"
                    answer={QuestionsAndAnswer[0].Response[ans].answer}
                  />
                );
              })
            ) : index === 1 ? (
              ansIndex1.map((ans, key) => {
                return (
                  <Answers
                    value={QuestionsAndAnswer[1].Response[ans].value}
                    attribute={QuestionsAndAnswer[1].Response[ans].ability}
                    key={key}
                    name="thequiz__Answer"
                    answer={QuestionsAndAnswer[1].Response[ans].answer}
                  />
                );
              })
            ) : index === 2 ? (
              ansIndex1.map((ans, key) => {
                return (
                  <Answers
                    value={QuestionsAndAnswer[2].Response[ans].value}
                    attribute={QuestionsAndAnswer[2].Response[ans].ability}
                    key={key}
                    name="thequiz__Answer"
                    answer={QuestionsAndAnswer[2].Response[ans].answer}
                  />
                );
              })
            ) : index === 3 ? (
              <div>
                <Answers
                  value={QuestionsAndAnswer[3].Response[0].value}
                  attribute={QuestionsAndAnswer[3].Response[0].ability}
                  key={key}
                  name="thequiz__Answer"
                  answer={QuestionsAndAnswer[3].Response[0].answer}
                />
                <Answers
                  value={QuestionsAndAnswer[3].Response[1].value}
                  attribute={QuestionsAndAnswer[3].Response[1].ability}
                  key={key}
                  name="thequiz__Answer"
                  answer={QuestionsAndAnswer[3].Response[1].answer}
                />
                <Answers
                  value={QuestionsAndAnswer[3].Response[2].value}
                  attribute={QuestionsAndAnswer[3].Response[2].ability}
                  key={key}
                  name="thequiz__Answer"
                  answer={QuestionsAndAnswer[3].Response[2].answer}
                />
                <Answers
                  value={QuestionsAndAnswer[3].Response[3].value}
                  attribute={QuestionsAndAnswer[3].Response[3].ability}
                  key={key}
                  name="thequiz__Answer"
                  answer={QuestionsAndAnswer[3].Response[3].answer}
                />
              </div>
            ) : index === 4 ? (
              ansIndex1.map((ans, key) => {
                return (
                  <div>
                    <Answers
                      value={QuestionsAndAnswer[4].Response[ans].value}
                      attribute={QuestionsAndAnswer[4].Response[ans].ability}
                      key={key}
                      name="thequiz__Answer"
                      answer={QuestionsAndAnswer[4].Response[ans].answer}
                    />
                  </div>
                );
              })
            ) : index > 5 ? (
              questionSetIndex.map((index, key) => {
                ansIndex2.map((next, keyTheSecond) => {
                  return (
                    <div>
                      <div>
                        <Question
                          key={key}
                          name="thequiz__Question"
                          question={
                            QuestionsAndAnswer[5].QuestionSet[index].question
                          }
                        />
                        <Answers
                          key={keyTheSecond}
                          name="thequiz_Answer"
                          answer={
                            QuestionsAndAnswer[5].QuestionSet[index].answers[
                              next
                            ]
                          }
                        />
                      </div>
                      <div>
                        <Question
                          key={key}
                          name="thequiz__Question"
                          question={
                            QuestionsAndAnswer[6].QuestionSet[index].question
                          }
                        />
                      </div>
                      <div>
                        <Question
                          key={key}
                          name="thequiz__Question"
                          question={
                            QuestionsAndAnswer[7].QuestionSet[index].question
                          }
                        />
                      </div>
                      <div>
                        <Question
                          key={key}
                          name="thequiz__Question"
                          question={
                            QuestionsAndAnswer[8].QuestionSet[index].question
                          }
                        />
                      </div>
                      <Question
                        key={1}
                        name="thequiz__Question"
                        question={
                          QuestionsAndAnswer[9].QuestionSet[index].question
                        }
                      />
                    </div>
                  );
                });
              })
            ) : null}
          </div>
        );
      })}

      {/* <Button onClick={nextQuestion}> Next </Button> */}
    </form>
  );
};

export default TheQuiz;
