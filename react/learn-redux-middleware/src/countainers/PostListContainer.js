import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostList from "../components/PostList";
import { clearPost, getPosts } from "../modules/posts";

export default function PostListContainer() {
  const { data, loading, error } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    return () => {
      dispatch(clearPost());
    };
  }, [dispatch]);

  if (loading && !data) return <div>로딩 중....</div>;
  if (error) return <div>에러 발생....</div>;
  if (!data) return null;

  return <PostList posts={data} />;
}
