import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import RepoList from '../../components/RepoList/RepoList';
import { onBookmarks } from '../../modules/data';

const StyledRepoListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: left;
  width: 1000px;
`;

export default function RepoListContainer() {
  const repos = useSelector(state => state.data.data);
  const bookmarksData = useSelector(state => state.data.bookmarksData);

  const dispatch = useDispatch();

  const setBookmarks = e => {
    const repoId = parseInt(e.target.parentNode.id);

    dispatch(onBookmarks(repoId));
    localStorage.setItem('bookmarks', JSON.stringify(bookmarksData));
  };

  return (
    <StyledRepoListContainer>
      <RepoList repos={repos} setBookmarks={setBookmarks} />
    </StyledRepoListContainer>
  );
}
