import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
//Importing all the die images
import One from './assets/1.svg';
import Two from './assets/2.svg';
import Three from './assets/3.svg';
import Four from './assets/4.svg';
import Five from './assets/5.svg';
import Six from './assets/6.svg';

const die = {
  1: One,
  2: Two,
  3: Three,
  4: Four,
  5: Five,
  6: Six,
};

// -- STYLYING for the dice

const Image = styled(motion.img)`
  max-width: 30vh;
  border-radius: 10%;
  height: 20vw;
  pointer-events: none;
`;

const WrapperImage = styled(motion.div)`
  margin: 20px;
  margin-top: 40px;
  border-radius: 15px;
  color: white;
  h3 {
    margin-top: 0;
    font-size: 2rem;
  }
  img {
    width: 100%;
  }
`;

//
// This function returns either 180 or 360, to be used in the dice animation
// It's random to make it look more natural and add variation to the dice throw look
const getAngle = () => {
  const degreeArr = [180, 360, -180, -360];
  return degreeArr[Math.round(Math.random() * 3)];
};

// Die takes in a die number that is generated and then places that into the src, to grab out the correct die to display
// TODO - When letting go of the drag on the die, the animation should be smooth and not snap back when the function is run
const Die = ({ num, gamePlaying, btnAction }) => {
  const angle1 = getAngle(),
    angle2 = getAngle();

  return (
    <WrapperImage
      drag
      dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0 }}
      animate={{
        rotate: angle1,
        rotateX: angle2,
      }}
      transition={{ duration: 0.5 }}
      className='dice'
      alt='dice'
    >
      <Image src={die[num]} />
    </WrapperImage>
  );
};

export default Die;
