import React from "react";
import styled from "styled-components";
import Board from "./Board";

//Styled CSS for background
const BackgroundLook = styled.div`
  height: 100vh;
  text-align: center;
  background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
  display: flex;
`;

function App() {
  return (
    <BackgroundLook className="App">
      <Board />
    </BackgroundLook>
  );
}

export default App;

//Old header css
/*
const HeaderBasic = styled.div`
  background-color: #282c34;
  min-height: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
*/
