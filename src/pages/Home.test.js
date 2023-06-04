import { render, screen } from "@testing-library/react";
import HomePage from "./Home";

describe("HomePage Component", () => {
  test("HomePage 가 렌더링된다.", () => {
    render(<HomePage />);

    const outputElement = screen.getByText("HomePage", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });
});
