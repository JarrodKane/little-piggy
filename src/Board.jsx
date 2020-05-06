import React, { useState, useEffect } from "react";
import Die from "./Die";
import styled from "styled-components";

const GameBoard = styled.div`
  display: flex;
  width: 80vw;
  height: 80%;
  text-align: center;
  margin: auto;
  background: radial-gradient(
    circle,
    rgba(224, 235, 241, 0.8) 0%,
    rgba(170, 255, 218, 0.2) 60%
  );
  border-radius: 25px;
  padding: 5rm;
`;

const Sides = styled.div`
  background: rgba(41, 159, 238, 0.1);
  width: 50%;
  z-index: 2;
`;
const MainContent = styled.div`
  z-index: 1;
`;

// This function sets up the basic game
function Board() {
  //Using hooks to manage the state
  const [active, setActive] = useState(1);
  const [round, setRound] = useState(0);
  const [scoreWin, setScoreWin] = useState(10);
  const [score, setScore] = useState([0, 0]);
  const [dice, setDice] = useState(1);
  const [game, setGame] = useState(false);
  const [win, setWin] = useState(false);

  // The game is only ever set to False for playing when the game starts, after that dice are shown

  // This is the button that rolls a dice, it selects a number between 1-6
  // That's then passed into the dice image, and added to the state
  // TODO - Pass this btnRoll to the Button component
  const btnRoll = () => {
    if (game === false) {
      setGame({ playing: true });
    }
    const diceNum = Math.round(Math.random() * 5 + 1);
    setDice(diceNum);
    setRound(round + diceNum);
  };

  // Checks if either player has hit the score limit yet
  // Runs each time the score state is updated
  useEffect(() => {
    if (score[0] >= scoreWin) {
      setWin(true);
      console.log("Playre 1 wins");
    } else if (score[1] >= scoreWin) {
      setWin(true);
      console.log("Playre 2 wins");
    }
  }, [score, scoreWin]);

  const btnHold = () => {
    if (active === 1) {
      setScore([score[0] + round, score[1]]);
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
    <GameBoard>
      <MainContent>
        <h1>Little Piggy</h1>
        <button onClick={btnRoll}> Roll</button>
        <button onClick={btnHold}> Hold</button>
      </MainContent>

      <Die num={dice} gamePlaying={game} />
      <h2>{round}</h2>
      <Sides>
        <h2>Player 1: {score[0]}</h2>
      </Sides>
      <Sides>
        <h2>Player 2: {score[1]}</h2>
      </Sides>
    </GameBoard>
  );
}

export default Board;
