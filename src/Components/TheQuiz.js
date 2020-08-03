import React from "react";
import Question from "./Question";
import QuestionsAndAnswer from "../QuestionsAndAnswerBank";
import finalScoreSet from "./Answers";
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
    console.log("these are the scores,", score)

    Object.values(score).forEach(value => {
      console.log("these are the values,", value)
      //compare with the last to see which is the highest and if they're all even assign half elf or human
    })
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
              ansIndex1.map(ans => {
                return (
                  <Answers
                    value={QuestionsAndAnswer[2].Response[ans].value}
                    attribute={QuestionsAndAnswer[2].Response[ans].ability}
                    key={key+40}
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
                  key={key+50}
                  name="thequiz__Answer"
                  answer={QuestionsAndAnswer[3].Response[0].answer}
                />
                <Answers
                  value={QuestionsAndAnswer[3].Response[1].value}
                  attribute={QuestionsAndAnswer[3].Response[1].ability}
                  key={key+60}
                  name="thequiz__Answer"
                  answer={QuestionsAndAnswer[3].Response[1].answer}
                />
                <Answers
                  value={QuestionsAndAnswer[3].Response[2].value}
                  attribute={QuestionsAndAnswer[3].Response[2].ability}
                  key={key+70}
                  name="thequiz__Answer"
                  answer={QuestionsAndAnswer[3].Response[2].answer}
                />
                <Answers
                  value={QuestionsAndAnswer[3].Response[3].value}
                  attribute={QuestionsAndAnswer[3].Response[3].ability}
                  key={key+80}
                  name="thequiz__Answer"
                  answer={QuestionsAndAnswer[3].Response[3].answer}
                />
              </div>
            ) : index === 4 ? (
              ansIndex1.map((ans) => {
                return (
                  <div>
                    <Answers
                      value={QuestionsAndAnswer[4].Response[ans].value}
                      attribute={QuestionsAndAnswer[4].Response[ans].ability}
                      key={key+90}
                      name="thequiz__Answer"
                      answer={QuestionsAndAnswer[4].Response[ans].answer}
                    />
                  </div>
                );
              })
            ) : (
              console.log("you're done!")
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
