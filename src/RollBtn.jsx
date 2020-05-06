import React from "react";

const RollBtn = (props) => {
  const { rollOnClick, isGameWon } = props;
  console.log(isGameWon);

  return (
    <button onClick={rollOnClick} disabled={isGameWon}>
      Roll
    </button>
  );
};

export default RollBtn;
