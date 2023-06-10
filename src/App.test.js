import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import routesConfig from "./routes/routesConfig";
import userEvent from "@testing-library/user-event";

describe("App component", () => {
  test("최초 페이지 접속 시 / 경로이며 HomePage가 렌더링된다.", async () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/"],
    });

    render(<RouterProvider router={router} />);

    const outputElement = screen.getByText("HomePage", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });
  test("/ 에서 Home, Posts GNB 메뉴가 렌더링된다.", async () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/"],
    });

    render(<RouterProvider router={router} />);

    const homeLinkElement = await screen.findByRole("link", {
      name: "Home",
    });

    expect(homeLinkElement).toBeInTheDocument();

    const postsLinkElement = await screen.findByRole("link", {
      name: "Posts",
    });

    expect(postsLinkElement).toBeInTheDocument();
  });
  test("Posts 메뉴를 클릭하면 /posts 경로로 이동하고 All Posts(LNB) 메뉴가 렌더링된다.", async () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/posts"],
    });

    render(<RouterProvider router={router} />);

    const linkElement = await screen.findByRole("link", { name: "All Posts" });
    expect(linkElement).toBeInTheDocument();
  });
  test("/posts 에서 request가 성공하면 글 목록이 표시된다.", async () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/posts"],
    });

    render(<RouterProvider router={router} />);

    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
  test("/posts 에서 글 제목 (1) 클릭하면 /posts/:postId 경로로 이동하고 postId가 렌더링 된다.", async () => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ["/posts"],
    });

    render(<RouterProvider router={router} />);

    const linkElement = await screen.findByText("글 제목 (1)", { exact: true });

    userEvent.click(linkElement);

    const outputPageNameElement = screen.getByText("PostDetailPage", {
      exact: false,
    });
    expect(outputPageNameElement).toBeInTheDocument();

    const outputContentElement = await screen.findByText("Post ID", {
      exact: false,
    });
    expect(outputContentElement).toBeInTheDocument();
  });
});
