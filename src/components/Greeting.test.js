import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const hellowWorldElement = screen.getByText("Hello World!");
    expect(hellowWorldElement).toBeInTheDocument();
  });
});
