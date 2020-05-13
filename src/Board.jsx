import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Die from "./Die";
import styled from "styled-components";
import Player from "./Player";
import Btn from "./Btn";
import FinshModal from "./FinishModal";

const ContentDisp = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  text-align: center;
  margin: auto;
`;

// This function sets up the basic game
function Board(props) {
  //Using hooks to manage the state
  const [active, setActive] = useState(1);
  const [round, setRound] = useState(0);
  const [scoreWin, setScoreWin] = useState(100);
  const [score, setScore] = useState([0, 0]);
  const [dice, setDice] = useState(2);
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
    padding: 5rm;
    border-radius: 25px;
  `;

  // This is the button that rolls a dice, it selects a number between 1-6
  // That's then passed into the dice image, and added to the state
  const btnRoll = () => {
    const diceNum = Math.round(Math.random() * 2 + 1);
    setDice(diceNum);
    if (diceNum === 1) {
      // If a 1 is rolled it sets the active player to the other player
      //It also sets the round back to 0
      if (active === 1) {
        setActive(2);
      } else {
        setActive(1);
      }
      setRound(0);
    } else {
      setRound(round + diceNum);
    }
  };

  //TODO - have a pop up animation that says something dumb like "WOWZA HIT A 1"
  // When a 1 is hit

  // Checks if either player has hit the score limit yet
  // Runs each time the score state is updated
  useEffect(() => {
    if (score[0] >= scoreWin) {
      setWin([1, 0]);
      setGame(true);
    } else if (score[1] >= scoreWin) {
      setWin([0, 1]);
      setGame(true);
    }
  }, [score, scoreWin]);

  //Hold btn will take the current round score and add it to the players total
  // It'll then switch the player that is active
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

  // used to resrt the game
  const init = () => {
    setActive(1);
    setRound(0);
    setScore([0, 0]);
    setDice(3);
    setGame(false);
    setWin([0, 0]);
  };

  return (
    <AnimatePresence>
      {/*    <FinshModal win={game} /> */}
      <GameBoard>
        <Player player={1} hasWon={win[0]} score={score[0]} active={active} />
        <ContentDisp>
          <h1>Little Piggy</h1>
          <Btn btnAction={btnRoll} isGameWon={game} name={"Roll"} />
          <Btn btnAction={btnHold} isGameWon={game} name={"Hold"} />
          <h2>{round}</h2>
          <Btn btnAction={init} name={"New Game"} />
          <Die num={dice} gamePlaying={game} btnAction={btnRoll} />
        </ContentDisp>

        <Player player={2} hasWon={win[1]} score={score[1]} active={active} />
      </GameBoard>
    </AnimatePresence>
  );
}

export default Board;
