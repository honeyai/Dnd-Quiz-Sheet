import React from "react";
import "../Styles/answers.css"

let finalScoreSet ;

finalScoreSet = {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    charisma: 0,
  };

const Answers = ({ answer, value, attribute }) => {
  
  const handleClick = (event) => {
    // console.log("this is hopefully attribute,", event.target.dataset.attribute);
    event.preventDefault();
    switch (event.target.dataset.attribute) {
      case "strength":
        finalScoreSet.strength += +event.target.value;
        break;
      case "dexterity":
        finalScoreSet.dexterity += +event.target.value;

        break;
      case "constitution":
        finalScoreSet.constitution += +event.target.value;
        break;
      case "intelligence":
        finalScoreSet.intelligence += +event.target.value;
        break;
      case "charisma":
        finalScoreSet.charisma += +event.target.value;
        break;
      case "strength,dexterity":
        finalScoreSet.strength += +event.target.value;
        finalScoreSet.dexterity += +event.target.value;
        break;
      default:
        console.log("no choices have been made");
    }
  };
  
  return (
    <div>
      <button
        onClick={(event) => handleClick(event)}
        value={value}
        data-attribute={attribute}
        className="answers__button"
      >
        {answer}
      </button>
    </div>
  );
};

export {finalScoreSet};
  
export default Answers;
