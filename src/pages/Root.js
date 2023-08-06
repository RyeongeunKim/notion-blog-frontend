import { Outlet } from "react-router-dom";

import MainNavigation from "../components/posts/MainNavigation";

function PostsRootLayout() {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
}

export default PostsRootLayout;
