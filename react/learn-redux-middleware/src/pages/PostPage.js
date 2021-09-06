import React from "react";
import PostContainer from "../countainers/PostContainer";

export default function PostPage({ match }) {
  const { id } = match.params;
  const postId = parseInt(id, 10);
  return <PostContainer postId={postId} />;
}
