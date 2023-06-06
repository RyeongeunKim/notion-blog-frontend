import RootLayout from "../pages/Root";
import HomePage from "../pages/Home";
import PostsRootLayout from "../pages/PostsRoot";
import PostsPage, { loader as postsLoader } from "../pages/Posts";
import PostDetailPage from "../pages/PostDetail";

const routesConfig = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "posts",
        element: <PostsRootLayout />,
        children: [
          { index: true, element: <PostsPage />, loader: postsLoader },
          { path: ":postId", element: <PostDetailPage /> },
        ],
      },
    ],
  },
];

export default routesConfig;
