import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

//TODO: Make modal centerd
const Finish = styled(motion.div)`
  position: fixed;
  top: 15%;
  left: 35%;
  transform: "translate3d(-50%, 0, 0)";
  background-color: black;
  border-radius: 15px;
  padding: 100px;
  color: white;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.4);
`;
//TODO: Have displayed over the entire window so they can only click the modal
// TODO: Add in the start new game button
//TODO : Show who won and their score
const FinishModal = ({ win, startGame }) => {
  return (
    <AnimatePresence>
      {win && (
        <Finish
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Game over</h1>
        </Finish>
      )}
    </AnimatePresence>
  );
};

export default FinishModal;
