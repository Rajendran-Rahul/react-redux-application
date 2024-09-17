import { combineReducers } from "redux";
import { addPost, deletePost, ADD_POST, DELETE_POST } from "./action";

const initialState = {
  posts: [],
};

const postReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [state.posts, action.payload],
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((post: any) => post.id !== action.payload),
      };
    }
    default: {
      return state;
    }
  }
};

export const rootReducer = combineReducers({
  posts: postReducer,
});
