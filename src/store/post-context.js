import React from "react";

const PostContext = React.createContext({
  postId: "",
  changePostId: (id) => {},
  initialPostId: () => {},
});

export default PostContext;
