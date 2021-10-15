import React from 'react';
import BookmarksContainer from './containers/BookmarksContainer/BookmarksListContainer';
import { StyledSection } from './styles/StyledSection';

export default function BookMarkPage() {
  return (
    <>
      <StyledSection>
        <BookmarksContainer />
      </StyledSection>
    </>
  );
}
