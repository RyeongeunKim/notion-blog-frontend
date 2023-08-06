import RootLayout from "../pages/Root";
import { loader as postsLoader } from "../pages/Posts";
import PostDetailPage from "../pages/PostDetail";

const routesConfig = [
  {
    path: "/",
    id: "posts",
    element: <RootLayout />,
    loader: postsLoader,
    children: [
      {
        path: "post",
        element: <PostDetailPage />,
        children: [
          {
            path: "detail",
            element: <PostDetailPage />,
          },
        ],
      },
    ],
  },
];

export default routesConfig;
