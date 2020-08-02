import React, { useState } from "react";
// import { Button}  from "@material-ui/core";

let finalScoreSet ;

const Answers = ({ answer, value, attribute }) => {
  let [strength, setStr] = useState(0);
  let [dexterity, setDex] = useState(0);
  let [constitution, setCon] = useState(0);
  let [intelligence, setInt] = useState(0);
  let [charisma, setCha] = useState(0);

  // console.log("this is the value added hopefully,", choice.strength += +event.target.value)
  
  const handleClick = (event) => {
    // finalScoreSet = {
    //   strength: strength,
    //   dexterity: dexterity,
    //   constitution: constitution,
    //   intelligence: intelligence,
    //   charisma: charisma,
    // }
    console.log("this is hopefully attribute,", event.target.dataset.attribute);
    event.preventDefault();
    switch (event.target.dataset.attribute) {
      case "strength":
        setStr(strength += +event.target.value);
        break;
      case "dexterity":
        setDex(dexterity += +event.target.value);
        break;
      case "constitution":
        setCon(constitution += +event.target.value);
        break;
      case "intelligence":
        setInt(intelligence += +event.target.value);
        break;
      case "charisma":
        setCha(charisma += +event.target.value);
        break;
      case "strength,dexterity":
        setStr(strength += +event.target.value)
        setDex(dexterity += +event.target.value)
      default:
        console.log("no choices have been made");
    }
    // finalScoreSet = {
    //   strength: strength,
    //   dexterity: dexterity,
    //   constitution: constitution,
    //   intelligence: intelligence,
    //   charisma: charisma,
    // }
  };
  console.log("hopefully, strength will update and not reset,", strength);
  console.log("hopefully, dexterity will update and not reset,", dexterity);
  console.log("hopefully, constitution will update and not reset,", constitution);
  console.log("hopefully,intelligence will update and not reset,",intelligence);
  console.log("hopefully, charisma will update and not reset,", charisma);
  
  return (
    <div>
      <button
        onClick={(event) => handleClick(event)}
        value={value}
        data-attribute={attribute}
      >
        {answer}
      </button>
    </div>
  );
};

export default ({ finalScoreSet }, Answers);
