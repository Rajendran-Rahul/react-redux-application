"use client";

import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "@/redux/action";

const PostContainer = () => {
  const { posts } = useSelector((state: any) => state.posts);
  const dispatch = useDispatch();

  const handleDeletePost = (postId: string) => {
    dispatch(deletePost(postId));
  };

  return (
    <div>
      <h2>Posts</h2>
      <div className="m-4">
        {posts.map((post: any) => (
          <div key={post.title} className="flex flex-col gap-4">
            <div className="prose text-base">
            <div>{post.title}</div>
            <div>{post.content}</div>
            </div>
            <button onClick={() => handleDeletePost(post.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostContainer;
