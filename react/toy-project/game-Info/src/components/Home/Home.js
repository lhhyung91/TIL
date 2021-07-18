import Header from "components/Header/Header";
import HomeNav from "components/HomeNav/HomeNav";
import React from "react";
import styled from "styled-components";

const StyledHomePageWrapper = styled.div`
  max-width: 85vw;
  min-height: 100vh;
  position: relative;
`;

export default function Home() {
  return (
    <StyledHomePageWrapper>
      <Header>헤더 부분</Header>
      <HomeNav />
    </StyledHomePageWrapper>
  );
}
