import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../components/Post";
import { getPost } from "../modules/posts";

export default function PostContainer({ postId }) {
  const { data, error, loading } = useSelector((state) => state.posts.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(postId));
  }, [postId, dispatch]);

  if (loading) return <div>로딩 중이다</div>;
  if (error) return <div>에러 떴다</div>;
  if (!data) return null;

  return <Post post={data} />;
}
