import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

//TODO: Make modal centerd
const Finish = styled(motion.div)`
  width: 30%;
  height: 20%;
  position: absolute;
  left: 50%;
  top: 20%;
  margin-left: -150px;
  margin-top: -150px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 15px;
  color: white;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.4, 0.1);
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

/*
display: flex;
  justify-content: flex-start;
  flex-direction: column;
  text-align: center;
  margin: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: "translate3d(-50%, 0, 0)";
  background-color: black;
  border-radius: 15px;
  padding: 100px;
  color: white;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.4);
  */
