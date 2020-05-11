import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Button = styled(motion.button)`
  font-size: 1em;
  margin: 1em;
  padding: 1em 0.5em 1em;
  background-color: white;
  border: 2px solid;
  font-weight: bold;
  text-align: center;
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
