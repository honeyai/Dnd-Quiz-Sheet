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
        question: "When it comes to sprinting...",
        answers: [
          {
            answer: "I am slower than most people I know.",
            value: -1,
          },
          {
            answer: "I am neither slow nor fast compared to the people I know.",
            value: 0,
          },
          {
            answer: "I am faster than most people I know.",
            value: 1,
          },
          {
            answer: "I am faster than everyone else.",
            value: 2,
          },
        ]
      },
      {
        question: "When it comes to hand-eye coordination...",
        answers: [
          {
            answer: "I'm horrible at video games.",
            value: -1,
          },
          {
            answer: "I could be an Olympic marksman.",
            value: 2,
          },
          {
            answer: "I'm about average.",
            value: 0,
          },
          {
            answer: "I can juggle well.",
            value: 1,
          },
        ]
      },
      {
        question: "When it comes to reflexes...",
        answers: [
          {
            answer: "My reflexes have saved my life on more than one occasion.",
            value: 2,
          },
          {
            answer: "I am extremely quick.",
            value: 1,
          },
          {
            answer: "I've never noticed whether I'm fast or slow.",
            value: 0,
          },
          {
            answer: "I am extremely slow.",
            value: -1,
          },
        ]
      },
      {
        question: "When it comes to sneaking about…",
        answers: [
          {
            answer: "I’m immediately spotted",
            value: -1,
          },
          {
            answer: "I can get on decently unnoticed",
            value: 0,
          },
          {
            answer: "I’m a shadow",
            value: 1,
          },
          {
            answer: "I’m seen only when I wish it",
            value: 2,
          },
        ]
      },
    ]
  },
  {
    ability: "constitution",
    QuestionSet: [
      {
        question: "How tough are you?",
        answers: [
          {
            answer: "I can take punches that would drop normal people.",
            value: 1,
          },
          {
            answer: "I've taken massive blows and kept on fighting.",
            value: 2,
          },
          {
            answer: "I'm not fragile.",
            value: 0,
          },
          {
            answer: "When people jokingly hit me, they hurt me.",
            value: -1,
          },
        ]
      },
      {
        question: "The following statement most accurately describes my tolerance for alcohol:",
        answers: [
          {
            answer: "I can drink all night and I never get drunk.",
            value: 1,
          },
          {
            answer: "I have a hard time getting drunk when I drink. I never have a hangover.",
            value: 2,
          },
          {
            answer: "I have a normal tolerance for alcohol. Sometimes I have hangovers from drinking.",
            value: 0,
          },
          {
            answer: "I become drunk even when I consume small amounts of alcohol. My hangovers are horrible.",
            value: -1,
          },
        ]
      },
      {
        question: "The following statement most accurately describes my health.",
        answers: [
          {
            answer: "I am sick most of the time.",
            value: -1,
          },
          {
            answer: "I seem to get sick as often as most people I know.",
            value: 0,
          },
          {
            answer: "I have never missed a day of work due to illness.",
            value: 1,
          },
          {
            answer: "I can't remember ever being sick.",
            value: 2,
          },
        ]
      },
      {
        question: "When it comes to stamina...",
        answers: [
          {
            answer: "I am able to exercise with no ill effects.",
            value: 0,
          },
          {
            answer: "I have a hard time running.",
            value: -1,
          },
          {
            answer: "I regularly exert myself physically, and enjoy doing so.",
            value: 2,
          },
          {
            answer: "I physically exert myself all day long on a regular basis.",
            value: 1,
          },
        ]
      },
    ]
  },
  {
    ability: "intelligence",
    QuestionSet: [
      {
        question: "Rate your learning ability:",
        answers: [
          {
            answer: "I can learn new things very quickly.",
            value: 1,
          },
          {
            answer: "I learn as fast as everyone else it seems.",
            value: 0,
          },
          {
            answer: "I'm constantly learning new subjects at an astounding rate.",
            value: 2,
          },
          {
            answer: "I have a hard time learning new things.",
            value: -1,
          },
        ]
      },
      {
        question: "When it comes to my problem-solving ability...",
        answers: [
          {
            answer: "I am sometimes able to figure out a solution for a problem.",
            value: -1,
          },
          {
            answer: "I think I'm pretty good at solving problems and organizing information.",
            value: 0,
          },
          {
            answer: "I can easily find solutions to complex problems.",
            value: 1,
          },
          {
            answer: "My critical thinking skills are absolutely flawless",
            value: 2,
          },
        ]
      },
      {
        question: "This statement accurately describes me:",
        answers: [
          {
            answer: "I had the highest GPA in my class.",
            value: 2,
          },
          {
            answer: "I was a good student. I consistently made the A/B Honor Roll.",
            value: 1,
          },
          {
            answer: "I was an average student. I had decent grades.",
            value: 0,
          },
          {
            answer: "I was a bad student. I had a hard time keeping up.",
            value: -1,
          },
        ]
      },
      {
        question: "When it comes to memory…",
        answers: [
          {
            answer: "I have a really hard time remembering things.",
            value: -1,
          },
          {
            answer: "I remember most things though subtle details sometimes elude me.",
            value: 0,
          },
          {
            answer: "I remember just about everything I'm exposed to.",
            value: 1,
          },
          {
            answer: "I have a photographic memory and I always remember every detail.",
            value: 2,
          },
        ]
      },
    ]
  },
  {
    ability: "charisma",
    QuestionSet: [
      {
        question: "When it comes to leadership...",
        answers: [
          {
            answer: "I've never been in a leadership position.",
            value: -1,
          },
          {
            answer: "I perform adequately when I'm the leader.",
            value: 0,
          },
          {
            answer: "People look to me for direction instinctively.",
            value: 1,
          },
          {
            answer: "People go out of their way to put me in leadership positions.",
            value: 2,
          },
        ]
      },
      {
        question: "The following statement most accurately describes me.",
        answers: [
          {
            answer: "I have an extremely difficult time making new friends.",
            value: -1,
          },
          {
            answer: "I make friends fairly easily and engage in small talk with new ",
            value: 0,
          },
          {
            answer: "After meeting me, people go out of their way to keep in touch with me.",
            value: 2,
          },
          {
            answer: "I make new friends everywhere I go.",
            value: 1,
          },
        ]
      },
      {
        question: "Rate your persuasiveness.",
        answers: [
          {
            answer: "I can make people do almost anything I want them to do.",
            value: 2,
          },
          {
            answer: "I have an easy time convincing others to see things my way.",
            value: 1,
          },
          {
            answer: "I convince others to do things my way some of the time.",
            value: 0,
          },
          {
            answer: "I have a hard time convincing others to do what I want them to do.",
            value: -1,
          },
        ]
      },
      {
        question: "When you’re in a bar you are the person who…",
        answers: [
          {
            answer: "The bar cheers at my arrival",
            value: 2,
          },
          {
            answer: "Talks themselves into free drinks",
            value: 1,
          },
          {
            answer: "comes in just to have a drink with friends",
            value: 0,
          },
          {
            answer: "People steer clear when I approach them",
            value: -1,
          },
        ]
      },
    ]
  },
]

export default QuestionAndAnswers