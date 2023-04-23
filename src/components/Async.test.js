import { render, screen } from "@testing-library/react";
import Async from "./Aysnc";

describe("Aysnc component", () => {
  test("renders posts if request succeeds", async () => {
    render(<Async />);

    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
