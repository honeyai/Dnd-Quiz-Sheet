import React from 'react';
import Question from './Question';
import Answers from './Answers';

const QuestionAndAnswers = [
  {
    Question: "You’re contracted to settle a debt. How do you complete the contract?",
    Response: [
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
  },
  {
    Question: "At the start of a quest, what weapon/magical implement would you choose?",
    Response: [
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
  },
  {
    Question: "How would you describe yourself?",
    Response: [
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
  },
  {
    Question: "A battle breaks out! How do you approach the situation?",
    Response: [
      {
        ability: ["strength", "dexterity"],
        answer: "I rush in!"
      },
      {
        ability: "dexterity",
        answer: "I sneak up to my enemies"
      },
      {
        ability: "intelligence",
        answer: "I access the situation before I attack"
      },
      {
        ability: "charisma",
        answer: "I support from afar, distracting them with quips!"
      },
    ]
  },
  {
    Question: "Do you ever feel like breaking things?",
    Response: [
      {
        ability: "strength",
        answer: "Always, there isn’t anything I don’t break"
      },
      {
        ability: "dexterity",
        answer: "Why break things when you can break in?"
      },
      {
        ability: "constitution",
        answer: "I don’t break them, they break against me"
      },
      {
        ability: "intelligence",
        answer: "Only if I have a reason to break it, and it’ll will break most efficiently"
      },
      {
        ability: "charisma",
        answer: "I don’t ever have to lift a finger, someone else will break it for me"
      },
    ]
  },
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