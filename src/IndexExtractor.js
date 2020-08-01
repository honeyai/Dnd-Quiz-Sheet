import QuestionsAndAnswer from './QuestionsAndAnswerBank';

const index = [];

QuestionsAndAnswer.forEach(question => {
  index.push(QuestionsAndAnswer.indexOf(question))
})

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

const questionSetIndex = [];

index.map(index => {
  if (index > 5) {
    QuestionsAndAnswer[index].QuestionSet.forEach(question => {
      if (questionSetIndex.length-1 < 4){
        questionSetIndex.push(QuestionsAndAnswer[index].QuestionSet.indexOf(question))
      }
    })
  }
})


shuffleArray(index)
shuffleArray(questionSetIndex)


const ansIndex1 = [];
const ansIndex2 = [];

index.map(index => {
  // console.log(index)
  if(index < 5) {
    // console.log( "this is the type,", typeof QuestionsAndAnswer[index].Response[index2])
    QuestionsAndAnswer[index].Response.forEach(object => {
      if (ansIndex1.length < 5) {
        ansIndex1.push(QuestionsAndAnswer[index].Response.indexOf(object))
      }
    })
  } else if (index >= 5){
    QuestionsAndAnswer[index].QuestionSet.forEach(object => {
      if (ansIndex2.length <= 5) {
        ansIndex2.push(QuestionsAndAnswer[index].QuestionSet.indexOf(object))
      }
    })
  }
});

shuffleArray(ansIndex1);
shuffleArray(ansIndex2);

// console.log("this is ansIndex1,", ansIndex1);
// console.log("this is ansIndex2,", ansIndex2);

// console.log("this is questionSetIndex,", questionSetIndex)



export {
  index, 
  questionSetIndex,
  ansIndex1,
  ansIndex2};
