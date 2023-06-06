import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import PostsRootLayout from "./pages/PostsRoot";
import PostsPage from "./pages/Posts";
import PostDetailPage from "./pages/PostDetail";

import routesConfig from "./routes/routesConfig";

const router = createBrowserRouter(routesConfig);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
