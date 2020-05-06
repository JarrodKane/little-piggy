import React from "react";
import styled from "styled-components";

// Using this function to import all of the dice images at once
function importAllDice(r) {
  return r.keys().map(r);
}
// The array that is returned is 0 based while the images are from 1 - 6
// That's why there's a -1 to the image src
// Sets the file path for the dice images, and runs the function
const die = importAllDice(
  require.context("./assets", false, /\.(png|jpe?g|svg)$/)
);

// -- STYLYING for the dice
const Image = styled.img`
  max-width: 30vh;
  border-radius: 10%;
`;

// Die takes in a die number that is generated and then places that into the src, to grab out the correct die to display
const Die = ({ num, gamePlaying }) => {
  // If game is not in play, we don't display the die
  return gamePlaying.playing ? (
    <div>
      <Image src={die[num - 1]} className="dice" alt="dice" />
    </div>
  ) : (
    <div></div>
  );
};

export default Die;
//<img src="./assets/1.svg" className="dice" alt="dice" />;
