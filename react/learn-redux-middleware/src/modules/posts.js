// 요청 진행 중인 상태
// 요청 성공 시 데이터의 상태 관리
// 실패 시 에러의 상태 관리

import * as postAPI from "../api/posts";
import {
  createPromiseThunk,
  handleAsyncActions,
  reducerUtils,
} from "../lib/asyncUtils";

// 여러개 불러옴
// 특정 요청 시작을 알림
const GET_POSTS = "GET_POSTS";
// 요청이 성공 함
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
// 요청에 에러가 생김
const GET_POSTS_ERROR = "GET_POSTS_ERROR";

// 하나만 불러옴
// 특정 요청 시작을 알림
const GET_POST = "GET_POST";
// 요청이 성공 함
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
// 요청에 에러가 생김
const GET_POST_ERROR = "GET_POST_ERROR";

const CLEAR_POST = "CLEAR_POST";

// thunk 생성 함수
export const getPosts = createPromiseThunk(GET_POSTS, postAPI.getPosts);
// thunk 생성 함수
export const getPost = createPromiseThunk(GET_POST, postAPI.getPostById);

export const clearPost = () => ({ type: "CLEAR_POST" });

const initialState = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial(),
};

const getPostsReducer = handleAsyncActions(GET_POSTS, "posts", true);
const getPostReducer = handleAsyncActions(GET_POST, "post");

//리듀서 생성
export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      return getPostsReducer(state, action);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      return getPostReducer(state, action);
    case CLEAR_POST:
      return {
        ...state,
        post: reducerUtils.initial(),
      };
    default:
      return state;
  }
}
