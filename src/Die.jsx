import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Using this function to import all of the dice images at once
function importAllDice(r) {
  return r.keys().map(r);
}
// The array that is returned is 0 based while the images are from 1 - 6
// That's why there's a -1 to the image src
// Sets the file path for the dice images, and runs the function
//TODO : Load all dice in as soon as application start to prevent animation issue
const die = importAllDice(
  require.context("./assets", false, /\.(png|jpe?g|svg)$/)
);

// -- STYLYING for the dice
const Image = styled(motion.img)`
  max-width: 30vh;
  border-radius: 10%;
  height: 20vw;
  margin-top: 50%;
`;
//
// This function returns either 180 or 360, to be used in the dice animation
// It's random to make it look more natural and add variation to the dice throw look
const getAngle = () => {
  const degreeArr = [180, 360, -180, -360];
  return degreeArr[Math.round(Math.random() * 3)];
};

// Die takes in a die number that is generated and then places that into the src, to grab out the correct die to display
const Die = ({ num, gamePlaying }) => {
  const angle1 = getAngle(),
    angle2 = getAngle();

  return (
    <Image
      animate={{ rotate: angle1, rotateX: angle2 }}
      transition={{ duration: 0.5 }}
      src={die[num - 1]}
      className="dice"
      alt="dice"
    />
  );
};

export default Die;
