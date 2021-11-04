import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../components/Post';
import { reducerUtils } from '../lib/asyncUtils';
import { getPost, goToHome, printState } from '../modules/posts';

export default function PostContainer({ postId }) {
  const { data, error, loading } = useSelector(
    state => state.posts.post[postId] || reducerUtils.initial
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) return;
    dispatch(getPost(postId));
  }, [postId, dispatch, data]);

  if (loading && !data) return <div>로딩 중이다</div>;
  if (error) return <div>에러 떴다</div>;
  if (!data) return null;

  return (
    <>
      <button onClick={() => dispatch(goToHome())}>홈으로</button>
      <button onClick={() => dispatch(printState())}>상태 나와라</button>
      <Post post={data} />;
    </>
  );
}
