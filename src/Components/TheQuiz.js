import React from 'react';
import Question from './Question';
import Answers from './Answers';

const QuestionAndAnswers = [
  {
    Question: "You’re contracted to settle a debt. How do you complete the contract?",
    Response: [
      {
        ability: "strength",
        answer: "What else is a battle-axe good for?",
        value: 1,
      },
      {
        ability: "dexterity",
        answer: "They’ll cease to be a problem long before they even see you",
        value: 1,
      },
      {
        ability: "constitution",
        answer: "Fist-a-cuffs you’ll batter the debt until it’s settled",
        value: 1,
      },
      {
        ability: "intelligence",
        answer: "A plan as already been set in motion, by the end of the day they’ll pay back the debt.",
        value: 1,
      },
      {
        ability: "charisma",
        answer: "You’re a silver tongue, you’ll get what’s owed twice over.",
        value: 1,
      },
    ],
  },
  {
    Question: "At the start of a quest, what weapon/magical implement would you choose?",
    Response: [
      {
        ability: "strength",
        answer: "A Warhammer",
        value: 1,
      },
      {
        ability: "dexterity",
        answer: "Bow and arrows",
        value: 1,
      },
      {
        ability: "constitution",
        answer: "I am a weapon",
        value: 1,
      },
      {
        ability: "intelligence",
        answer: "A spell book",
        value: 1,
      },
      {
        ability: "charisma",
        answer: "My words are daggers",
        value: 1,
      },
    ],
  },
  {
    Question: "How would you describe yourself?",
    Response: [
      {
        ability: "strength",
        answer: "Athletic",
        value: 1,
      },
      {
        ability: "dexterity",
        answer: "Nimble",
        value: 1,
      },
      {
        ability: "constitution",
        answer: "Tenacious",
        value: 1,
      },
      {
        ability: "intelligence",
        answer: "Curious",
        value: 1,
      },
      {
        ability: "charisma",
        answer: "Smooth",
        value: 1,
      },
    ],
  },
  {
    Question: "A battle breaks out! How do you approach the situation?",
    Response: [
      {
        ability: ["strength", "dexterity"],
        answer: "I rush in!",
        value: 1,
      },
      {
        ability: "dexterity",
        answer: "I sneak up to my enemies",
        value: 1,
      },
      {
        ability: "intelligence",
        answer: "I access the situation before I attack",
        value: 1,
      },
      {
        ability: "charisma",
        answer: "I support from afar, distracting them with quips!",
        value: 1,
      },
    ]
  },
  {
    Question: "Do you ever feel like breaking things?",
    Response: [
      {
        ability: "strength",
        answer: "Always, there isn’t anything I don’t break",
        value: 1,
      },
      {
        ability: "dexterity",
        answer: "Why break things when you can break in?",
        value: 1,
      },
      {
        ability: "constitution",
        answer: "I don’t break them, they break against me",
        value: 1,
      },
      {
        ability: "intelligence",
        answer: "Only if I have a reason to break it, and it’ll will break most efficiently",
        value: 1,
      },
      {
        ability: "charisma",
        answer: "I don’t ever have to lift a finger, someone else will break it for me",
        value: 1,
      },
    ]
  },
  {
    ability: "strength",
    QuestionSet: [
      {
        question: "My body...",
        answers: [
          {
            answer: "is in pretty good shape, given my age.",
            value: 1,
          },
          {
            answer: "is on par with most professional athletes.",
            value: 2,
          },
          {
            answer: "is in superb shape.",
            value: 3,
          },
          {
            answer: "is out of shape, when compared to almost everyone else.",
            value: 0,
          },
        ]
      },
      {
        question: "I can lift...",
        answers: [
          {
            answer: "about as much as a person of my gender and age should be able to lift.",
            value: 0,
          },
          {
            answer: "a lot less than I should be able to lift. I am weak",
            value: -1,
          },
          {
            answer: "noticeably more than most people I know. I am strong.",
            value: 1,
          },
          {
            answer: "an astounding amount of weight. I engage in extensive weight training.",
            value: 2,
          },
        ]
      },
      {
        question: "The following statement describes the amount of physical labor I regularly perform:",
        answers: [
          {
            answer: "I engage in difficult physical labor all during the week.",
            value: 2,
          },
          {
            answer: "My job involves physical labor or I have an intensive work-out schedule.",
            value: 3,
          },
          {
            answer: "My job does not involve much physical labor, but I get enough exercise.",
            value: 1,
          },
          {
            answer: "Very little, I have a sedentary job and I do not work out.",
            value: 0,
          },
        ]
      },
      {
        question: "The following statement most accurately describes my athletic ability.",
        answers: [
          {
            answer: "I was picked to play for a professional sports team.",
            value: 2,
          },
          {
            answer: "When being picked for a team, I am always picked first when others know of my ability.",
            value: 1,
          },
          {
            answer: "I have some athletic ability, but it isn't noteworthy.",
            value: 0,
          },
          {
            answer: "When being picked for a team, I am always picked last when others know of my ability.",
            value: -1,
          },
        ]
      },
    ]
  },
  {
    ability: "dexterity",
    QuestionSet: [
      {
        question: "",
        answers: [
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
        ]
      },
      {
        question: "",
        answers: [
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
        ]
      },
      {
        question: "",
        answers: [
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
        ]
      },
      {
        question: "",
        answers: [
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
        ]
      },
    ]
  },
  {
    ability: "",
    QuestionSet: [
      {
        question: "",
        answers: [
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
        ]
      },
      {
        question: "",
        answers: [
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
        ]
      },
      {
        question: "",
        answers: [
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
        ]
      },
      {
        question: "",
        answers: [
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
        ]
      },
    ]
  },
  {
    ability: "",
    QuestionSet: [
      {
        question: "",
        answers: [
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
        ]
      },
      {
        question: "",
        answers: [
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
        ]
      },
      {
        question: "",
        answers: [
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
        ]
      },
      {
        question: "",
        answers: [
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
        ]
      },
    ]
  },
  {
    ability: "",
    QuestionSet: [
      {
        question: "",
        answers: [
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
        ]
      },
      {
        question: "",
        answers: [
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
        ]
      },
      {
        question: "",
        answers: [
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
        ]
      },
      {
        question: "",
        answers: [
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
          {
            answer: "",
            value: num,
          },
        ]
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