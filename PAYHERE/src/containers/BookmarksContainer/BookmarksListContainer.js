import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import BookmarksList from '../../components/BookmarksList/BookmarksList';
import { deleteBookmarks } from '../../modules/data';
const StyledRepoListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: left;
  width: 1000px;
`;

export default function BookmarksContainer() {
  const dispatch = useDispatch();
  const repos = useSelector(state => state.data.data);
  const bookmarksData = useSelector(state => state.data.bookmarksData);

  const bookmark = bookmarksData ? repos.filter(repo => repo.id === bookmarksData) : null;

  const onDeleteBookmarks = () => {
    dispatch(deleteBookmarks());
  };

  useEffect(() => {
    JSON.parse(localStorage.getItem('bookmarksData'));
  }, []);

  return (
    <>
      {bookmarksData ? (
        <StyledRepoListContainer>
          <BookmarksList bookmark={bookmark} onDeleteBookmarks={onDeleteBookmarks} />
        </StyledRepoListContainer>
      ) : (
        <div>
          <p>등록된 레포가 없습니다.</p>
        </div>
      )}
    </>
  );
}
