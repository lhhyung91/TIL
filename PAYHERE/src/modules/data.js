// 액션 타입 선언
// const GET_REPO = 'searchrepo/GET_REPO';
const SEARCH_REPO = 'data/SEARCH_REPO';
const BOOKMARKS = 'data/BOOKMARKS';
const DELETE_BOOKMARKS = 'data/DELETE_BOOKMARKS';

// dispatch 액션 생성 함수
export const search = data => ({
  type: SEARCH_REPO,
  data,
});

export const onBookmarks = bookmarksData => ({
  type: BOOKMARKS,
  bookmarksData,
});

export const deleteBookmarks = () => ({
  type: DELETE_BOOKMARKS,
});

// 초깃 값
const initialState = [];

// reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_REPO:
      return {
        ...state,
        data: action.data,
      };
    case BOOKMARKS:
      return {
        ...state,
        bookmarksData: action.bookmarksData,
        // bookmarksData: { ...{state.bookmarksData} }
        // ,...{action.bookmarksData}
      };
    case DELETE_BOOKMARKS:
      return {
        ...state,
        bookmarksData: null,
      };
    default:
      return state;
  }
}
