import { Outlet } from "react-router-dom";

import MainNavigation from "../components/posts/MainNavigation";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
}

export default RootLayout;
