import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 100px;
  height: 100px;
`;

export default function Button({ children, getRandomColor }) {
  return <StyledButton onClick={getRandomColor}>{children}</StyledButton>;
}
