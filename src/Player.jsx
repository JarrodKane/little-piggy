import React from "react";
import styled from "styled-components";

const PlayerActive = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 30%;
  border-radius: 25px;
`;

const PlayerInactive = styled.div`
  background: rgba(100, 150, 100, 0.5);
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 30%;
  border-radius: 25px;
`;

const Player = (props) => {
  const { player, hasWon, score, active } = props;

  if (active === player) {
    return (
      <PlayerActive>
        <h2>Player: {player}</h2>
        <h1>{score}</h1>
      </PlayerActive>
    );
  } else {
    return (
      <PlayerInactive>
        <h2>Player: {player}</h2>
        <h1>{score}</h1>
      </PlayerInactive>
    );
  }
};

export default Player;
