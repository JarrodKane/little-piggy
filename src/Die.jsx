import React from "react";

// Using this function to import all of the dice images at once
function importAllDice(r) {
  return r.keys().map(r);
}
// The array that is returned is 0 based while the images are from 1 - 6
// That's why there's a -1 to the image src

const die = importAllDice(
  require.context("./assets", false, /\.(png|jpe?g|svg)$/)
);
console.log(die);
// Sets the file path for the dice images, and runs the function

// Die takes in a die number that is generated and then places that into the src, to grab out the correct die to display
const Die = ({ num, gamePlaying }) => {
  console.log("the number is " + num);
  return (
    <div>
      <img src={die[num - 1]} className="dice" alt="dice" />;
    </div>
  );
};

export default Die;
//<img src="./assets/1.svg" className="dice" alt="dice" />;
