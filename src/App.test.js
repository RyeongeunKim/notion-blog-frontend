import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import routesConfig from "./routes/routesConfig";
import userEvent from "@testing-library/user-event";

const setupRouter = (initialPath = "/") => {
  const router = createMemoryRouter(routesConfig, {
    initialEntries: [initialPath],
  });

  render(<RouterProvider router={router} />);

  return { router };
};

describe("App component", () => {
  const timeoutOptions = { timeout: 10000 };

  test("최초 페이지 접속 시 request가 성공하면 노션 통합 데이터베이스에 작성한 글 목록이 표시된다.", async () => {
    setupRouter("/");

    const listItemElements = await screen.findAllByRole(
      "listitem",
      timeoutOptions
    );
    expect(listItemElements).not.toHaveLength(0);
  });

  test("React(작성글)을 클릭하면 /:postId 경로로 이동한다.", async () => {
    const { router } = setupRouter("/");

    const linkElement = await screen.findByRole(
      "link",
      {
        name: "React",
      },
      timeoutOptions
    );

    userEvent.click(linkElement);

    await waitFor(() => {
      const pathName = router.state.location.pathname;
      const postId = pathName?.split("/")[2] || "";
      expect(pathName).toEqual(`/${postId}`);
    }, timeoutOptions);
  });
});
