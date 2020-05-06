import React, { useState } from "react";
import Die from "./Die";

//init function to set the game back to its initial state
// TODO: allow it to take in a variable to set the number you wish to hit to win the game

// This function sets up the basic game
function Board() {
  //Using hooks to manage the state
  const [player1, setCountP1] = useState(0);
  const [player2, setCountP2] = useState(0);
  const [active, setActive] = useState(1);
  const [round, setRound] = useState(0);
  const [score, setScore] = useState({ total: [0, 0] });
  const [dice, setDice] = useState(1);
  const [game, setGame] = useState({ playing: true, won: false });
  // The game is only ever set to False for playing when the game starts, after that dice are shown

  // This is the button that rolls a dice, it selects a number between 1-6
  // That's then passed into the dice image, and added to the state
  // TODO - Pass this btnRoll to the Button component
  const btnRoll = () => {
    const diceNum = Math.round(Math.random() * 5 + 1);
    setDice(diceNum);
  };

  const btnHold = () => {
    console.log("Yay");
  };

  // used to resrt the game back to 0
  // TODO - should use this to set all the state so it's not all repeated
  const init = () => {
    setCountP1(0);
    setCountP2(0);
    setActive(1);
    setRound(0);
    setScore({ total: [0, 0] });
    setDice(1);
  };

  return (
    <div>
      <h1>Little Piggy</h1>
      <button onClick={btnRoll}> Button</button>
      <Die num={dice} />
    </div>
  );
}

export default Board;
