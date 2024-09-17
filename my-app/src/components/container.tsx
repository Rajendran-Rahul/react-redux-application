"use client";

import { Provider } from "react-redux";
import store from "@/redux/store";
import PostContainer from "@/components/post-container";
import PostForm from "@/components/post-form";

const IndexComponent = () => (
  <Provider store={store}>
    <div className="flex flex-col justify-center items-center container gap-4">
      <PostForm />
      <PostContainer />
    </div>
  </Provider>
);

export default IndexComponent;
