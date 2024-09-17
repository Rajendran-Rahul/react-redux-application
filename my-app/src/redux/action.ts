const ADD_POST = "ADD_POST";
const DELETE_POST = "DELETE_POST";

const addPost = (post: any) => ({
  type: ADD_POST,
  payload: post,
});

const deletePost = (post: any) => ({
  type: DELETE_POST,
  payload: post,
});

export { ADD_POST, DELETE_POST, addPost, deletePost };
