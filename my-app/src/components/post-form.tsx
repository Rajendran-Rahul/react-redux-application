"use client";

import { ChangeEvent, useState } from "react";
import { useDispatch, UseDispatch } from "react-redux";
import { addPost } from "@/redux/action";
import { v4 as uuid } from "uuid";

const PostForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState("");

  const onTitleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const onContentChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value);

  const onSavePost = () => {
    const newPost = {
      id: uuid,
      title: title,
      content: content,
    };
    dispatch(addPost(newPost));
    setContent("");
    setTitle("");
  };

  return (
    <div className="flex flex-col gap-y-2.5 items-center justify-center">
      <h2 className="text-blue-500 font-sans">Add a New Post</h2>
      <form>
        <div className="flex flex-col items-start gap-y-4">
          <label htmlFor="postTitle" title="">
            Post Title
          </label>
          <input
            type="text"
            id="postTitle"
            value={title}
            onChange={onTitleChange}
            className="border border-black h-7 p-2 focus:outline-black text-black"
          />
        </div>
        <div className="flex flex-col items-start gap-y-2.5">
          <label htmlFor="postContent" title="">
            Post Content
          </label>
          <textarea
            id="postContent"
            value={content}
            cols={100}
            rows={10}
            onChange={onContentChange}
            className="border border-black p-2 focus:outline-black text-black"
          />
        </div>
        <button
        type="button"
          onClick={onSavePost}
          className="p-2 rounded text-base shadow-none bg-blue-600 my-4 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default PostForm;
