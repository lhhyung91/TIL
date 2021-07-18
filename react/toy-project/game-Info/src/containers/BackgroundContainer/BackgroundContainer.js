import BackgroundColor from "components/BackgroundColor/BackgroundColor";
import Button from "components/Button/Button";
import React, { useState } from "react";
import styled from "styled-components";

const StyledBackGroundContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;

  button {
    background-color: yellow;
    position: absolute;
    right: 50%;
    bottom: 50%;
  }
`;

export default function BackgroundContainer({ children }) {
  const [colorNumber, setColorNumber] = useState(0);

  // const randomColor = () => {
  //   setColorNumber("#" + Math.floor(Math.random() * 16777215).toString(16));
  //   // return "#" + Math.floor(Math.random() * 16777215).toString(16);
  // };

  const getRandomColor = (e) => {
    setColorNumber("#" + Math.floor(Math.random() * 16777215).toString(16));
    console.log(colorNumber);
  };
  return (
    <StyledBackGroundContainer>
      <BackgroundColor colorNumber={colorNumber}></BackgroundColor>
      <Button getRandomColor={getRandomColor}>색상 변경</Button>
    </StyledBackGroundContainer>
  );
}
