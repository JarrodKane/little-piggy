import React, { useState } from "react";
import Die from "./Die";

//init function to set the game back to its initial state
// TODO: allow it to take in a variable to set the number you wish to hit to win the game

// This function sets up the basic game
function Board() {
  //Using hooks to manage the state
  const [active, setActive] = useState(1);
  const [round, setRound] = useState(0);
  const [score, setScore] = useState([0, 0]);
  const [dice, setDice] = useState(1);
  const [game, setGame] = useState({ playing: false, won: false });
  // The game is only ever set to False for playing when the game starts, after that dice are shown

  // This is the button that rolls a dice, it selects a number between 1-6
  // That's then passed into the dice image, and added to the state
  // TODO - Pass this btnRoll to the Button component
  const btnRoll = () => {
    if (game.playing === false) {
      setGame({ playing: true });
    }
    const diceNum = Math.round(Math.random() * 5 + 1);
    setDice(diceNum);
    setRound(round + diceNum);
  };

  const btnHold = () => {
    if (active === 1) {
      setScore([score[0] + round, score[1]]);
      //setScore(); // Adds in the round score to that players total
      setActive(2); // Sets the active to the other player
    } else if (active === 2) {
      setScore([score[0], score[1] + round]);
      setActive(1);
    }
    setRound(0);
  };

  // used to resrt the game back to 0
  // TODO - should use this to set all the state so it's not all repeated
  const init = () => {
    setActive(1);
    setRound(0);
    setScore({ total: [0, 0] });
    setDice(1);
  };

  return (
    <div>
      <h1>Little Piggy</h1>

      <button onClick={btnRoll}> Roll</button>
      <button onClick={btnHold}> Hold</button>
      <h2>{round}</h2>
      <h2>Player 1: {score[0]}</h2>
      <h2>Player 2: {score[1]}</h2>
      <Die num={dice} gamePlaying={game} />
    </div>
  );
}

export default Board;
