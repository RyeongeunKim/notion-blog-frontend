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
  test("최초 페이지 접속 시 / 경로이며 HomePage가 렌더링된다.", async () => {
    setupRouter("/");

    const outputElement = screen.getByRole("heading", { name: "HomePage" });
    expect(outputElement).toBeInTheDocument();
  });

  describe("/ 에서", () => {
    test("Home 메뉴가 렌더링된다.", async () => {
      setupRouter("/");

      const homeLinkElement = await screen.findByRole("link", {
        name: "Home",
      });

      expect(homeLinkElement).toBeInTheDocument();
    });

    test("Posts 메뉴가 렌더링된다.", async () => {
      setupRouter("/");

      const postsLinkElement = await screen.findByRole("link", {
        name: "Posts",
      });

      expect(postsLinkElement).toBeInTheDocument();
    });

    test("Posts 메뉴를 클릭하면 /posts 경로로 이동한다.", async () => {
      const { router } = setupRouter("/");

      const linkElement = await screen.findByRole("link", { name: "Posts" });
      userEvent.click(linkElement);

      await waitFor(() => {
        expect(router.state.location.pathname).toEqual("/posts");
      });
    });
  });
  describe("/posts 에서", () => {
    test("All Posts 메뉴가 렌더링된다.", async () => {
      setupRouter("/posts");

      const linkElement = await screen.findByRole("link", {
        name: "All Posts",
      });
      expect(linkElement).toBeInTheDocument();
    });

    test("request가 성공하면 글 목록이 표시된다.", async () => {
      setupRouter("/posts");

      const listItemElements = await screen.findAllByRole("listitem");
      expect(listItemElements).not.toHaveLength(0);
    });

    test("글 제목을 클릭하면 /posts/:postId 경로로 이동한다.", async () => {
      const { router } = setupRouter("/posts");

      const linkElement = await screen.findByRole(
        "link",
        {
          name: "글 제목 (1)",
        },
        { timeout: 10000 }
      );

      userEvent.click(linkElement);

      await waitFor(() => {
        const pathName = router.state.location.pathname;
        let postId = "";

        if (pathName) {
          const splitPath = pathName.split("/");

          if (splitPath.length === 3) {
            postId = splitPath[2];
          }
        }
        
        expect(pathName).toEqual(`/posts/${postId}`);
      });
    });
  });
  describe("/posts/:postId 에서", () => {
    test("선택한 글 제목 및 내용이 렌더링 된다.", async () => {
      setupRouter("/posts");
      const linkElement = await screen.findByRole(
        "link",
        {
          name: "글 제목 (1)",
        },
        { timeout: 10000 }
      );
      userEvent.click(linkElement);
      const outputPageTitleElement = screen.getAllByText("글 제목 (1)");
      expect(outputPageTitleElement).not.toHaveLength(0);
      const outputPageContentsElement = await screen.findAllByText(
        "내용",
        { exact: false },
        { timeout: 10000 }
      );
      expect(outputPageContentsElement).not.toHaveLength(0);
    });
  });
});
