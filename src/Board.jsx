import React, { useState, useEffect } from "react";
import Die from "./Die";
import styled from "styled-components";
import RollBtn from "./RollBtn";

const ContentDisp = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  text-align: center;
  margin: auto;
`;

const Side = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: auto;
`;

const DiceImage = styled.div`
  height: 20vw;
  margin-top: 50%;
`;

// This function sets up the basic game
function Board() {
  //Using hooks to manage the state
  const [active, setActive] = useState(1);
  const [round, setRound] = useState(0);
  const [scoreWin, setScoreWin] = useState(100);
  const [score, setScore] = useState([0, 0]);
  const [dice, setDice] = useState(1);
  const [game, setGame] = useState(false);
  const [win, setWin] = useState([0, 0]);

  // Simple change of colors if win is hit by either the player 1 or player 2
  // TODO - Invistigate less messy way of handling this, toggling on classes instead?
  const GameBoard = styled.div`
    background: ${() => {
      if (win[0] === 1 || win[1] === 1) {
        return `linear-gradient(90deg, #f8ff00 0%, #3ad59f 100%);`;
      } else {
        return `radial-gradient(
          circle,
          rgba(224, 235, 241, 0.8) 0%,
          rgba(170, 255, 218, 0.2) 60%
        )`;
      }
    }};
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 80vw;
    height: 80%;
    text-align: center;
    margin: auto;
    border-radius: 25px;
    padding: 5rm;
    border-radius: 25px;
  `;

  // The game is only ever set to False for playing when the game starts, after that dice are shown

  // This is the button that rolls a dice, it selects a number between 1-6
  // That's then passed into the dice image, and added to the state
  // TODO - Pass this btnRoll to the Button component
  const btnRoll = () => {
    const diceNum = Math.round(Math.random() * 5 + 1);
    setDice(diceNum);
    console.log(diceNum);
    if (diceNum === 1) {
      console.log("Hit a 1 now swapping player");
      // If a 1 is rolled it sets the active player to the other player
      //It also sets the round back to 0
      active === 1 ? setActive(2) : setActive(1);
      setRound(0);
    } else {
      setRound(round + diceNum);
    }
  };

  // Checks if either player has hit the score limit yet
  // Runs each time the score state is updated
  useEffect(() => {
    if (score[0] >= scoreWin) {
      setWin([1, 0]);
      console.log("Playre 1 wins");
      setGame(true);
    } else if (score[1] >= scoreWin) {
      setWin([0, 1]);
      console.log("Playre 2 wins");
      setGame(true);
    }
  }, [score, scoreWin]);
  // TODO - Pause the ability to cick roll or hold without clicking new game if the game is won

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
  const init = () => {
    setActive(1);
    setRound(0);
    setScore([0, 0]);
    setDice(1);
    setGame(false);
    setWin([0, 0]);
  };

  return (
    <GameBoard>
      <Side>
        {win[0] === 1 ? <h1>Winner</h1> : ""}
        <h2>Player 1</h2>
        <h1>{score[0]}</h1>
      </Side>
      <ContentDisp>
        <h1>Little Piggy</h1>
        <RollBtn rollOnClick={btnRoll} isGameWon={game} />
        <button onClick={btnHold}>Hold</button>
        <h2>{round}</h2>
        <button onClick={init}>New Game</button>
        <DiceImage>
          <Die num={dice} gamePlaying={game} />
        </DiceImage>
      </ContentDisp>

      <Side>
        {win[1] === 1 ? <h1>Winner</h1> : ""}
        <h2>Player 2</h2>
        <h1>{score[1]}</h1>
      </Side>
    </GameBoard>
  );
}

export default Board;
