import React from "react";
import Question from "./Question";
import QuestionsAndAnswer from "../QuestionsAndAnswerBank";
import { finalScoreSet } from "./Answers";
import { Button } from "@material-ui/core";
import {
  index,
  questionSetIndex,
  ansIndex1,
  ansIndex2,
} from "../IndexExtractor";
import Answers from "./Answers";




const TheQuiz = () => {
  // console.log("altIndex!", questionSetIndex);
  // console.log("answer index1!", ansIndex1);
  // console.log("answer index2!", ansIndex2);
  // console.log("this index!", index);

  const passResults = score => {
    let scores = Object.values(score);

    let min = Math.min(...scores);

    let max = Math.max(...scores);
    
    const getAttribute = (object, value) => Object.keys(object).filter(key => object[key] === value);

    console.log(min, max); //if these have less than two of difference from each other max-min <= 2 take the max and find the attribute

    if(max - min <= 2) {
      console.log("they're going to get human or half elf")
    } else {
      console.log(getAttribute(score, max))
    }
  }

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
                  key={1}
                  name="thequiz__Answer"
                  answer={QuestionsAndAnswer[3].Response[0].answer}
                />
                <Answers
                  value={QuestionsAndAnswer[3].Response[1].value}
                  attribute={QuestionsAndAnswer[3].Response[1].ability}
                  key={2}
                  name="thequiz__Answer"
                  answer={QuestionsAndAnswer[3].Response[1].answer}
                />
                <Answers
                  value={QuestionsAndAnswer[3].Response[2].value}
                  attribute={QuestionsAndAnswer[3].Response[2].ability}
                  key={3}
                  name="thequiz__Answer"
                  answer={QuestionsAndAnswer[3].Response[2].answer}
                />
                <Answers
                  value={QuestionsAndAnswer[3].Response[3].value}
                  attribute={QuestionsAndAnswer[3].Response[3].ability}
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
                      value={QuestionsAndAnswer[4].Response[ans].value}
                      key={key}
                      attribute={QuestionsAndAnswer[4].Response[ans].ability}
                      name="thequiz__Answer"
                      answer={QuestionsAndAnswer[4].Response[ans].answer}
                    />
                  </div>
                );
              })
            ) : (
              null
              // console.log("you're done!")
            )}
          </div>
        );
      })}
      {questionSetIndex.map(index => {
        return (
          <div>
            <Question
              key={500}
              name="thequiz__Question"
              question={QuestionsAndAnswer[5].QuestionSet[index].question}
            />
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
            <Question
              key={502}
              name="thequiz__Question"
              question={QuestionsAndAnswer[6].QuestionSet[index].question}
            />
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
            <Question
              key={504}
              name="thequiz__Question"
              question={QuestionsAndAnswer[7].QuestionSet[index].question}
            />
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
            <Question
              key={506}
              name="thequiz__Question"
              question={QuestionsAndAnswer[8].QuestionSet[index].question}
            />
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
            <Question
              key={508}
              name="thequiz__Question"
              question={QuestionsAndAnswer[9].QuestionSet[index].question}
            />
            {ansIndex2.map((next,key) => {
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
        );
      })}
      <Button onClick={() => passResults(finalScoreSet)}> Submit </Button>
    </form>
  );
};

export default TheQuiz;
