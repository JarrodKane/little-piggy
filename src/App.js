import React from "react";
import styled from "styled-components";
import Board from "./Board";
import FinshModal from "./FinishModal";

//Styled CSS for background
const BackgroundLook = styled.div`
  height: 100vh;
  text-align: center;
  background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
  display: flex;
`;

function App() {
  return (
    <BackgroundLook>
      <Board />
    </BackgroundLook>
  );
}

export default App;
