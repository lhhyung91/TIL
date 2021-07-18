import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GiCardJoker } from "react-icons/gi";

const StyledHomeNav = styled.nav`
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100vw;
  border-bottom: 1px solid black;
`;

const StyledHomeListContainer = styled.ul`
  display: flex;
  text-align: center;
  justify-content: center;

  & li {
    margin: 0 10px;
    font-size: 3rem;
  }
`;

export default function HomeNav() {
  return (
    <StyledHomeNav>
      <StyledHomeListContainer>
        <li>
          <Link to="/about">대기 중</Link>
        </li>
        <li>
          <Link to="/cardimage">
            <GiCardJoker />
            카드 리스트
          </Link>
        </li>
        <li>
          <Link to="/">대기 중</Link>
        </li>
      </StyledHomeListContainer>
    </StyledHomeNav>
  );
}
