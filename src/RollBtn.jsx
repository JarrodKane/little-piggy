import React from "react";

const RollBtn = (props) => {
  const { rollOnClick, isGameWon } = props;

  //TODO - Animate hover on button
  //TODO - Animate clicking button
  // TODO - Put pause between how quickly someone can press the button
  return (
    <button onClick={rollOnClick} disabled={isGameWon}>
      Roll
    </button>
  );
};

export default RollBtn;
