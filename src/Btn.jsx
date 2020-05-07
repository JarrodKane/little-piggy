import React from "react";

const RollBtn = (props) => {
  const { btnAction, isGameWon, name } = props;

  //TODO - Animate hover on button
  //TODO - Animate clicking button
  // TODO - Put pause between how quickly someone can press the button
  return (
    <button onClick={btnAction} disabled={isGameWon}>
      {name}
    </button>
  );
};

export default RollBtn;
