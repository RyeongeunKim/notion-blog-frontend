import React, { useState } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import routesConfig from "./routes/routesConfig";
import PostContext from "./store/post-context";

const router = createBrowserRouter(routesConfig);

function App() {
  const [postId, setPostId] = useState("");

  const changePostIdHandler = (id) => setPostId(id);
  const initialPostIdHandler = () => setPostId("");

  const postIdContext = {
    postId: postId,
    changePostId: changePostIdHandler,
    initialPostId: initialPostIdHandler,
  };

  return (
    <PostContext.Provider value={postIdContext}>
      <RouterProvider router={router} />
    </PostContext.Provider>
  );
}

export default App;
