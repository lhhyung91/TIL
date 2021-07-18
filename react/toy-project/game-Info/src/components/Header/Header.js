import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  height: 100px;
  width: 100vw;
  border-bottom: 1px solid black;
  /* background-color: yellowgreen; */
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 100px;
`;

export default function Header({ chiled }) {
  return (
    <StyledHeader>
      <h1>{chiled}</h1>
    </StyledHeader>
  );
}
