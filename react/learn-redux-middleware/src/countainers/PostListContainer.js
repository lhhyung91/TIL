import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostList from '../components/PostList';
import { clearPost, getPosts } from '../modules/posts';

export default function PostListContainer({ postId }) {
  const { data, loading, error } = useSelector(state => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) return;
    dispatch(getPosts(postId));
    return () => {
      dispatch(clearPost());
    };
  }, [postId, dispatch]);

  if (loading && !data) return <div>로딩 중....</div>;
  if (error) return <div>에러 발생....</div>;
  if (!data) return null;

  return <PostList posts={data} />;
}
