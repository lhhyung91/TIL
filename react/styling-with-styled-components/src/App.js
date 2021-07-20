import React from "react";
import styled from "styled-components";
import Button from "./components/Button";

const Appblock = styled.div`
  width: 521px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

function App() {
  return (
    <Appblock>
      <Button>BUTTON</Button>
    </Appblock>
  );
}

export default App;
