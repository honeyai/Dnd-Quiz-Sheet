import React, { useState } from "react";
import Question from "./Question";
import QuestionsAndAnswer from "../QuestionsAndAnswerBank";
import { finalScoreSet } from "./Answers";
import { Button, Card } from "@material-ui/core";
import {
  index,
  questionSetIndex,
  ansIndex1,
  ansIndex2,
} from "../IndexExtractor";
import Answers from "./Answers";
import GetRace from "./GetRace";
import "../Styles/thequiz.css";

let endPath;

let raceBank = {
  strength: ["half-orc", "dragonborn"],
  dexterity: ["elf", "halfling"],
  constitution: "dwarf",
  intelligence: "gnome",
  charisma: ["half-elf", "tiefling"],
};

const tieBreaker = (array) => {
  let index = Math.floor(Math.random() * array.length);
  return index;
};

const TheQuiz = () => {
  // console.log("altIndex!", questionSetIndex);
  // console.log("answer index1!", ansIndex1);
  // console.log("answer index2!", ansIndex2);
  // console.log("this index!", index);

  const [show, setShow] = useState(false);

  const passResults = (score) => {
    let scores = Object.values(score);

    let min = Math.min(...scores);

    let max = Math.max(...scores);

    const getAttribute = (object, value) =>
      Object.keys(object).filter((key) => object[key] === value);

    // console.log(min, max); //if these have less than two of difference from each other max-min <= 2 take the max and find the attribute

    if (max - min <= 2) {
      // console.log("they're going to get human or half elf")
      let tie = ["half-elf", "human"];
      endPath = tie[tieBreaker(tie)];
    } else {
      // console.log(getAttribute(score, max));
      let filtered = getAttribute(score, max); //trying to get the answer out of this filter array
      let result = filtered[0];
      // console.log("this is result,", result);
      Object.entries(raceBank).forEach((pairs) => {
        // console.log("these are the types,", typeof pairs[1])
        if (pairs[0] === result) {
          if (typeof pairs[1] === "string") {
            // console.log("this might work,", pairs[1]);
            endPath = pairs[1];
          } else {
            // console.log("this might work,", pairs[1][0]);
            endPath = pairs[1][0];
          }
        }
      });
    }
    setShow(true);
  };

  return (
    <div className="thequiz__wrapper">
      <div className="thequiz__SuperContainer">
        {index.map((index, key) => {
          if (index < 5) {
            return (
              <Card id="thequiz__Card">
                <div>
                  <Question
                    key={key}
                    name="thequiz__Question"
                    question={QuestionsAndAnswer[index].Question}
                  />
                  <div className="thequiz__AContainer">
                    {
                      index === 0 ? (
                        ansIndex1.map((ans, key) => {
                          return (
                            <Answers
                              value={QuestionsAndAnswer[0].Response[ans].value}
                              attribute={
                                QuestionsAndAnswer[0].Response[ans].ability
                              }
                              key={key}
                              name="thequiz__Answer"
                              answer={
                                QuestionsAndAnswer[0].Response[ans].answer
                              }
                            />
                          );
                        })
                      ) : index === 1 ? (
                        ansIndex1.map((ans, key) => {
                          return (
                            <Answers
                              value={QuestionsAndAnswer[1].Response[ans].value}
                              attribute={
                                QuestionsAndAnswer[1].Response[ans].ability
                              }
                              key={key}
                              name="thequiz__Answer"
                              answer={
                                QuestionsAndAnswer[1].Response[ans].answer
                              }
                            />
                          );
                        })
                      ) : index === 2 ? (
                        ansIndex1.map((ans, key) => {
                          return (
                            <Answers
                              value={QuestionsAndAnswer[2].Response[ans].value}
                              attribute={
                                QuestionsAndAnswer[2].Response[ans].ability
                              }
                              key={key}
                              name="thequiz__Answer"
                              answer={
                                QuestionsAndAnswer[2].Response[ans].answer
                              }
                            />
                          );
                        })
                      ) : index === 3 ? (
                        <div>
                          <Answers
                            value={QuestionsAndAnswer[3].Response[0].value}
                            attribute={
                              QuestionsAndAnswer[3].Response[0].ability
                            }
                            key={1}
                            name="thequiz__Answer"
                            answer={QuestionsAndAnswer[3].Response[0].answer}
                          />
                          <Answers
                            value={QuestionsAndAnswer[3].Response[1].value}
                            attribute={
                              QuestionsAndAnswer[3].Response[1].ability
                            }
                            key={2}
                            name="thequiz__Answer"
                            answer={QuestionsAndAnswer[3].Response[1].answer}
                          />
                          <Answers
                            value={QuestionsAndAnswer[3].Response[2].value}
                            attribute={
                              QuestionsAndAnswer[3].Response[2].ability
                            }
                            key={3}
                            name="thequiz__Answer"
                            answer={QuestionsAndAnswer[3].Response[2].answer}
                          />
                          <Answers
                            value={QuestionsAndAnswer[3].Response[3].value}
                            attribute={
                              QuestionsAndAnswer[3].Response[3].ability
                            }
                            key={4}
                            name="thequiz__Answer"
                            answer={QuestionsAndAnswer[3].Response[3].answer}
                          />
                        </div>
                      ) : index === 4 ? (
                        ansIndex1.map((ans, key) => {
                          return (
                            <div>
                              <Answers
                                value={
                                  QuestionsAndAnswer[4].Response[ans].value
                                }
                                key={key}
                                attribute={
                                  QuestionsAndAnswer[4].Response[ans].ability
                                }
                                name="thequiz__Answer"
                                answer={
                                  QuestionsAndAnswer[4].Response[ans].answer
                                }
                              />
                            </div>
                          );
                        })
                      ) : null
                      // console.log("you're done!")
                    }
                  </div>
                </div>
              </Card>
            );
          }
        })}
        {questionSetIndex.map((index) => {
          return (
            <div>
              <Card id="thequiz__Card">
                <Question
                  key={500}
                  name="thequiz__Question"
                  question={QuestionsAndAnswer[5].QuestionSet[index].question}
                />
                <div className="thequiz__AContainer">
                  {ansIndex2.map((next, key) => {
                    return (
                      <Answers
                        key={key}
                        attribute={QuestionsAndAnswer[5].ability}
                        name="thequiz_Answer"
                        answer={
                          QuestionsAndAnswer[5].QuestionSet[index].answers[next]
                            .answer
                        }
                        value={
                          QuestionsAndAnswer[5].QuestionSet[index].answers[next]
                            .value
                        }
                      />
                    );
                  })}
                </div>
              </Card>
              <Card id="thequiz__Card">
                <Question
                  key={502}
                  name="thequiz__Question"
                  question={QuestionsAndAnswer[6].QuestionSet[index].question}
                />
                <div className="thequiz__AContainer">
                  {ansIndex2.map((next, key) => {
                    return (
                      <Answers
                        key={key}
                        name="thequiz_Answer"
                        attribute={QuestionsAndAnswer[6].ability}
                        answer={
                          QuestionsAndAnswer[6].QuestionSet[index].answers[next]
                            .answer
                        }
                        value={
                          QuestionsAndAnswer[6].QuestionSet[index].answers[next]
                            .value
                        }
                      />
                    );
                  })}
                </div>
              </Card>
              <Card id="thequiz__Card">
                <Question
                  key={504}
                  name="thequiz__Question"
                  question={QuestionsAndAnswer[7].QuestionSet[index].question}
                />
                <div className="thequiz__AContainer">
                  {ansIndex2.map((next, key) => {
                    return (
                      <Answers
                        key={key}
                        name="thequiz_Answer"
                        attribute={QuestionsAndAnswer[7].ability}
                        answer={
                          QuestionsAndAnswer[7].QuestionSet[index].answers[next]
                            .answer
                        }
                        value={
                          QuestionsAndAnswer[7].QuestionSet[index].answers[next]
                            .value
                        }
                      />
                    );
                  })}
                </div>
              </Card>
              <Card id="thequiz__Card">
                <Question
                  key={506}
                  name="thequiz__Question"
                  question={QuestionsAndAnswer[8].QuestionSet[index].question}
                />
                <div className="thequiz__AContainer">
                  {ansIndex2.map((next, key) => {
                    return (
                      <Answers
                        key={key}
                        name="thequiz_Answer"
                        attribute={QuestionsAndAnswer[8].ability}
                        answer={
                          QuestionsAndAnswer[8].QuestionSet[index].answers[next]
                            .answer
                        }
                        value={
                          QuestionsAndAnswer[8].QuestionSet[index].answers[next]
                            .value
                        }
                      />
                    );
                  })}
                </div>
              </Card>
              <Card id="thequiz__Card">
                <Question
                  key={508}
                  name="thequiz__Question"
                  question={QuestionsAndAnswer[9].QuestionSet[index].question}
                />
                <div className="thequiz__AContainer">
                  {ansIndex2.map((next, key) => {
                    return (
                      <Answers
                        key={key}
                        name="thequiz_Answer"
                        attribute={QuestionsAndAnswer[9].ability}
                        answer={
                          QuestionsAndAnswer[9].QuestionSet[index].answers[next]
                            .answer
                        }
                        value={
                          QuestionsAndAnswer[9].QuestionSet[index].answers[next]
                            .value
                        }
                      />
                    );
                  })}
                </div>
              </Card>
            </div>
          );
        })}
        <Button id="thequiz__Button" onClick={() => passResults(finalScoreSet)}>
          Submit
        </Button>
      </div>
      {show ? <GetRace /> : null}
    </div>
  );
};

export { endPath };
export default TheQuiz;
