import React from 'react';
import Question from './Question';
import Answers from './Answers';

const questionBank = [
  "You’re contracted to settle a debt. How do you complete the contract?",
  "At the start of a quest, what weapon/magical implement would you choose?",
  "How would you describe yourself?"
]

const index = [];

questionBank.forEach(question => {
  index.push(questionBank.indexOf(question))
})

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(index)

console.log("this be index", index)

const answers = {
  1: [
    {
      ability: "strength",
      answer: "What else is a battle-axe good for?"
    },
    {
      ability: "dexterity",
      answer: "They’ll cease to be a problem long before they even see you"
    },
    {
      ability: "constitution",
      answer: "Fist-a-cuffs you’ll batter the debt until it’s settled"
    },
    {
      ability: "intelligence",
      answer: "A plan as already been set in motion, by the end of the day they’ll pay back the debt."
    },
    {
      ability: "charisma",
      answer: "You’re a silver tongue, you’ll get what’s owed twice over."
    },
  ],
  2: [
    {
      ability: "strength",
      answer: "A Warhammer",
    },
    {
      ability: "dexterity",
      answer: "Bow and arrows",
    },
    {
      ability: "constitution",
      answer: "I am a weapon",
    },
    {
      ability: "intelligence",
      answer: "A spell book",
    },
    {
      ability: "charisma",
      answer: "My words are daggers",
    },
  ],
  3: [
    {
      ability: "strength",
      answer: "Athletic",
    },
    {
      ability: "dexterity",
      answer: "Nimble",
    },
    {
      ability: "constitution",
      answer: "Tenacious",
    },
    {
      ability: "intelligence",
      answer: "Curious",
    },
    {
      ability: "charisma",
      answer: "Smooth",
    },
  ],
}

const TheQuiz = () => {
  return (
    <div>
      {
        index.map((index, key) => {
          return(
          <Question key={key} name= "quiz__Question" question={questionBank[index]}/>
          )})
        }
        <Answers /> 
    </div>
  );
};

export default TheQuiz;