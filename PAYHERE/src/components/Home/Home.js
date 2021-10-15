import React from 'react';
import RepoListContainer from '../../containers/RepoListContainer/RepoListContainer.js';
import { StyledSection } from '../../styles/StyledSection';

export default function Home() {
  return (
    <>
      <StyledSection>
        <RepoListContainer />
      </StyledSection>
    </>
  );
}
