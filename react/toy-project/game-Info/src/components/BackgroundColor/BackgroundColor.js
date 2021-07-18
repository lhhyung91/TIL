import React from "react";
import styled from "styled-components";

const StyledBackGroundImage = styled.div`
  background: ${(props) => props.background};
  height: 100vh;
  width: 100vw;
`;

export default function BackgroundColor({ props, colorNumber, children }) {
  return (
    <>
      <StyledBackGroundImage background={colorNumber}>
        {children}
      </StyledBackGroundImage>
    </>
  );
}
