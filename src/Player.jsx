import React from "react";
import styled from "styled-components";

//TODO - Reduce these two styles so they are not both the same repeated code
const PlayerActive = styled.div`
  background: rgba(255, 255, 204, 0.5);
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 30%;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`;

const PlayerInactive = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 30%;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
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
