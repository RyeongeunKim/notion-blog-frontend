import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import routesConfig from "./routes/routesConfig";

describe("App component", () => {
  test("최초 페이지 접속 시 / 경로로 이동한다.", async () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/"],
    });

    render(<RouterProvider router={router} />);

    // make assertions, await changes, etc... callback 호출
  });
  test("Posts 메뉴를 클릭하면 /posts/:postId 경로로 이동한다", async () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/posts"],
    });

    render(<RouterProvider router={router} />);

    // make assertions, await changes, etc... callback 호출
  });
});
