import RootLayout from "../pages/Root";
import HomePage from "../pages/Home";
import PostsRootLayout from "../pages/PostsRoot";
import PostsPage, { loader as postsLoader } from "../pages/Posts";
import PostDetailPage, {
  loader as postDetailLoader,
} from "../pages/PostDetail";
import ChildDetailPage, {
  loader as childDetailLoader,
} from "../pages/ChildDetail";

const routesConfig = [
  {
    path: "/",
    id: "posts",
    element: <PostsRootLayout />,
    loader: postsLoader,
    children: [
      {
        path: ":postId",
        element: <PostDetailPage />,
        loader: postDetailLoader,
        
      },
      {
        path: ":blockId",
        element: <ChildDetailPage />,
        loader: childDetailLoader,
      },
    ],
  },
];
// const routesConfig = [
//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [
//       {
//         index: true,
//         element: <HomePage />,
//       },
//       {
//         path: "posts",
//         id: "posts",
//         element: <PostsRootLayout />,
//         loader: postsLoader,
//         children: [
//           { index: true, element: <PostsPage /> },
//           {
//             path: ":postId",
//             element: <PostDetailPage />,
//             loader: postDetailLoader,
//           },
//           {
//             path: ":blockId",
//             element: <ChildDetailPage />,
//             loader: childDetailLoader,
//           },
//         ],
//       },
//     ],
//   },
// ];

export default routesConfig;
