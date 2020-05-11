import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Button = styled(motion.button)`
  height: 3em;
  margin: 0.5em;
  background-color: white;
  border: 2px solid;
  font-weight: bold;
`;

const RollBtn = (props) => {
  const { btnAction, isGameWon, name } = props;

  return (
    <Button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={btnAction}
      disabled={isGameWon}
    >
      {name}
    </Button>
  );
};

export default RollBtn;
