import React from 'react';
import styled from 'styled-components';
import { StyledSection } from '../../styles/StyledSection';

const StyledAImg = styled.img`
  display: inline-block;
  width: 100px;
  text-align: center;
`;

const StyledButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 0 5px 0 5px;
  border-left: 2px solid black;
  border-bottom: 2px solid black;
  font-size: 1.3rem;
  background-color: #fff;

  :hover {
    background-color: #d0d0d0;
  }
  :active {
    background-color: #a6a6a6;
  }
`;

const StyledRepoList = styled.li`
  position: relative;
  width: 300px;
  height: 250px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border: 2px solid black;
  border-radius: 5px;

  > span {
    margin: 1rem 0;
  }
`;

export default function BookmarksList({ onDeleteBookmarks, bookmark }) {
  return (
    <>
      {bookmark.map(repo => (
        <StyledRepoList key={repo.id} id={repo.id}>
          <StyledSection>
            <StyledAImg alt='no images' src={repo.owner.avatar_url} />
          </StyledSection>
          <span>Github ID: {repo.owner.login}</span>
          <span>ID 값: {repo.id}</span>
          <a href={repo.html_url}>RepoName: {repo.name}</a>
          <StyledButton onClick={onDeleteBookmarks}>X</StyledButton>
        </StyledRepoList>
      ))}
    </>
  );
}
